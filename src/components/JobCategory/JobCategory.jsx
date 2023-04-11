import React from 'react';


const JobCategory = ({ category }) => {
    console.log(category);
    const { logo, name, available_job } = category;

    return (
        <div>
        
            <div className="h-[250px] p-4 bg-teal-50 rounded-lg">
                <img className="w-20" src={logo} alt="" />
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="text-lg">{available_job}</p>
            </div>
        </div>


    );
};

export default JobCategory;