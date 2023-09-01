import express from "express"
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { getPath as gp, fsModules as fs } from './dependencies/dependencies.js'
import { start } from './mongo/mongo.js'

import dotenv from 'dotenv'
dotenv.config()

import authRouter from './routes/authRoutes.js'
import newsRouter from "./routes/newsRoutes.js"

const server = express()

const PORT = process.env.PORT || 6969

let logfilePath = gp('logs.txt', "logs", "..")

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(async (rq, rs, next) => {
    await fs.append(logfilePath, "\nServer accessed at " + new Date())
    next()
})

server.use(cookieParser())

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your own adress if needed
    credentials: true,
}

server.use(cors(corsOptions))
server.use('/auth', authRouter)
server.use('/news', newsRouter)

server.listen(PORT, async () => {
    console.log(`Server listening on ${PORT}`)
    await start()
});
