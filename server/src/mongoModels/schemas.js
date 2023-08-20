import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    stringPass: {
        type: String,
        required: true
    },
    refreshToken: {
        type: Array,
        default: []
    }
})

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
    priority: {
        type: String,
        default: 'normal',
        required: true
    }
})

export const News = mongoose.model('News', newsSchema)
export const User = mongoose.model('User', userSchema)

