import express from "express"

import { AccountController } from "../controllers/controllers.js"
import { checkLogin } from "../middleware/authencator.js"

const authRouter = express.Router()
const ctrl = new AccountController()

////// LOGOUT //////

authRouter.post('/logout', ctrl.logOut)

////// LOG IN //////

authRouter.post('/login', ctrl.logIn)

////// CREATE ACCOUNT //////

authRouter.post('/createAcc', ctrl.createAcc)

////// TOKEN //////

authRouter.post('/checkLogin', async (req, res) => {
    checkLogin(req, res)
})

////// RANDOM //////

authRouter.get("*", (req, res) => {
    res.sendStatus(404)
})
authRouter.post("*", (req, res) => {
    res.sendStatus(404)
})
authRouter.delete("*", (req, res) => {
    res.sendStatus(404)
})
authRouter.put("*", (req, res) => {
    res.sendStatus(404)
})
authRouter.patch("*", (req, res) => {
    res.sendStatus(404)
})

export default authRouter