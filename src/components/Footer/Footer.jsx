import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <hr />
            <footer className="footer w-9/12 mx-auto mt-10 py-10 text-white">
                <div className='space-y-3'>
                    <div className='flex items-center'>
                        <h1 className='text-3xl font-bold border-b-4 border-black rounded-lg px-4'>Job<span className='text-purple-600 text-3xl md:text-4xl'>N</span>exus</h1>
                    </div>
                    <p className='flex items-center gap-3'><FaMapMarkerAlt className=' text-lg' />North Patenga, Chittagong</p>
                    <p className='flex items-center gap-3'><FaEnvelope className='text-md' />afrojamituu@gmail.com</p>
                    <p className='flex items-center gap-3'><FaPhone className='text-md' />+880133 333 333</p>
                </div>
                <div className='md:pt-16'>
                    <span className="footer-title">Quick Links</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/blogs' className="link link-hover">Blogs</Link>
                    <Link to='/blogs' className="link link-hover">Applied jobs</Link>
                </div>
                <div className='md:pt-16'>
                    <span className="footer-title">Follow Us</span>
                    <button className='flex items-center gap-3'><FaFacebook className='bg-blue-200 w-7 h-7 p-1 rounded-lg text-blue-600' />Job Nexus</button>

                    <button className='flex items-center gap-3'><FaLinkedin className='bg-blue-200 w-7 h-7 p-1 rounded-lg text-blue-800' />JobNexus</button>
                </div>
            </footer>
        </div>
    );
};

export default Footer;