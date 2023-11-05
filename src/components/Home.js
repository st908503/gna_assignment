import React from 'react'
import Card from './Card'
import Tours from './Tours'
import Sidebar from './Sidebar'
import Banner from './Banner'

const Home = () => {
    return (
        <div>
            <Tours />
            <div className='flex'>
                <Sidebar />
                <Card />
            </div>
            <Banner />
        </div>
    )
}

export default Home