"use client";

import { FaArrowRight } from "react-icons/fa";

const destinations = [
  {
    id: 1,
    name: "Bali",
    tours: "100+ Tours",
    image: "https://plus.unsplash.com/premium_photo-1719581957038-0121108b9455?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Roma",
    tours: "100+ Tours",
    image: "https://plus.unsplash.com/premium_photo-1664361480872-6416aab14696?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Phuket",
    tours: "100+ Tours",
    image: "https://images.unsplash.com/photo-1504598318550-17eba1008a68?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Paris",
    tours: "100+ Tours",
    image: "https://plus.unsplash.com/premium_photo-1664361480872-6416aab14696?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Bangkok",
    tours: "100+ Tours",
    image: "https://plus.unsplash.com/premium_photo-1719581957038-0121108b9455?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function TrendingDestinations() {
  return (
    <div className="py-12 px-6 md:px-12 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#131313]">
          International Trending Destinations
        </h2>
        <a
          href="#"
          className="text-[#131313] text-sm md:text-base font-medium flex items-center gap-2"
        >
          See all <FaArrowRight className="text-xs mt-[2px]" />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {destinations.map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[19rem] object-cover transform group-hover:scale-105 transition"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-white">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm">{item.tours}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
