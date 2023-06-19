import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Rechart = () => {
    const marksArray = [
        { id: 1, name: '2015', jobs: 460 },
        { id: 2, name: '2016', jobs: 659 },
        { id: 3, name: '2017', jobs: 760 },
        { id: 4, name: '2018', jobs: 848 },
        { id: 5, name: '2019', jobs: 959 },
        { id: 6, name: '2020', jobs: 1253 },
        { id: 7, name: '2021', jobs: 2360 },
        { id: 8, name: '2022', jobs: 3460 },
    ];   
    return (
        <div className='md:w-9/12 mx-auto mt-10 mb-20'>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
                <LineChart
                width={1100}
                height={300}
                data={marksArray}>
                    <Line dataKey="jobs"></Line>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis dataKey="jobs"></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default Rechart;