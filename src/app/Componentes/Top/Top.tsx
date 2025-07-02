"use client";
import React from "react";

export default function Top() {
  return (
    <div className="relative w-full h-[35rem] overflow-hidden">
    {/* Background YouTube Video */}
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <iframe
        className="w-[100%] h-[120%] scale-125 absolute top-0 left-0 pointer-events-none"
        src="https://www.youtube.com/embed/3SsK-cxlj_w?autoplay=1&mute=1&controls=0&loop=1&playlist=3SsK-cxlj_w&modestbranding=1&showinfo=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  
    {/* Optional Overlay Content */}
    {/* <div className="absolute bottom-20 left-6 md:left-10 text-white z-10 max-w-[90%] md:max-w-[600px]">
      <h3 className="text-xl">Starting at $978</h3>
      <h1 className="text-3xl md:text-5xl font-bold mt-2">
        Iceland’s legendary Golden Circle
      </h1>
      <p className="mt-4">
        Enjoy a full-day bus tour of Iceland’s legendary Golden Circle. Soak
        in the warm thermal waters of the Secret Lagoon.
      </p>
      <button className="mt-6 py-2 px-6 bg-white text-black rounded">
        View Tour
      </button>
    </div> */}
  </div>
  
  );
}
