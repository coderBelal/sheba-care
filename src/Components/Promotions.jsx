import React from 'react';
 import doctorOne from "../assets/doctor1.webp"
 import doctorTwo from "../assets/doctor2.webp"
 import doctorThreee from "../assets/doctor3.webp"
const promotions = [
  {
    id: 1,
    image:  doctorOne, 
    title: 'Video Consultation',
    subtitle: 'Verified Doctors',
    bgColor: 'bg-pink-500',  
    textColor: 'text-white',
  },
  {
    id: 2,
    image:  doctorTwo, 
    title: 'Get free medical advice by asking a doctor',
    subtitle: '',
    bgColor: 'bg-teal-500',  
    textColor: 'text-white',
    buttons: [
      { label: 'View All Questions',    style: 'bg-white text-teal-500 border border-teal-500' },
      { label: 'Ask a Question',   style: 'bg-teal-700 text-white' },
    ],
  },
  {
    id: 3,
    image:  doctorThreee, 
    title: 'Get 10% OFF ON YOUR FIRST CALL',
    subtitle: '',
    bgColor: 'bg-black',  
    textColor: 'text-white',
    button: { label: 'Find Doctor', link: '/find-doctor', style: 'bg-white text-black' },
  },
];

const Promotions = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {promotions.map((promo) => (
        <div
          key={promo.id}
          className={`w-full md:w-1/3 p-6 rounded-lg shadow-lg ${promo.bgColor} ${promo.textColor}`}
        >
          <div className="relative">
            <img src={promo.image} alt={promo.title} className=" rounded-full  w-[120px] object-cover h-48" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{promo.title}</h2>
              {promo.subtitle && <p className="text-md mb-4">{promo.subtitle}</p>}

             
              {promo.buttons && (
                <div className="flex gap-2">
                  {promo.buttons.map((btn, index) => (
                    <button
                      key={index}
                      className={`py-2 px-4 rounded ${btn.style}`}
                      onClick={() => window.location.href = btn.link}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              )}

           
              {promo.button && (
                <button
                  className={`py-2 px-4 mt-4 rounded ${promo.button.style}`}
                  onClick={() => window.location.href = promo.button.link}
                >
                  {promo.button.label}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Promotions;
