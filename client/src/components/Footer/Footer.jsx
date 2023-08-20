import React from "react"

function Footer() {
    return (
        <footer>
            <div className="privacyPolicy">
                <h3>© 2021 KPS - priemyselný tovar, s.r.o </h3>
                <a href={require("../../assets/GDPR.pdf")} target="_blank" rel="noopener noreferrer">
                    Security Policy
                </a>
            </div>
            <a className="credits" href="https://github.com/SarfDime" target="_blank" rel="noopener noreferrer">
                <p>creator</p>
                <svg viewBox="0 0 24 24">
                    <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z" />
                        <path d="M14.333 19v-1.863c.025-.31-.018-.62-.126-.913a2.18 2.18 0 0 0-.5-.781c2.093-.227 4.293-1 4.293-4.544a3.48 3.48 0 0 0-1-2.434a3.211 3.211 0 0 0-.06-2.448s-.787-.227-2.607.961a9.152 9.152 0 0 0-4.666 0c-1.82-1.188-2.607-.96-2.607-.96A3.211 3.211 0 0 0 7 8.464a3.482 3.482 0 0 0-1 2.453c0 3.519 2.2 4.291 4.293 4.544a2.18 2.18 0 0 0-.496.773a2.134 2.134 0 0 0-.13.902V19" />
                        <path d="M9.667 17.702c-2 .631-3.667 0-4.667-1.948" />
                    </g>
                </svg>
            </a>
        </footer>
    )
}

export default Footer
