import React, { useState } from 'react';

const doctors = [
  { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist', location: 'New York', rating: 4.5 },
  { id: 2, name: 'Dr. Jane Smith', specialty: 'Neurologist', location: 'Los Angeles', rating: 4.8 },
  { id: 3, name: 'Dr. Emily Johnson', specialty: 'Pediatrician', location: 'Chicago', rating: 4.2 },
  { id: 4, name: 'Dr. Michael Brown', specialty: 'Orthopedic', location: 'Bogura', rating: 4.7 },
  { id: 5, name: 'Dr. Sarah Davis', specialty: 'Dermatologist', location: 'Dhaka', rating: 4.9 },
  { id: 6, name: 'Dr. William Martinez', specialty: 'Cardiologist', location: 'Dhaka', rating: 4.3 },
  { id: 7, name: 'Dr. Lisa Wilson', specialty: 'Neurologist', location: 'Bogura', rating: 4.6 },
  { id: 8, name: 'Dr. David Anderson', specialty: 'Pediatrician', location: 'New York', rating: 4.1 },
  { id: 9, name: 'Dr. Jessica Moore', specialty: 'Orthopedic', location: 'Chicago', rating: 4.4 },
  { id: 10, name: 'Dr. Matthew Taylor', specialty: 'Dermatologist', location: 'Los Angeles', rating: 4.5 },
  { id: 11, name: 'Dr. Karen Thomas', specialty: 'Cardiologist', location: 'Dhaka', rating: 4.6 },
  { id: 12, name: 'Dr. James Lee', specialty: 'Neurologist', location: 'Bogura', rating: 4.7 },
  { id: 13, name: 'Dr. Patricia Harris', specialty: 'Pediatrician', location: 'Dhaka', rating: 4.8 },
  { id: 14, name: 'Dr. Robert Clark', specialty: 'Orthopedic', location: 'New York', rating: 4.3 },
  { id: 15, name: 'Dr. Nancy Lewis', specialty: 'Dermatologist', location: 'Chicago', rating: 4.2 },
  { id: 16, name: 'Dr. Steven Robinson', specialty: 'Cardiologist', location: 'Los Angeles', rating: 4.5 },
  { id: 17, name: 'Dr. Karen Walker', specialty: 'Neurologist', location: 'Dhaka', rating: 4.9 },
  { id: 18, name: 'Dr. Daniel Wright', specialty: 'Pediatrician', location: 'Bogura', rating: 4.4 },
  { id: 19, name: 'Dr. Jennifer Scott', specialty: 'Orthopedic', location: 'Chicago', rating: 4.7 },
  { id: 20, name: 'Dr. Charles Adams', specialty: 'Dermatologist', location: 'New York', rating: 4.3 },
];

const FindDoctor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const specialties = ['All', 'Cardiologist', 'Neurologist', 'Pediatrician', 'Orthopedic', 'Dermatologist'];
  const locations = ['All', 'New York', 'Los Angeles', 'Chicago', 'Bogura', 'Dhaka'];

  const filteredDoctors = doctors.filter(doctor => {
    return (
      (searchTerm === '' || doctor.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty) &&
      (selectedLocation === 'All' || doctor.location === selectedLocation)
    );
  });

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Find a Doctor</h1>
      <div className="mb-6 flex flex-col md:flex-row md:justify-between gap-4">
        <input
          type="text"
          placeholder="Search by name"
          className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
        >
          {specialties.map(specialty => (
            <option key={specialty} value={specialty}>{specialty}</option>
          ))}
        </select>
        <select
          className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDoctors.map(doctor => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{doctor.name}</h2>
            <p className="text-gray-600">Specialty: <span className="font-medium">{doctor.specialty}</span></p>
            <p className="text-gray-600">Location: <span className="font-medium">{doctor.location}</span></p>
            <p className="text-yellow-500 mt-2">Rating: <span className="font-semibold">{doctor.rating} / 5</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindDoctor;
