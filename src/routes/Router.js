import React from 'react'
import Navbar from '../components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Footer from '../components/Footer'

const Router = () => {
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path='' element={<Home />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>

    )
}

export default Router