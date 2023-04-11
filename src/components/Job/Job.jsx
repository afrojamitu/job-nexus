import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Job = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Job;