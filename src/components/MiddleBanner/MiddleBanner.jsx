import React from 'react';
import './MiddleBanner.css'

const MiddleBanner = () => {
    return (
        <div className='text-white middle-banner h-[500px] flex items-center mb-10'>
            <div className='bg-black opacity-70 p-8 md:p-16 w-3/4 mx-auto'>
            <h1 className="md:text-5xl text-2xl text-center font-bold">Make a Difference with Your Online Resume!</h1>
            <p className='text-lg text-center py-5'>Your resume in minutes with JobHunt resume assistant is ready!</p>

            <div className='text-center'>
            <button className='bg-gradient-to-r from-indigo-500 to-purple-600 py-1 px-3 md:py-3 md:px-8 rounded-lg text-white font-bold hover:scale-105' style={{transition: '.5s'}}>KNOW MORE!</button>
            </div>
            </div>
        </div>
    );
};

export default MiddleBanner;