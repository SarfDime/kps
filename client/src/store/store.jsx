import { configureStore } from '@reduxjs/toolkit'
import newsReducer from "./slices/newsSlice"
import notficationReducer from "./slices/notificationSlice"
import loginReducer from './slices/loginSlice'

const store = configureStore({
    reducer: {
        logIn: loginReducer,
        notification: notficationReducer,
        news: newsReducer,
    }
})

export default store
