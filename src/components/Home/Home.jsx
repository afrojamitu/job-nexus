import React from 'react';
import JobCategory from '../JobCategory/JobCategory';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';


const Home = () => {

    const categories = useLoaderData();

    // console.log(categories[0].name)
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

            <div className="my-20">
            <h2 className="text-center text-3xl md:text-4xl mb-4 font-bold">Featured Jobs</h2>
            <p className="text-center text-lg">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            
            
        </div>
    );
};

export default Home;