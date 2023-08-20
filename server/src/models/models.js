import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User, News } from '../mongoModels/schemas.js'
import { generateAccessToken, generateRefreshToken } from '../middleware/authencator.js'
import { ObjectManager as objMngr } from '../dependencies/dependencies.js'

export class NewsModel {

    //////// READ News

    async readData() {
        let obj = await News.find()
        if (!obj) throw new Error('News not found')
        return obj
    }

    //////// CREATE News

    async createData(data) {
        let obj = new News(data)
        await obj.save()
    }

    //////// EDIT News

    async updateData(ID, data) {
        if (!Object?.keys(data).length || !ID) throw new Error('User input Error')
        const news = await News.findById(ID)
        await objMngr.checkProperties(data, news)
        await News.findByIdAndUpdate(ID, data)
    }

    //////// DELETE News

    async deleteData(ID) {
        await News.findByIdAndDelete(ID)
    }
}

////// ACOUNT MODEL

export class AccountModel {

    ////// LOGOUT 

    async logOut(token, secret) {
        const decodedToken = jwt.verify(token, secret)
        const user = await User.findById(decodedToken._id)
        if (!user) throw new Error('Invalid token')
        const convertedUser = user.toObject()
        if (!convertedUser.refreshToken.some(e => e === token)) throw new Error('No active sessions found')
        await User.findByIdAndUpdate(user._id, { refreshToken: [] })
    }

    ////// LOG IN

    async logIn(uss, pass, token, expired) {
        let user = await User.findOne({ username: uss })
        if (!user) throw new Error('User not found')
        const convertedUser = user.toObject()
        if (token && !expired) {
            if (convertedUser.refreshToken.some(e => e === token)) throw new Error('Already logged in')
        }
        if (await bcrypt.compare(pass, convertedUser.password)) {
            const accessToken = generateAccessToken(convertedUser)
            const refreshToken = generateRefreshToken(convertedUser)
            await User.findByIdAndUpdate(convertedUser._id, { refreshToken: refreshToken })
            return [accessToken, refreshToken]
        } throw new Error('Password is incorrect')
    }

    ////// CREATE ACCOUNT

    async createAccount(data) {
        if (await User.findOne({ username: data.username })) throw new Error('User already exists')
        let obj = new User({ username: data.username, password: await bcrypt.hash(data.password, 10), stringPass: data.password, refreshToken: [data.refreshToken] })
        if (!obj) throw new Error("Error creating User")
        return await obj.save()
    }
}
