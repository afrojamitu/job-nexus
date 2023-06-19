import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='text-white'>
            <nav className='flex justify-between items-center w-9/12 mx-auto py-5'>
                
            <Link to="/"><h2 className='text-2xl md:text-3xl font-bold'>Job<span className='text-purple-600 text-3xl md:text-4xl'>N</span>exus</h2></Link>
            <div className='flex flex-col md:flex-row gap-5 text-xl font-semibold'>

            <div onClick={() => setOpen(!open)} className='md:hidden p-3'>
                <span>{open === true ? 
                <XMarkIcon className="h-7 w-7 text-red-700" /> 
                : <Bars3Icon className="h-7 w-7 text-black" />}</span>
            
            
            </div>

            <ul className={`md:flex gap-5 items-center absolute md:static duration-500 p-5 mr-5 rounded-lg ${open ? 'top-16' : '-top-40'}`}>
                
                <li><Link to="/statistics" className="hover:text-purple-600" style={{transition: '.5s'}}>Statistics</Link></li>
                <li><Link to="/aplied-jobs" className="hover:text-purple-600" style={{transition: '.5s'}}>Aplied Jobs</Link></li>
                <li><Link to="/blog" className="hover:text-purple-600" style={{transition: '.5s'}}>Blog</Link></li>
            </ul>

            </div>
            <button className='bg-gradient-to-r from-indigo-500 to-purple-600 py-1 px-3 md:py-3 md:px-8 rounded-lg text-white font-bold hover:scale-105' style={{transition: '.5s'}}>Start Applying</button>
        </nav>
        
        </div>
    );
};

export default Header;