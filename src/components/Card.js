import React, { useState } from 'react';
import data from './carddata';
import { AiOutlineHeart } from 'react-icons/ai'

const CardsPerPage = 4;

const Card = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastCard = currentPage * CardsPerPage;
    const indexOfFirstCard = indexOfLastCard - CardsPerPage;
    const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

    const totalPages = Math.ceil(data.length / CardsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="w-full px-20 py-20">
            {currentCards.map((dataitem) => (
                <div>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <div className='mr-3 relative'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/White_Circle.svg/1200px-White_Circle.svg.png?20180616133547" className='absolute top-4 right-3 h-7' alt="" />
                                <AiOutlineHeart className='absolute top-5 right-4 cursor-pointer text-xl text-gray-500' />
                                <img src={dataitem.image} className='h-56 w-60 rounded' alt="" />
                            </div>
                            <div className='ml-3 flex items-start flex-col'>
                                <div className='flex '>
                                    <div className='text-gray-500 text-sm pr-1 py-1'>{dataitem.time}</div>
                                    <div className='text-gray-500 text-sm pr-1'>.</div>
                                    <div className='text-gray-500 text-sm pr-1 py-1'>{dataitem.tour_duration}</div>
                                </div>
                                <div className='w-72 font-bold' style={{ textAlign: 'start' }}>
                                    <h3 className='py-1'>{dataitem.tour_description}</h3>
                                </div>

                                <div className=''>
                                    <h3 className='text-gray-500 text-sm py-1'>{dataitem.venue}</h3>
                                </div>
                                <div className='mt-3'>
                                    <h3 className='font-semibold text-sm'>Taking safety measures</h3>
                                </div>
                                <div className='mt-1'>
                                    <h3 className='text-green-700 font-semibold text-sm'>Free cancellation</h3>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <div>{dataitem.ratings}</div>
                            <div className='text-gray-500 text-sm'>{dataitem.reviews} reviews</div>
                            <div className='mt-8 text-gray-500 text-sm mb-1'>From</div>
                            <div className='text-2xl font-bold mb-1'>{dataitem.price}</div>
                            <div className='text-sm text-gray-500 mb-5'>per adult</div>
                            <button className='bg-[#3555d0] px-12 py-3 rounded text-white'>View Detail</button>
                        </div>
                    </div>
                    <hr className='mt-6 mb-6' />
                </div>
            ))}

            <div className="pagination">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`pagination-button ${currentPage === index + 1 ? 'active' : ''} bg-[#143172] text-white px-3 py-2 rounded-md m-1`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default Card;






