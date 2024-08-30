import React from 'react';
import HeroImage from "../assets/hero-image.webp"
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-teal-800 p-6 md:p-12">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Find the Best Doctor Near You
        </h1>
        <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            placeholder="Enter Your City or Location"
            className="w-full p-3 border rounded-md focus:outline-none"
          />
          <div className="flex space-x-4">
            <select className="w-1/2 p-3 border rounded-md focus:outline-none">
              <option>Symptoms</option>
              <option>Fever</option>
              <option>Cold</option>
            </select>
            <select className="w-1/2 p-3 border rounded-md focus:outline-none">
              <option>Diseases</option>
              <option>Diabetes</option>
              <option>Hypertension</option>
            </select>
          </div>
          <button className="w-full p-3 bg-pink-600 text-white rounded-md font-semibold hover:bg-pink-700 transition">
            Search
          </button>
        </form>
      </div>
      <div className="  mt-6 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={HeroImage}
          alt="Doctor"
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
