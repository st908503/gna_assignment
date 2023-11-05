import React from 'react'

const Banner = () => {
    return (
        <div className='bg-[#0d2957] py-16 mt-8 text-white'>
            <div className='flex justify-around'>
                <div className='flex flex-col'>
                    <div className='text-2xl font-bold '>Your Travel Journey Starts Here </div>
                    <div>Sign up and we'll send the best deals to you</div>
                </div>
                <div className='flex'>
                    <input className='rounded pr-44 pl-4 text-gray-300 placeholder:text-start' placeholder='Your Email' type="text" />
                    <button className='bg-[#3554d1] rounded ml-2 px-4 py-2'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Banner