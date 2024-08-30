import partner from "../assets/partner1.webp";
import partner1 from "../assets/partner2.webp";
import partner2 from "../assets/partner3.webp";
import partner3 from "../assets/partner4.webp";
import partner4 from "../assets/partner5.webp";
import doctor from "../assets/doctor-group.webp";

const Partner = () => {
  return (
    <div className="px-4 py-6  mx-auto   max-w-7xl">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Our Partners</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <div className="w-32 h-32 flex items-center justify-center">
          <img src={partner} alt="Partner 1" className="object-contain" />
        </div>
        <div className="w-32 h-32 flex items-center justify-center">
          <img src={partner1} alt="Partner 2" className="object-contain" />
        </div>
        <div className="w-32 h-32 flex items-center justify-center">
          <img src={partner2} alt="Partner 3" className="object-contain" />
        </div>
        <div className="w-32 h-32 flex items-center justify-center">
          <img src={partner3} alt="Partner 4" className="object-contain" />
        </div>
        <div className="w-32 h-32 flex items-center justify-center">
          <img src={partner4} alt="Partner 5" className="object-contain" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center bg-green-300 p-8 rounded-lg shadow-md">
        <div className="  ">
          <img src={doctor} alt="Doctor Group"  />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl font-bold text-green-950 mb-4">Are You A Doctor?</h1>
          <p className="text-xl text-green-800 mb-6">Get connected with us through the Connect App</p>
          <button className="bg-teal-950 text-white px-6 py-3 rounded-full shadow-md hover:bg-teal-800 transition duration-300">
            Connect Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partner;
