import React from 'react';
import NewBanner from '../NewBanner/NewBanner';
import Rechart from '../Rechart/Rechart';

const Statistics = () => {

    return (
        <div>
            <NewBanner></NewBanner>
            <h2 className='text-center text-3xl font-bold my-8'>Assignment Marks</h2>

            <Rechart></Rechart>

        </div>
    );
};

export default Statistics;