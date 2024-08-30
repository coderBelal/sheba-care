import React from 'react';
import { FaThermometerHalf, FaHeartbeat, FaBaby, FaTint, FaLungs, FaVirus } from 'react-icons/fa'; // Import icons for symptoms

const symptoms = [
  { id: 1, icon: <FaThermometerHalf />, label: 'Fever' },
  { id: 2, icon: <FaHeartbeat />, label: 'Heart attack' },
  { id: 3, icon: <FaBaby />, label: 'Pregnancy' },
  { id: 4, icon: <FaTint />, label: 'Blood pressure' },
  { id: 5, icon: <FaLungs />, label: 'Breathlessness' },
  { id: 6, icon: <FaVirus />, label: 'Diarrhea' },
];

const SymptomsList = () => {
  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h3 className="text-xl font-bold mb-4">Symptoms</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
        {symptoms.map((symptom) => (
          <div
            key={symptom.id}
            className="flex flex-col items-center justify-center p-4 bg-white text-teal-600 rounded-lg border border-teal-500 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl">{symptom.icon}</div>
            <span className="mt-2 text-sm text-center">{symptom.label}</span>
          </div>
        ))}
        <a href="#" className="text-teal-600 font-bold underline col-span-full lg:col-span-1 lg:ml-auto">
          View All
        </a>
      </div>
    </div>
  );
};

export default SymptomsList;
