import express from "express"
import { NewsController } from "../controllers/controllers.js"
import { authAcToken } from "../middleware/authencator.js"

const newsRouter = express.Router()
const ctrl = new NewsController()

////// GET //////

newsRouter.get('/read/:id?', ctrl.reData)

////// CREATE / EDIT //////

newsRouter.post('/create', authAcToken, ctrl.crData)
newsRouter.patch('/update/:id?', authAcToken, ctrl.upData)

////// DELETE //////

newsRouter.delete('/delete/:id?', authAcToken, ctrl.delData)

////// RANDOM //////

newsRouter.get("*", (req, res) => {
    res.sendStatus(404)
})
newsRouter.post("*", (req, res) => {
    res.sendStatus(404)
})
newsRouter.delete("*", (req, res) => {
    res.sendStatus(404)
})
newsRouter.put("*", (req, res) => {
    res.sendStatus(404)
})
newsRouter.patch("*", (req, res) => {
    res.sendStatus(404)
})

export default newsRouter