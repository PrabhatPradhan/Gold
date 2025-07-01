"use client";
import React, { useEffect, useState } from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1730065016779-da112df0e6ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1676139292823-5d24fd6cda27?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1681122536735-088ba354873b?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Top() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
  
    

  
    <div className="relative w-full h-[35rem] overflow-hidden">
      {/* Images with fade/slide animation */}
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Slide ${idx + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out
            ${idx === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}
        />
      ))}
 


      {/* Bottom Content */}
      <div className="absolute bottom-30 left-6  md:left-10 text-white z-10 max-w-[90%] md:max-w-[600px]">
        <h3 className="text-xl">Starting at $978</h3>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          Iceland's legendary Golden Circle
        </h1>
        <p className="mt-4  ">
          Enjoy a full-day bus tour of Iceland's legendary Golden Circle. Soak
          in the warm thermal waters of the Secret Lagoon.
        </p>
        <button className="mt-6 py-2 px-6 bg-white text-black rounded">
          View Tour
        </button>
      </div>

      {/* Timeline content */}
      <div className="absolute ml-12 bottom-10 left-6 md:left-10 text-white z-10 flex items-center gap-8 text-sm">
        <div>
          <p>Day 1</p>
          <p className="font-bold">Secret Lagoon</p>
        </div>
        <div className="h-px w-16 bg-white"></div>
        <div className="h-px w-16 bg-white"></div>
        <div className="h-px w-16 bg-white"></div>
        <div>
          <p>Day 4</p>
          <p className="font-bold">Gullfoss Waterfall</p>
        </div>
      </div>
     
    </div>
  
    </>
  );
}
