import React, { createContext } from "react";
import { useState } from "react";

export const FeatureContext = createContext([]);

const FeatureContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  return (
    <FeatureContext.Provider value={{ jobs, setJobs }}>
      {children}
    </FeatureContext.Provider>
  );
};

export default FeatureContextProvider;