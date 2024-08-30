import { FaFlask, FaHospital, FaSyringe, FaVideo, FaBlog, FaUserMd, FaPhone } from 'react-icons/fa'; // Import icons for the cards

const services = [
  { id: 1, icon: <FaFlask />, label: 'Labs' },
  { id: 2, icon: <FaHospital />, label: 'Hospitals' },
  { id: 3, icon: <FaSyringe />, label: 'Surgeries' },
  { id: 4, icon: <FaVideo />, label: 'Video Consultation' },
  { id: 5, icon: <FaBlog />, label: 'Blogs' },
  { id: 6, icon: <FaUserMd />, label: 'Doctors' },
  { id: 7, icon: <FaPhone />, label: 'Help Line' },
];

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-teal-600 p-4">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-col items-center justify-center p-4 bg-teal-700 text-white rounded-lg shadow-md hover:bg-teal-800 transition"
        >
          <div className="text-3xl mb-2">{service.icon}</div>
          <span className="text-lg font-semibold">{service.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
