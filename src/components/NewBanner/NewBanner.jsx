import React from 'react';

const NewBanner = () => {
    return (
        <div className='flex justify-between bg-gradient-to-r from-teal-50 to-slate-50 h-8'>
            <div className='relative bottom-24'>
                <img className='h-32' src="https://i.ibb.co/3fkztcB/Vector.png" alt="" />
            </div>
            <div className='relative bottom-28'>
                <img className='h-32' src="https://i.ibb.co/3Srm0N0/Vector-1.png" alt="" />
            </div>
        </div>
    );
};

export default NewBanner;