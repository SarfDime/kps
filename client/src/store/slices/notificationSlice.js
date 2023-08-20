import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    content: '',
    show: false,
    uniqueId: ''
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification: (state, action) => {
            const uniqueId = Date.now()
            state.content = action.payload
            state.show = true
            state.uniqueId = uniqueId
        },
        clearNotification: (state) => {
            state.show = false
        },
    },
})

export const { setNotification, clearNotification} = notificationSlice.actions

export default notificationSlice.reducer
