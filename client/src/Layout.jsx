import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
    const location = useLocation()
    const isLoginRoute = location.pathname === '/login'
    const isMatchedRoute = ['/contact', '/news', '/'].includes(location.pathname)

    return (
        <>
            {!isLoginRoute && isMatchedRoute && <Header />}
            {children}
            {!isLoginRoute && isMatchedRoute && <Footer />}
        </>
    )
}

export default Layout
