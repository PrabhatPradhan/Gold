'use client';

import { useState } from 'react';
import {
  FaCity,
  FaLandmark,
  FaShip,
  FaBus,
  FaUmbrellaBeach,
  FaUtensils,
} from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const activities = [
  { title: 'City Tours', icon: <FaCity />, tours: '100+ Tours' },
  { title: 'Cultural Tours', icon: <FaLandmark />, tours: '100+ Tours' },
  { title: 'Day Cruises', icon: <FaShip />, tours: '100+ Tours' },
  { title: 'Bus Tours', icon: <FaBus />, tours: '100+ Tours' },
  { title: 'Beach Tours', icon: <FaUmbrellaBeach />, tours: '100+ Tours' },
  { title: 'Food Tours', icon: <FaUtensils />, tours: '100+ Tours' },
];

export default function PopularThingsToDo() {
  const [activeIndex, setActiveIndex] = useState(null); // Default: none selected

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
        <h2 className="text-3xl font-extrabold text-slate-900">Popular things to do</h2>
        <a
          href="#"
          className="text-slate-700 font-medium flex items-center gap-1 hover:underline text-sm"
        >
          See all <IoIosArrowForward />
        </a>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {activities.map(({ title, icon, tours }, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={title}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer rounded-2xl px-6 py-8 flex flex-col items-center text-center transition duration-200 ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white hover:bg-gray-100 text-slate-900 border border-gray-200'
              }`}
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full mb-5 ${
                  isActive ? 'bg-white text-indigo-600' : 'bg-indigo-100 text-indigo-600'
                }`}
              >
                <span className="text-xl">{icon}</span>
              </div>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className={`text-sm mt-1 ${isActive ? 'text-indigo-100' : 'text-slate-500'}`}>
                {tours}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
