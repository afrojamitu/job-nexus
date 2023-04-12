import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Job from './components/Job/Job';
import Statistics from './components/Statistics/Statistics';
import Home from './components/Home/Home';
import ApliedJobs from './components/Aplied-Jobs/ApliedJobs';
import Blog from './components/Blog/Blog';
import JobDetail from './components/JobDetail/JobDetail';
import NotFound from './components/NotFound/NotFound';



const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound></NotFound>
  },
  {
    path: '/',
    element:  <Job></Job>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('category.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/job-detail',
        element: <JobDetail></JobDetail>,
      },
      {
        path: '/aplied-jobs',
        element: <ApliedJobs></ApliedJobs>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
      
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
