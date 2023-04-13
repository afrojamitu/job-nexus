import { useParams } from "react-router-dom";
import NewBanner from "../NewBanner/NewBanner";
import { useEffect } from "react";
import { useState } from "react";
import { CurrencyDollarIcon, PhoneIcon, CalendarDaysIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  // console.log(job)


  const handleSavedJobs = () =>{
    const savedJobs= JSON.parse(localStorage.getItem('Saved-Jobs')) || [];
    const isJobAlreadySaved = savedJobs.some((savedJob) => savedJob.id === job.id);
    if (isJobAlreadySaved) {   
      toast.error("You have already applied to this job!");
      return;
    }
    else{
    savedJobs.push(job);
    localStorage.setItem('Saved-Jobs', JSON.stringify(savedJobs));
    toast.success("You have successfully applied to this job!");
    }
  }
 
  return (
    <div>
      <NewBanner></NewBanner>

      <div className="w-9/12 mx-auto my-16 flex flex-col md:flex-row gap-8">
        {/* details */}
        <div className="flex flex-col gap-5 md:w-[60%]">
          <p className="text-lg"><span className="font-bold">Job Description: </span>{job.description}</p>
          <p className="text-lg"><span className="font-bold">Responsibility: </span>{job.responsibility}</p>
          <p className="text-lg"><span className="font-bold">Educational Requirements: </span>{job.requirements}</p>
          <p className="text-lg"><span className="font-bold">Experiences: </span>{job.experience}</p>
        </div>

        {/* description */}
        <div className="bg-teal-50 p-5 rounded-lg md:w-[40%]">
          <h1 className="text-xl font-semibold mb-2">Job Detail</h1>
          <hr />

          <div className="flex flex-col gap-2 text-lg">
            <p className="flex items-center gap-2 mt-2"><CurrencyDollarIcon className="h-5 w-5 text-slate-600" />
              <span className="font-semibold">Salary: </span>{job.salary}
            </p>

            <p className="flex items-center gap-2"><CalendarDaysIcon className="h-5 w-5 text-slate-600" />
              <span className="font-semibold">Job Title: </span>{job.job_title}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-lg">
          <h1 className="text-xl font-semibold mt-5">Contact Information</h1>
          <hr />
            <p className="flex items-center gap-2"><PhoneIcon className="h-5 w-5 text-slate-600" />
              <span className="font-semibold">Phone: </span>{job.phone}
            </p>

            <p className="flex items-center gap-2"><EnvelopeIcon className="h-5 w-5 text-slate-600" />
              <span className="font-semibold">Email: </span>{job.email}
            </p>

            <p className="flex items-center gap-2"><MapPinIcon className="h-5 w-5 text-slate-600" />
              <span className="font-semibold">Location: </span>{job.location}
            </p>
          </div>

          <button onClick={handleSavedJobs} className='w-full mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 py-1 px-3 md:py-2 md:px-6 rounded text-white font-bold hover:scale-105' style={{ transition: '.5s' }}>Apply Now</button>
          <ToastContainer />

        </div>
      </div>

    </div>
  );
};

export default JobDetail;