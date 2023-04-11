import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    const categories = useLoaderData();
    const [features, setFeatures] = useState([]);
    const [showAll, setShowAll] = useState(false)

    const handleShowAll = () =>{
        setShowAll(true)
    }

    useEffect(() =>{
        fetch('features.json')
        .then(res => res.json())
        .then(data => setFeatures(data))
    },[])

    return (
        <div>
            <Banner></Banner>
            <div className="my-20">
            <h2 className="text-center text-3xl md:text-4xl mb-4 font-bold">Job Category List</h2>
            <p className="text-center text-lg">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="w-9/12 mx-auto my-20 grid grid-cols-2 md:grid-cols-4 justify-between gap-5 items-center">
            {
                categories.map(category =>{
                    // console.log(category.name)
                    return <JobCategory
                    key={category.id}
                    category={category}
                    ></JobCategory>
                })  
            }
            </div>

            <div className='w-9/12 mx-auto my-20'>
                <div className="">
                <h2 className="text-center text-3xl md:text-4xl mb-4 font-bold">Featured Jobs</h2>
                <p className="text-center text-lg">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className="my-12 grid grid-cols-1 md:grid-cols-2  justify-between gap-5 items-center">
                {
                    features.slice(0, showAll ? 6 : 4).map(feature =>{
                        return <FeaturedJobs
                        key={feature.id}
                        feature={feature}
                        ></FeaturedJobs>
                    })
                }
                </div>
                <div className='flex justify-center'>
                {
                    !showAll && <button onClick={handleShowAll} className='bg-gradient-to-r from-indigo-500 to-purple-600 py-1 px-3 md:py-2 md:px-6 rounded text-white font-bold hover:scale-105' style={{transition: '.5s'}}>See More</button>
                }
                </div>
            </div>

            
            
        </div>
    );
};

export default Home;