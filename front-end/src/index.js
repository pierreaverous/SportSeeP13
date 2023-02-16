import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/main.scss'

import reportWebVitals from './reportWebVitals'
import Accueil from './pages/Accueil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import User from './pages/User'
import Error from './pages/Error'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div className="footer-maincontent">
        <Footer />
        <Routes>
          <Route exact path="/" element={<Accueil />}></Route>
          <Route path="/user/:userId" element={<User />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
