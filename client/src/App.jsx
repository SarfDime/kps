import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import './styles.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import News from './components/News/News'
import Login from './components/Login/Login'
import Notification from './components/Notification/Notification'
import Layout from './Layout'
import { checkLogin, fetchData } from './shared/api'
import { setNewsArray } from "./store/slices/newsSlice"
import { setLogin } from './store/slices/loginSlice'

function App() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.logIn.isLoggedIn)
  
  useEffect(() => {
    async function fetchNewsData() {
      try {
        const data = await fetchData('http://localhost:5000/news/read')
        dispatch(setNewsArray(data))
      } catch (error) {
        console.error('Error fetching news:', error)
      }
    }
    fetchNewsData()
  }, [dispatch])

  useEffect(() => {
    if (isLoggedIn) {
      async function checkLoginOuter() {
        try {
          const response = await checkLogin()
          if (response === 'Not logged in') {
            dispatch(setLogin(false))
            return
          }
          if (response === 'Logged in') {
            dispatch(setLogin(true))
            return
          }
        } catch (error) {
          console.log(error)
        }
      }
      checkLoginOuter()
    }
  }, [dispatch])

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Notification />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App