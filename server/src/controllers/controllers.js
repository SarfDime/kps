import { AccountModel, NewsModel } from "../models/models.js"
import dotenv from "dotenv"
import jwt from 'jsonwebtoken'
dotenv.config()

const accMdl = new AccountModel()
const newsMdl = new NewsModel()

export class NewsController {

    //////// READ News

    async reData(req, res) {
        try {
            let data = await newsMdl.readData()
            res.send(data)
        } catch (e) {
            res.status(500).send(e.message)
        }
    }

    //////// CREATE News

    async crData(req, res) {
        if (!Object?.keys(req.body).length) return res.status(400).send("User Input Error")
        try {
            await newsMdl.createData(req.body)
            res.send('News created successfully')
        } catch (e) {
            res.send(e.message)
        }
    }

    //////// EDIT News

    async upData(req, res) {
        if (!Object?.keys(req.body).length || !req.params.id) return res.status(400).send("User Input Error")
        try {
            await newsMdl.updateData(req.params.id, req.body)
            res.send('Data updated successfully')
        } catch (e) {
            if (e.name === 'CastError') return res.status(404).send(`News with id ${req.params.id} not found`)
            res.send(e.message)
        }
    }

    //////// DELETE News

    async delData(req, res) {
        try {
            await newsMdl.deleteData(req.params.id)
            res.send('Data deleted successfully')
        } catch (e) {
            if (e.name === 'CastError') return res.status(404).send(`News with id ${req.params.id} not found`)
            res.send(e.message)
        }
    }
}

/////// ACCOUNT CONTROLLER ///////

export class AccountController {

    ////// LOGOUT

    async logOut(req, res) {
        try {
            const refreshToken = req.cookies['refreshToken']
            if (!refreshToken) return res.send('Already Logged Out')
            await accMdl.logOut(refreshToken, process.env.REFRESH_TOKEN_SECRET)
            res.clearCookie('refreshToken')
            res.clearCookie('accessToken')
            res.send('Logout successful')
        } catch (e) {
            if (e.name === 'TokenExpiredError') {
                res.clearCookie('refreshToken')
                res.clearCookie('accessToken')
                return res.send("Already logged out.")
            }
            res.send(e.message)
        }
    }

    ////// LOG IN

    async logIn(req, res) {
        try {
            const { username, password } = req.body
            const refreshToken = req.cookies['refreshToken']
            if (refreshToken) {
                jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
            }
            if (!username || !password) return res.status(400).send('Invalid username or password')
            let tokensArray = await accMdl.logIn(username, password, refreshToken, false)
            if (tokensArray.length === 0) throw new Error("Some Error")
            res.cookie('accessToken', tokensArray[0], {
                httpOnly: true,
                sameSite: 'lax',
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            res.cookie('refreshToken', tokensArray[1], {
                httpOnly: true,
                sameSite: 'lax',
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            res.status(200).send("Successfully logged in")
        } catch (e) {
            if (e.name === 'TokenExpiredError') {
                try {
                    const { username, password } = req.body
                    const refreshToken = req.cookies['refreshToken']
                    let tokensArray = await accMdl.logIn(username, password, refreshToken, true)
                    if (tokensArray.length === 0) throw new Error("Some Error")
                    res.cookie('accessToken', tokensArray[0], {
                        httpOnly: true,
                        sameSite: 'lax',
                        maxAge: 7 * 24 * 60 * 60 * 1000
                    })
                    res.cookie('refreshToken', tokensArray[1], {
                        httpOnly: true,
                        sameSite: 'lax',
                        maxAge: 7 * 24 * 60 * 60 * 1000
                    })
                    res.status(200).send("Successfully logged in")
                    return 
                } catch (error) {
                    res.status(403).send(e.message)
                    return 
                }
            }
            res.status(403).send(e.message)
        }
    }

    ////// CREATE ACCOUNT

    async createAcc(req, res) {
        if (!Object?.keys(req.body).length) return res.status(400).send("User Input Error")
        try {
            await accMdl.createAccount(req.body)
            res.send('User created successfully')
        } catch (e) {
            res.status(403).send(e.message)
        }
    }
}

