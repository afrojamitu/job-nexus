import React from 'react';
import { CurrencyDollarIcon,MapPinIcon } from '@heroicons/react/24/solid'

const FeaturedJobs = ({feature}) => {
    const {logo, job_title, company, location, salary} = feature;
    // console.log(feature)
    return (
        <div>
            <div className="h-full p-8 border rounded-lg">
                <img className="w-20 mb-3" src={logo} alt="" />
                <h3 className="text-2xl font-bold mb-2">{job_title}</h3>
                <p className="text-lg mb-2">{company}</p>
                <div className='flex gap-5 my-4'>
                    <button className='border border-indigo-400 text-indigo-500 font-semibold py-1 px-5 hover:scale-105' style={{transition: '.5s'}}>Remote</button>
                    <button className='border border-indigo-400 text-indigo-500 font-semibold py-1 px-5 hover:scale-105' style={{transition: '.5s'}}>On-Site</button>
                </div>
                <div className='flex justify-between text-md my-3'>
                <p className='flex gap-1 items-center'><MapPinIcon className="h-5 w-5 text-slate-600" />
                {location}</p>
                <p className='flex gap-1 items-center'><CurrencyDollarIcon className="h-5 w-5 text-slate-600" />
                    Salary: {salary}</p>
                </div>

                <button className='bg-gradient-to-r from-indigo-500 to-purple-600 py-1 px-3 md:py-2 md:px-6 rounded text-white font-bold hover:scale-105' style={{transition: '.5s'}}>View Detail</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;