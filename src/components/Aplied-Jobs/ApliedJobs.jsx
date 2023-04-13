import React, { useState } from 'react';
import NewBanner from '../NewBanner/NewBanner';
import ReviewJobs from '../ReviewJobs/ReviewJobs';

const ApliedJobs = () => {
    const savedJobs = JSON.parse(localStorage.getItem('Saved-Jobs')) || [];
    const [jobs] = useState(savedJobs);
    const [selectedOption, setSelectedOption] = useState('');

    const handleFilterChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const remoteJobs = jobs.filter(job => job.job_location === 'Remote');
    const onSiteJobs = jobs.filter(job => job.job_location === 'On-site');

    return (
        <div>
            <NewBanner></NewBanner>
            <div className='flex justify-end w-9/12 mx-auto mt-8'>
                <select name="Filter" id="" className='py-2 px-3 bg-teal-50 border-2' onChange={handleFilterChange}>
                    <option value="">Filter</option>
                    <option value="remote">Remote</option>
                    <option value="on-site">On Site</option>
                </select>
            </div>
            {
                selectedOption === 'remote' &&
                remoteJobs.map(job => {
                    return <ReviewJobs
                        key={job.id}
                        job={job}></ReviewJobs>
                })
            }
            {
                selectedOption === 'on-site' &&
                onSiteJobs.map(job => {
                    return <ReviewJobs
                        key={job.id}
                        job={job}></ReviewJobs>
                })
            }
            {
                selectedOption === '' &&
                jobs.map(job => {
                    return <ReviewJobs
                        key={job.id}
                        job={job}></ReviewJobs>
                })
            }

        </div>
    );
};

export default ApliedJobs;
