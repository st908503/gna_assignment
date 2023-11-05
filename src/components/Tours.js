import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCalendar2Check } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";

const Tours = () => {
    return (
        <div className='p-10 bg-[#f5f5f5]'>
            <div className='font-semibold text-3xl mb-10'>Tours in London</div>
            <div className='bg-white h-24 grid grid-cols-5 justify-center items-center px-10'>
                <div className='flex justify-start col-span-1'>
                    <div className='text-2xl mx-3'>
                        <CiLocationOn />
                    </div>
                    <div>
                        <div className='font-semibold'>Location</div>
                        <div className='text-gray-500'>Where are you going?</div>
                    </div>
                </div>
                <div className=" flex justify-end h-16 w-0.5 bg-gray-300 mx-auto"></div>
                <div className=' flex justify-start col-span-1'>
                    <div className='text-2xl mx-3'>
                        <BsCalendar2Check />
                    </div>
                    <div>
                        <div className='font-semibold'>Check in -Check-out</div>
                        <div className='text-gray-500'>October-5-November-15</div>
                    </div>
                </div>
                <div className='flex justify-end col-span-1'>
                    <div className='text-2xl mx-3'>
                        <AiOutlineCompass />
                    </div>
                    <div>
                        <div className='font-semibold'>Tour Type</div>
                        <div className='text-gray-500'>2 adults - 1 children - 1 room</div>
                    </div>

                </div>
                <div className='flex justify-end col-span-1'>
                    <button className='bg-[#3453d3] text-white flex justify-center items-center px-8 py-6'> <AiOutlineSearch />Search</button>
                </div>
            </div>
        </div>
    )
}

export default Tours