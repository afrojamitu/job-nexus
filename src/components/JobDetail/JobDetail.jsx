import React, { useContext } from 'react';
import NewBanner from '../NewBanner/NewBanner';
import { FeatureContext } from '../Home/Home';

const JobDetail = () => {

    const [features, setFeatures] = useContext(FeatureContext)
    console.log(features)

    return (
        <div>
            <NewBanner></NewBanner>
            <h1>Hello its detail page</h1>
        </div>
    );
};

export default JobDetail;