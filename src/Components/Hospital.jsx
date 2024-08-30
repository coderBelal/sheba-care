import React from 'react';
import img from "../assets/hero-image.webp";

const Hospital = () => {
  const hospitals = [
    { name: "CHITTAGONG MEDICAL COLLEGE", location: "Dhemsha, London", specialty: "Physics Cardiologist" },
    { name: "CITY HOSPITAL", location: "Dhaka, Bangladesh", specialty: "Orthopedic Surgeon" },
    { name: "GENERAL HOSPITAL", location: "Chittagong, Bangladesh", specialty: "Neurologist" },
    { name: "MEDICAL CENTER", location: "Sylhet, Bangladesh", specialty: "Pediatrician" },
    { name: "HEALTH CLINIC", location: "Rajshahi, Bangladesh", specialty: "Gynecologist" },
    { name: "WELLNESS HOSPITAL", location: "Khulna, Bangladesh", specialty: "Cardiologist" }
  ];

  return (
    <div className="px-4 py-8">
      {hospitals.map((hospital, index) => (
        <div 
          key={index} 
          className="mx-auto flex flex-col md:flex-row items-center justify-between max-w-7xl mb-7 bg-teal-600 rounded-lg w-full p-4 md:p-8"
        >
          <div className="bg-slate-50 w-[60px] h-[65px] rounded-full flex-shrink-0 mb-4 md:mb-0    lg:mr-5">
            <img src={img} alt="Hospital logo" className="w-[50px] mx-auto" />
          </div>
          <div className='text-gray-900 text-center md:text-left md:flex-grow mb-4 md:mb-0 '>
            <h1 className='text-lg font-semibold'>
              Hospital Name: <span className='font-bold'>{hospital.name}</span>
            </h1>
            <p className="text-base">
              Place: <span className='font-bold'>{hospital.location}</span>
            </p>
            <p className="text-base">
              Services: <span className='font-bold'>{hospital.specialty}</span>
            </p>
          </div>
          <button className="bg-teal-800 px-4 py-2 text-white rounded-2xl">
            Call Helpline
          </button>
        </div>
      ))}
    </div>
  );
};

export default Hospital;
