import React from 'react';
import doc from "../assets/doc.jpg"; // Import the image if you plan to use the same image multiple times

const teamMembers = [
  { name: 'Alice Johnson', role: 'Founder & CEO', image: doc, bio: 'Alice has over 20 years of experience in the healthcare industry.' },
  { name: 'Bob Smith', role: 'Chief Technology Officer', image: doc, bio: 'Bob leads our tech team and oversees all technology-related projects.' },
  { name: 'Carol Lee', role: 'Head of Marketing', image: doc, bio: 'Carol is responsible for our marketing strategies and brand management.' },
];

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>

      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600">
          Our mission is to connect people with the best healthcare professionals, ensuring quality and accessible medical care for everyone.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4">
                <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-500">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
