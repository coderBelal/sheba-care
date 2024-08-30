import React from 'react';
import blog1 from "../assets/blog1.jpg"
import blog2 from "../assets/blog2.webp"
import blog3 from "../assets/blog3.webp"
import blog4 from "../assets/blog4.webp"
import blog5 from "../assets/blog5.webp"
import blog6 from "../assets/blog6.webp"
const HealthBlogs = () => {
  const blogs = [
    { title: 'Healthy Lifestyle', imageUrl:  blog1},
    { title: 'Women Health', imageUrl: blog2},
    { title: 'Skin Care', imageUrl: blog3 },
    { title: 'Fitness Exercise', imageUrl: blog4 },
    { title: 'Health News', imageUrl: blog5 },
    { title: 'Dental Health', imageUrl: blog6 },
  ];

  return (
    <div className="bg-teal-800 py-10 pb-11  ">
      <div className="text-center mb-10">
        <span className="text-pink-500 font-bold text-lg">Blogs</span>
        <h2 className="text-white text-4xl font-bold mt-2">Health Blogs</h2>
        <p className="text-gray-300 mt-2">
          Find out how our users are spreading the world
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className=" bg-slate-300 p-6 rounded-lg flex items-center justify-center"
          >
            <div className="text-center">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-white text-lg font-semibold">{blog.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600">
          Read More
        </button>
      </div>
    </div>
  );
};

export default HealthBlogs;
