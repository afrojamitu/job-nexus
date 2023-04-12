import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Rechart = () => {
    const marksArray = [
        { id: 1, name: 'Assignment 1', mark: 60 },
        { id: 2, name: 'Assignment 2', mark: 59 },
        { id: 3, name: 'Assignment 3', mark: 60 },
        { id: 4, name: 'Assignment 4', mark: 48 },
        { id: 5, name: 'Assignment 5', mark: 59 },
        { id: 6, name: 'Assignment 6', mark: 53 },
        { id: 7, name: 'Assignment 7', mark: 60 },
        { id: 8, name: 'Assignment 8', mark: 60 },
    ];   
    return (
        <div className='w-9/12 mx-auto'>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
                <LineChart
                width={1100}
                height={300}
                data={marksArray}>
                    <Line dataKey="mark"></Line>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis dataKey="mark"></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default Rechart;