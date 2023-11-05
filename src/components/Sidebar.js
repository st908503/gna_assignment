import React from 'react'

const Sidebar = () => {
    return (
        <div className="w-1/4 pl-16">
            <div className="flex flex-col">
                <div className='flex justify-start pt-4 pb-2'>
                    <h3 className='text-start font-semibold'>Category Types</h3>
                </div>
                <div className="flex justify-between py-1">
                    <div className='flex'>
                        <input className='mr-2' type="checkbox" />
                        <div className='text-gray-600 text-sm'>Tours</div>
                    </div>
                    <div className='text-gray-600 text-sm'>92</div>
                </div>
                <div className="flex justify-between py-1">
                    <div className='flex'>
                        <input className='mr-2' type="checkbox" />
                        <div className='text-gray-600 text-sm'>Attractions</div>
                    </div>
                    <div className='text-gray-600 text-sm'>45</div>
                </div>
                <div className="flex justify-between py-1">
                    <div className='flex'>
                        <input className='mr-2' type="checkbox" />
                        <div className='text-gray-600 text-sm'>Day Trips</div>
                    </div>
                    <div className='text-gray-600 text-sm'>21</div>
                </div>
                <div className="flex justify-between py-1">
                    <div className='flex'>
                        <input className='mr-2' type="checkbox" />
                        <div className='text-gray-600 text-sm'>Outdoor Activities</div>
                    </div>
                    <div className='text-gray-600 text-sm'>78</div>
                </div>
                <div className="flex justify-between py-1 pb-4">
                    <div className='flex'>
                        <input className='mr-2' type="checkbox" />
                        <div className='text-gray-600 text-sm'>Concerts and Shows</div>
                    </div>
                    <div className='text-gray-600 text-sm'>679</div>
                </div>
            </div>
            <hr />
            <div className='text-start font-semibold pt-4 pb-2'>Others</div>
            <div className="flex justify-between pb-4">
                <div className='flex'>
                    <input className='mr-2' type="checkbox" />
                    <div className='text-gray-600 text-sm'>Free Cancellation</div>
                </div>
                <div className='text-gray-600 text-sm'>92</div>
            </div>
            <hr />
            <div className='text-start font-semibold pt-4 pb-2'>Price</div>
            <div className='flex justify-start pb-4 pt-2'>
                <h3 className='text-gray-600 text-sm'>$0-$500</h3>
            </div>
            <div className='pb-4'>
                <input className='w-full ' type="range" />
            </div>
            <hr />
            <div className='text-start font-semibold pt-4 pb-2'>Duration</div>
            <div className="flex justify-between">
                <div className='flex'>
                    <input className='mr-2' type="checkbox" />
                    <div className='text-gray-600 text-sm'>Up to 1 hour</div>
                </div>
                <div className='text-gray-600 text-sm'>92</div>
            </div>
            <div className="flex justify-between py-1">
                <div className='flex'>
                    <input className='mr-2' type="checkbox" />
                    <div className='text-gray-600 text-sm'>1 to 4 hours</div>
                </div>
                <div className='text-gray-600 text-sm'>45</div>
            </div>
            <div className="flex justify-between py-1 pb-4">
                <div className='flex'>
                    <input className='mr-2' type="checkbox" />
                    <div className='text-gray-600 text-sm'>4 hours to 1 day</div>
                </div>
                <div className='text-gray-600 text-sm'>21</div>
            </div>
            <hr />
            <div className='text-start font-semibold  pt-4 pb-2'>Languages</div>
            <div className="flex justify-between py-1">
                <div className='flex'>
                    <input className='mr-2' type="checkbox" />
                    <div className='text-gray-600 text-sm'>English</div>
                </div>
                <div className='text-gray-600 text-sm'>92</div>
            </div>
            <div className="flex justify-between py-1">
                <div className='flex'>
                    <input className='mr-2' type="checkbox" />
                    <div className='text-gray-600 text-sm'>Spanish</div>
                </div>
                <div className='text-gray-600 text-sm'>45</div>
            </div>
            <div className="flex justify-between py-1">
                <div className='flex'>
                    <input className='mr-2' type="checkbox" />
                    <div className='text-gray-600 text-sm'>French</div>
                </div>
                <div className='text-gray-600 text-sm'>21</div>
            </div>
            <div className="flex justify-between py-1">
                <div className='flex'>
                    <input className='mr-2' type="checkbox" />
                    <div className='text-gray-600 text-sm'>Turkish</div>
                </div>
                <div className='text-gray-600 text-sm'>78</div>
            </div>
        </div>
    )
}

export default Sidebar