"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const destinations = [
  {
    id: 1,
    name: "Bali",
    tours: "100+ Tours",
    image:
      "/Images/card-11.jpeg",
  },
  {
    id: 2,
    name: "Roma",
    tours: "100+ Tours",
    image:
      "/Images/card-22.jpeg",
  },
  {
    id: 3,
    name: "Phuket",
    tours: "100+ Tours",
    image:
      "/Images/card-33.jpeg",
  },
  {
    id: 4,
    name: "Paris",
    tours: "100+ Tours",
    image:
      "/Images/card-4.jpeg",
  },
  {
    id: 5,
    name: "Bangkok",
    tours: "100+ Tours",
    image:
      "/Images/card-5.jpeg",
  },
];

export default function TrendingDestinations() {
  return (
    <div className="py-12 px-6 md:px-12 bg-white ml-8 mr-8">
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

      <div className="grid grid-cols-2 mt-12 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {destinations.map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={300} // adjust to your design
              height={304} // adjust to your design
              className="w-full h-[17rem] object-cover transform group-hover:scale-105 transition"
            />

            <div className="absolute text-center bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-white">
              <h3 className="text-lg  font-semibold">{item.name}</h3>
              <p className="text-sm">{item.tours}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
