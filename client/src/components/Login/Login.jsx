import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { login, register } from "../../shared/api"
import { setNotification } from "../../store/slices/notificationSlice"
import { useDispatch } from "react-redux"
import { setLogin } from "../../store/slices/loginSlice"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const filFields = () => {
        if (!username && !password) {
            dispatch(setNotification("Fill in the fields"))
            return false
        } else if (!username) {
            dispatch(setNotification("Please enter a username"))
            return false
        } else if (!password) {
            dispatch(setNotification("Please enter a password"))
            return false
        }
        return true
    }

    const handleLogin = async () => {
        if (filFields()) {
            try {
                const response = await login(username, password)
                dispatch(setNotification(response))
                dispatch(setLogin(true))
            } catch (error) {
                dispatch(setNotification(error.message))
            }
        }
    }

    const handleRegister = async () => {
        if (filFields()) {
            try {
                const response = await register(username, password)
                dispatch(setNotification(response))
            } catch (error) {
                dispatch(setNotification(error.message))
            }
        }
    }

    return (
        <main className="loginMain">
            <div className="loginTitle">
                <h1>Login</h1>
                <NavLink to="/">
                    <svg viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m13.5 8l-4 4l4 4"
                            />
                        </g>
                    </svg>
                </NavLink>
            </div>
            <div className="loginInputs">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    min={6}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    min={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="accountButtons">
                <button className="loginButton" onClick={handleLogin}>
                    Login
                </button>
                <button className="registerButton" onClick={handleRegister}>
                    Register
                </button>
            </div>
        </main>
    )
}

export default Login
