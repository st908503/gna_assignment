import React from 'react'

const Footer = () => {
    return (
        <div className="pt-20 pb-12">
            <div className="container mx-auto grid grid-cols-5 gap-4">
                <div className="col-span-5 md:col-span-1">
                    <h3 className="font-bold pb-8">Contact Us</h3>
                    <h3 className='py-1'>Toll Free Customer Care</h3>
                    <h1 className='text-[#757b9f] text-xl font-semibold'>+(1) 1234567890</h1>
                </div>
                <div className="col-span-5 md:col-span-1">
                    <h3 className="font-bold pb-8">Company</h3>
                    <h3 className='py-1'>About us</h3>
                    <h3 className='py-1'>Careers</h3>
                </div>
                <div className="col-span-5 md:col-span-1">
                    <h3 className="font-bold pb-8">Support</h3>
                    <h3 className='py-1'>Contact</h3>
                    <h3 className='py-1'>Legal Notice</h3>
                </div>
                <div className="col-span-5 md:col-span-1">
                    <h3 className="font-bold pb-8">Other Services</h3>
                    <h3 className='py-1'>Car Hire</h3>
                    <h3 className='py-1'>Activity Finder</h3>
                </div>
                <div className="col-span-5 md:col-span-1">
                    <h3 className="font-bold pb-8">Mobile</h3>
                    <h3 className='py-1'>Download on Apple devices</h3>
                    <h3 className='py-1'>Download on Android devices</h3>
                </div>
            </div>
        </div>

    )
}

export default Footer