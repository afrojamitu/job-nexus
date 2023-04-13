import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'

const ReviewJobs = ({ job }) => {

    // console.log(job)
    return (

        <div className='my-12'>

            <div className='flex justify-between items-center w-9/12 mx-auto border p-8 mt-5'>
                <div className='flex items-center gap-4'>
                    <img className='w-28 h-12' src={job.logo} alt="" />
                    <div>
                        <p className='text-xl font-semibold'>{job.job_title}</p>
                        <p>{job.company}</p>
                        <div className='flex gap-5 my-4'>
                            <button className='border border-indigo-400 text-indigo-500 font-semibold py-1 px-5 hover:scale-105' style={{ transition: '.5s' }}>Remote</button>
                            <button className='border border-indigo-400 text-indigo-500 font-semibold py-1 px-5 hover:scale-105' style={{ transition: '.5s' }}>On-Site</button>
                        </div>
                        <div className='flex gap-3 justify-between text-md my-3'>
                            <p className='flex gap-1 items-center'><MapPinIcon className="h-6 w-5 text-slate-600" />
                                {job.location}</p>
                            <p className='flex gap-1 items-center'><CurrencyDollarIcon className="h-5 w-5 text-slate-600" />
                                Salary: {job.salary}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <button className='bg-gradient-to-r from-indigo-500 to-purple-600 py-1 px-3 md:py-2 md:px-6 rounded text-white font-bold hover:scale-105' style={{ transition: '.5s' }}>View Detail</button>
                </div>
            </div>
        </div>


    );
};

export default ReviewJobs;