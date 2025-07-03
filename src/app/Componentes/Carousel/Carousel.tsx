"use client";
import Image from "next/image";
import React, { useRef, useState  } from "react";

export default function TrendingDestinations() {
  const destinations = [
    { city: "Paris", tours: "100+ Tours", img: "/Images/crausal-1.jpeg" },
    { city: "Singapore", tours: "300+ Tours", img: "/Images/crausal-22.jpeg" },
    { city: "London", tours: "150+ Tours", img: "/Images/crausal-3.jpeg" },
    { city: "Tokyo", tours: "250+ Tours", img: "/Images/crausal-4.jpeg" },
    { city: "Rome", tours: "120+ Tours", img: "/Images/crausal-5.jpeg" },
    { city: "New York", tours: "200+ Tours", img: "/Images/crausal-6.jpeg" },
    { city: "Dubai", tours: "180+ Tours", img: "/Images/crausal-7.jpeg" },
    { city: "Bangkok", tours: "160+ Tours", img: "/Images/crausal-8.jpeg" },
    { city: "Paris", tours: "100+ Tours", img: "/Images/crausal-1.jpeg" },
    { city: "Singapore", tours: "300+ Tours", img: "/Images/crausal-22.jpeg" },
    { city: "London", tours: "150+ Tours", img: "/Images/crausal-3.jpeg" },
    { city: "Tokyo", tours: "250+ Tours", img: "/Images/crausal-4.jpeg" },
    { city: "Rome", tours: "120+ Tours", img: "/Images/crausal-5.jpeg" },
    { city: "New York", tours: "200+ Tours", img: "/Images/crausal-6.jpeg" },
    { city: "Dubai", tours: "180+ Tours", img: "/Images/crausal-7.jpeg" },
    { city: "Bangkok", tours: "160+ Tours", img: "/Images/crausal-8.jpeg" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(destinations.length / itemsPerPage);

  const goToPage = (pageIndex: number) => {
    if (scrollRef.current) {
      const scrollAmount = pageIndex * 130 * itemsPerPage + 20 * pageIndex;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
      setActiveIndex(pageIndex);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const pageIndex = Math.round(scrollLeft / (130 * itemsPerPage + 20));
      setActiveIndex(pageIndex);
    }
  };

  // Dragging logic
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    scrollRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    scrollRef.current?.classList.remove("cursor-grabbing");
  };

  return (
    <section className="px-5 py-16">
      {/* Heading */}
      <div className="flex justify-between items-center max-w-7xl mx-auto mb-10">
        <h2 className="text-[32px] font-bold text-slate-900 ml-12">Trending destinations</h2>
        <a
          href="#"
          className="text-slate-700 mr-19 flex items-center gap-1 font-medium hover:underline text-sm"
        >
          See all
        </a>
      </div>

      {/* Slider */}
      <div className="relative max-w-5xl mx-auto">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          className="flex overflow-x-auto gap-12 scroll-smooth no-scrollbar cursor-grab select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {destinations.map((d, i) => (
            <div key={i} className="flex-shrink-0 text-center">
              <div className="w-[100px] h-[100px] relative mb-3 rounded-full overflow-hidden mx-auto">
                <Image
                  src={d.img}
                  alt={d.city}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100px, 120px"
                />
              </div>
              <p className="font-semibold text-sm text-slate-900">{d.city}</p>
              <p className="text-sm text-slate-500">{d.tours}</p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`w-2 h-2 rounded-full transition ${
                i === activeIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
