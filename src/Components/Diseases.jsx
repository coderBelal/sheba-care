import React from 'react';
import { FaMosquito } from "react-icons/fa6";
import { CiPillsBottle1 } from "react-icons/ci";
import { GiPoisonBottle } from "react-icons/gi";
import { CgAsterisk } from "react-icons/cg";
import { FaEthernet, FaHeadSideVirus } from "react-icons/fa";

const symptoms = [
  { id: 1, icon: <FaMosquito />, label: 'Dengue Fever' },
  { id: 2, icon: <GiPoisonBottle />, label: 'Typhoid' },
  { id: 3, icon: <CiPillsBottle1 />, label: 'Piles' },
  { id: 4, icon: <CgAsterisk />, label: 'Gastritis' },
  { id: 5, icon: <FaEthernet />, label: 'Hernia' },
  { id: 6, icon: <FaHeadSideVirus />, label: 'Migraine' },
];

const Diseases = () => {
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
        <a href="#" className="text-teal-600 font-bold underline ml-auto lg:ml-0 col-span-full lg:col-span-1">
          View All
        </a>
      </div>
    </div>
  );
};

export default Diseases;
