import { createSlice } from "@reduxjs/toolkit"

const loginSlice = createSlice({
    name: "logIn",
    initialState: {
        isLoggedIn: JSON.parse(localStorage.getItem("loggedin")) || false,
    },
    reducers: {
        setLogin(state, action) {
            state.isLoggedIn = action.payload
            localStorage.setItem("loggedin", action.payload)
        },
    },
})

export const { setLogin } = loginSlice.actions
export default loginSlice.reducer
