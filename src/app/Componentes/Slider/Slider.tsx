"use client";

import { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaHeart } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { PiClockLight } from "react-icons/pi";

const data = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1603378995290-8d4ce0495ddd?q=80",
    location: "Paris, France",
    title: "Centipede Tour – Guided Arizona Desert Tour by ATV",
    rating: "4.8 (243)",
    price: "$189.25",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1603378995290-8d4ce0495ddd?q=80",
    location: "New York, USA",
    title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
    rating: "4.8 (243)",
    price: "$225",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1603378995290-8d4ce0495ddd?q=80",
    location: "London, UK",
    title: "Westminster Walking Tour & Westminster Abbey Entry",
    rating: "4.8 (243)",
    price: "$943",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1603378995290-8d4ce0495ddd?q=80",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.8 (243)",
    price: "$771",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1603378995290-8d4ce0495ddd?q=80",
    location: "Paris, France",
    title: "Centipede Tour – Guided Arizona Desert Tour by ATV",
    rating: "4.8 (243)",
    price: "$189.25",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1603378995290-8d4ce0495ddd?q=80",
    location: "New York, USA",
    title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
    rating: "4.8 (243)",
    price: "$225",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1603378995290-8d4ce0495ddd?q=80",
    location: "London, UK",
    title: "Westminster Walking Tour & Westminster Abbey Entry",
    rating: "4.8 (243)",
    price: "$943",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1581262177533-1b1760b87952?q=80",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.8 (243)",
    price: "$771",
  },
];

export default function TopTrending() {
  const scrollRef = useRef("");

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#f5f5f5] p-4 md:p-8 overflow-hidden relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-[#131313]">Top Trending</h2>
        <a href="#" className="text-sm text-blue-600">
          See all
        </a>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-9 overflow-x-auto   scroll-smooth   pb-2"  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 min-w-[260px] max-w-[270px] flex-shrink-0"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md w-full h-[180px] object-cover"
                />
                <button className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow">
                  <FaHeart className="text-gray-500 text-sm" />
                </button>
              </div>
              <div className="mt-3 text-sm text-gray-600 flex items-center gap-1">
                <MdLocationOn className="text-lg" /> {item.location}
              </div>
              <h3 className="mt-2 font-medium text-[16px] leading-snug">
                {item.title}
              </h3>
              <div className="mt-1 text-yellow-500 text-sm">
                ★★★★★ <span className="text-gray-600">{item.rating}</span>
              </div>
              <div className="flex justify-between items-center mt-2 text-sm">
                <div className="flex items-center gap-1">
                  <PiClockLight className="text-md" /> 4 days
                </div>
                <div>
                  From <span className="font-semibold">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
