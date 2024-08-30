import React from 'react';
import donate from '../assets/d.webp';

const Donate = () => {
  return (
    <section className='mx-auto pt-16 max-w-7xl flex flex-col md:flex-row justify-between items-center p-8 space-y-6 md:space-y-0'>
      <div className='text-center md:text-left md:w-1/2'>
        <h1 className='text-4xl font-bold mb-4'>
          Donate Blood and Earn Stars
        </h1>
        <button className='bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300 mb-4'>
          Donate Now
        </button>
        <p className='text-gray-700'>
          <span className='underline cursor-pointer text-red-600'>Login</span> to view who is available for donating blood.
        </p>
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <img src={donate} alt="Donate blood" className='w-full max-w-sm rounded-lg shadow-md' />
      </div>
    </section>
  );
};

export default Donate;
