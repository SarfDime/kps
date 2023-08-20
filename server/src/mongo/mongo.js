import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const start = async (req, res, next) =>{
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: 'KPS',
        })
        console.log('Connection established')
    } catch(e){
        console.log(e)
    }
}


