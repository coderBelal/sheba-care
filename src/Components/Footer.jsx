import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from "../assets/logo.webp";
const Footer = () => {
  return (
    <footer className="bg-teal-900   text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto pt-14">
 
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Find the Best Doctor Near You</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <button className="bg-white text-teal-900 py-2 px-4 rounded-full hover:bg-teal-800 hover:text-white transition duration-300">
                Sign Up
              </button>
              <button className="border border-white text-white py-2 px-4 rounded-full hover:bg-white hover:text-teal-900 transition duration-300">
                Sign In
              </button>
            </div>
          </div>

          {/* Navigation links */}
          <div className="grid grid-cols-2 gap-8 md:gap-20 md:flex text-center md:text-left">
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul>
                <li className="hover:text-teal-300 cursor-pointer mb-2">Home</li>
                <li className="hover:text-teal-300 cursor-pointer mb-2">About Us</li>
                <li className="hover:text-teal-300 cursor-pointer mb-2">What We Do</li>
                <li className="hover:text-teal-300 cursor-pointer mb-2">To The Power of 10</li>
                <li className="hover:text-teal-300 cursor-pointer">Donate</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">What We Do</h4>
              <ul>
                <li className="hover:text-teal-300 cursor-pointer mb-2">Encouraging Testing</li>
                <li className="hover:text-teal-300 cursor-pointer mb-2">Strengthening Advocacy</li>
                <li className="hover:text-teal-300 cursor-pointer mb-2">Sharing Information</li>
                <li className="hover:text-teal-300 cursor-pointer mb-2">Building Leadership</li>
                <li className="hover:text-teal-300 cursor-pointer mb-2">Engaging With Global Fund</li>
                <li className="hover:text-teal-300 cursor-pointer">Shining a Light</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul>
                <li className="hover:text-teal-300 cursor-pointer mb-2">General Info</li>
                <li className="hover:text-teal-300 cursor-pointer mb-2">Privacy Policy</li>
                <li className="hover:text-teal-300 cursor-pointer">Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Talk to Us</h4>
              <ul>
                <li className="hover:text-teal-300 cursor-pointer mb-2">support@ercom.com</li>
                <li className="hover:text-teal-300 cursor-pointer mb-2">+66 2399 1145</li>
                <li className="hover:text-teal-300 cursor-pointer mb-2">Contact Us</li>
                <li className="hover:text-teal-300 cursor-pointer mb-2">Facebook</li>
                <li className="hover:text-teal-300 cursor-pointer mb-2">Linkedin</li>
                <li className="hover:text-teal-300 cursor-pointer">Twitter</li>
              </ul>
            </div>
          </div>
        </div>

 
        <div className="border-t border-teal-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <img src= {logo} alt="Seba Logo" className="w-32 mb-4 md:mb-0" />
          <p className="text-center md:text-left mb-4 md:mb-0">© 2024 Seba. All Rights Reserved.</p>
          <div className="flex gap-4">
            <FaFacebook className="text-white hover:text-teal-300 cursor-pointer" />
            <FaLinkedin className="text-white hover:text-teal-300 cursor-pointer" />
            <FaTwitter className="text-white hover:text-teal-300 cursor-pointer" />
          </div>
          <button 
          className="text-white font-serif     bg-teal-800 p-2  rounded-lg  mt-3"
          onClick={() => window.open('https://wa.me/+8801568885065', '_blank')}
        >
          Chat with Dev..
        </button>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
 