import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import NewBanner from "../NewBanner/NewBanner";
import { FeatureContext } from "../../Contexts/FeatureContexts";
import { useEffect } from "react";
import { useState } from "react";

const JobDetail = () => {
  let { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    fetch("/features.json")
      .then((res) => res.json())
      .then((jobs) => {
        const _job = jobs.find((job) => job.id == id);
        setJob(_job);
      });
  }, [id]);

  return (
    <div>
      <NewBanner></NewBanner>
      <h1>Job detail page</h1>
      <pre>{JSON.stringify(job, null, 2)}</pre>
    </div>
  );
};

export default JobDetail;