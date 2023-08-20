import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { User } from '../mongoModels/schemas.js'
dotenv.config()

export const generateAccessToken = user => {
    return jwt.sign({ username: user.username, _id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.AC_EAT })
}
export const generateRefreshToken = user => {
    return jwt.sign({ username: user.username, _id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.RF_EAT })
}

export const authAcToken = async (req, res, next) => {
    try {
        const refreshToken = req.cookies['refreshToken']
        const accessToken = req.cookies['accessToken']

        if (!accessToken || !refreshToken) throw new Error('No active session, please log in.')

        const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedToken._id)
        if (!user) throw new Error('Invalid token')
        next()
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            try {
                await authRfToken(req, res)
                return next()
            } catch (error) {
                return res.status(403).send("Session expored, please login again.")
            }
        }
        res.status(403).send(err.message)
    }
}

export const authRfToken = async (req, res) => {
    const rfToken = req.cookies['refreshToken']
    const decodedToken = jwt.verify(rfToken, process.env.REFRESH_TOKEN_SECRET)
    const user = await User.findById(decodedToken._id)
    if (!user) throw new Error('Invalid token')
    const convertedUser = user.toObject()
    if (!convertedUser.refreshToken.some(token => token === rfToken)) return res.status(403).send('No active sessions found')

    const newAccessToken = generateAccessToken(convertedUser)
    const newrfToken = generateRefreshToken(convertedUser)
    user.refreshToken = [newrfToken]
    await user.save()

    res.cookie('refreshToken', newrfToken, {
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.cookie('accessToken', newAccessToken, {
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
}

export const checkLogin = async (req, res) => {
    try {
        const rfToken = req.cookies['refreshToken']
        if (!rfToken) return res.send('Not logged in')

        const decodedToken = jwt.verify(rfToken, process.env.REFRESH_TOKEN_SECRET)
        const user = await User.findById(decodedToken._id)
        if (!user) return res.send("Not logged in")

        const convertedUser = user.toObject()
        if (!convertedUser.refreshToken.some(token => token === rfToken)) return res.send('Not logged in')

        res.send('Logged in')
    } catch (e) {
        res.send(e.message)
    }
}