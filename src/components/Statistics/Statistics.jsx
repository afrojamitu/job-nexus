import React from 'react';
import NewBanner from '../NewBanner/NewBanner';
import Rechart from '../Rechart/Rechart';

const Statistics = () => {

    return (
        <div>
            <NewBanner></NewBanner>
            <h2 className='text-center text-white text-5xl font-bold my-8'>Achievement of Last 8 Years</h2>
            <p className="text-slate-200 md:w-9/12 md:mx-auto mx-5 text-center pb-10">Are you seeking a convenient and efficient way to explore both remote and on-site job opportunities? Look no further than JobSearchNow, the ultimate destination for job seekers searching for flexible employment options. Our comprehensive job finding website connects talented professionals with a diverse range of remote and on-site positions, empowering individuals to shape their career path according to their unique preferences and circumstances.</p>

            <Rechart></Rechart>

        </div>
    );
};

export default Statistics;