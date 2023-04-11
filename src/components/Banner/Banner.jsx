import React from 'react';

const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-teal-50 to-slate-50'>
            <div className='w-9/12 mx-auto md:flex flex-col md:flex-row justify-between items-center gap-8'>
            <div>
                <h1 className='text-4xl md:text-6xl font-bold'>One Step <br></br>Closer To Your <br></br><span className='text-indigo-500'>Dream Job</span></h1>
                <p className='text-xl my-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-gradient-to-r from-indigo-500 to-purple-600 py-3 px-8 rounded-lg text-white font-bold hover:scale-105 mb-8' style={{transition: '.5s'}}>Get Started</button>
            </div>
            <div className='md:w-[1100px]'>
                <img src="/public/images/P3OLGJ1 copy 1.png" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;