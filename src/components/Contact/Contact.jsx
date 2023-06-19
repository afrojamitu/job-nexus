import React from 'react';

const Contact = () => {
    return (
        <div className='md:w-9/12 mx-auto my-16'>
        <h1 className="text-5xl text-white text-center font-bold pb-3">GET IN TOUCH!</h1>
            <div className="hero">
                <div className="grid grid-cols-2 gap-5 items-center">
                    <div className="card flex-shrink-0 w-full text-slate-200">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-slate-300 text-lg font-semibold">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered rounded text-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-slate-300 text-lg font-semibold">Email</span>
                                </label>
                                <input type="text" placeholder="Email" className="input input-bordered rounded text-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-slate-300 text-lg font-semibold">Message</span>
                                </label>
                                <textarea className="textarea text-black rounded" placeholder="Message"></textarea>
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className='bg-gradient-to-r from-indigo-500 to-purple-600 py-1 px-3 md:py-3 md:px-8 rounded text-white font-bold hover:scale-105' style={{transition: '.5s'}}>SEND MESSAGE</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center text-slate-200 lg:text-left">
                        <h1 className="text-3xl font-bold">Send Message!</h1>
                        <p className="py-3">Our advanced platform seamlessly connects job seekers with a global network of employers, providing access to a wide range of industries and job opportunities. Utilize our cutting-edge technology to streamline your job search and secure your dream job with confidence.</p>
                        <img className='h-64' src="https://i.ibb.co/GPMnDKQ/Screenshot-72-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;