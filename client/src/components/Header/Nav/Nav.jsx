import React from "react"
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeclassname="active">
                        <svg viewBox="0 0 24 24">
                            <g
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            >
                                <path d="M21 19v-6.733a4 4 0 0 0-1.245-2.9L13.378 3.31a2 2 0 0 0-2.755 0L4.245 9.367A4 4 0 0 0 3 12.267V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z" />
                                <path d="M9 15a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6H9v-6Z" />
                            </g>
                        </svg>
                        <p>Home</p>
                    </NavLink >
                </li>
                <li>
                    <NavLink to="/news" activeclassname="active">
                        <svg viewBox="0 0 24 24">
                            <g
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinejoin="round"
                                    d="M5 21h12a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v13c0 1.657-.343 3-2 3Z"
                                />
                                <path
                                    strokeLinejoin="round"
                                    d="M3 10a2 2 0 0 1 2-2h2v10.5c0 1.38-.62 2.5-2 2.5s-2-1.12-2-2.5V10Z"
                                />
                                <circle cx="12" cy="8" r="1" />
                                <path d="M11 14h6m-6 3h3" />
                            </g>
                        </svg>
                        <p>News</p>
                    </NavLink >
                </li>
                <li>
                    <NavLink to="/contact" activeclassname="active">
                        <svg viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path strokeLinecap="round" d="M12 7h.01" />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 11h2v5m-2 0h4"
                                />
                            </g>
                        </svg>
                        <p>Contact</p>
                    </NavLink >
                </li>
            </ul>
        </nav>
    )
}

export default Nav
