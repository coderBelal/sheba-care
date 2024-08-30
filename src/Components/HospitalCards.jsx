import React from 'react';
import hos from "../assets/hos.webp"
import hos2 from "../assets/hos2.jpg"
import hos3 from "../assets/hos3.webp"
const HospitalCards = () => {
  const hospitals = [
    {
      name: 'Hospital Name',
      specialties: 'Cardiology, Obstetric and Gynecology',
      area: 'Dhaka',
      image: hos, 
    },
    {
      name: 'Hospital Name',
      specialties: 'Cardiology, Obstetric and Gynecology',
      area: 'Dhaka',
      image: hos2,  
    },
    {
        name: 'Hospital Name',
        specialties: 'Cardiology, Obstetric and Gynecology',
        area: 'Dhaka',
        image:  hos3, 
      },
      {
        name: 'Hospital Name',
        specialties: 'Cardiology, Obstetric and Gynecology',
        area: 'Dhaka',
        image:  hos,  
      },
      {
        name: 'Hospital Name',
        specialties: 'Cardiology, Obstetric and Gynecology',
        area: 'Dhaka',
        image: hos2, } 
  ];

  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className="text-center mb-10">
        <span className="text-pink-500 font-bold text-lg"> Hospital</span>
        <h2 className=" text-4xl font-bold mt-2"> Hospitals near you</h2>
        <p className="text-gray-300 mt-2">
          Find out how our users are spreading the world
        </p>
      </div>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide lg:scrollbar-default py-2">
        {hospitals.map((hospital, index) => (
          <div
            key={index}
            className="inline-block min-w-[280px] max-w-[300px] bg-white rounded-lg shadow-md p-4"
          >
            <img
              src={hospital.image}
              alt={hospital.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-bold truncate">{hospital.name}</h3>
              <p className="text-gray-600 text-sm truncate">{hospital.specialties}</p>
              <p className="text-gray-600 text-sm truncate">Area: {hospital.area}</p>
             
              <p className="text-gray-600 text-sm truncate">{hospital.address}</p>
              <button className="mt-4 px-4 py-2 bg-teal-500 text-white rounded">
                View Clinic
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalCards;
