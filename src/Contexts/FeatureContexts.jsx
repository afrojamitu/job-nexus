import React, { createContext } from 'react';


export const FeatureContext = createContext([]);
const FeatureContexts = ({children}) => {
    return (
        <div>
            <FeatureContext.Provider value={[features, setFeatures]}>
                        {children}
                        </FeatureContext.Provider>
        </div>
    );
};

export default FeatureContexts;