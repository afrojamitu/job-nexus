import React from 'react';

const About = () => {
    return (
        <div className='md:w-9/12 md:mx-auto mx-5 my-16'>
            <div className='grid grid-cols-2 gap-10'>
                <div className='grid grid-cols-2 gap-3'>
                    {/* for images */}
                    <img className='w-full rounded h-full' src="https://i.ibb.co/Y8k9tRX/Delivery-URL-Better-Up-office-politics-ARTICLE-2.webp" alt="" />
                    <img className='w-full rounded h-full' src="https://i.ibb.co/Hp1dJrd/download.jpg" alt="" />
                    <img className='w-full rounded h-full' src="https://i.ibb.co/WVKKmp8/images.jpg" alt="" />
                    <img className='w-full rounded h-full' src="https://i.ibb.co/fH5BDgw/download.jpg" alt="" />
                </div>

                <div className='text-slate-200'>
                    <h1 className='text-4xl font-bold border-l-8 border-purple-600 ps-5 py-3 mb-5 text-white'>About <span className='text-3xl font-bold'>Job<span className='text-purple-600 text-3xl md:text-4xl'>N</span>exus</span></h1>

                    <p className='text-lg'>
                    Empowering Your Job Search Journey. Discover your ideal career path effortlessly with JobNexus. Our advanced platform seamlessly connects job seekers with a global network of employers, providing access to a wide range of industries and job opportunities. Utilize our cutting-edge technology to streamline your job search and secure your dream job with confidence.
                    </p><br/>
                    <p className='text-lg'>
                    Your Job Search Accelerator. Find your next career move with ease. Our innovative platform connects job seekers with global opportunities across various industries. Powered by cutting-edge technology and a vast network of employers, JobNexus simplifies your job search and helps you land your dream job faster.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;