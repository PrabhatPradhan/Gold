"use client";
import React, { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function TrendingDestinations() {
  const destinations = [
    {
      city: "Paris",
      tours: "100+ Tours",
      img: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      city: "Singapore",
      tours: "300+ Tours",
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=687",
    },
    {
      city: "Paris",
      tours: "100+ Tours",
      img: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      city: "Singapore",
      tours: "300+ Tours",
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=687",
    },

    {
      city: "Paris",
      tours: "100+ Tours",
      img: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      city: "Singapore",
      tours: "300+ Tours",
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=687",
    },
    {
      city: "Paris",
      tours: "100+ Tours",
      img: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      city: "Singapore",
      tours: "300+ Tours",
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=687",
    },

    {
      city: "Paris",
      tours: "100+ Tours",
      img: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      city: "Singapore",
      tours: "300+ Tours",
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=687",
    },

    {
      city: "Paris",
      tours: "100+ Tours",
      img: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      city: "Singapore",
      tours: "300+ Tours",
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=687",
    },

    {
      city: "Paris",
      tours: "100+ Tours",
      img: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      city: "Singapore",
      tours: "300+ Tours",
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=687",
    },

    {
      city: "Paris",
      tours: "100+ Tours",
      img: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      city: "Singapore",
      tours: "300+ Tours",
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=687",
    },

    {
      city: "Paris",
      tours: "100+ Tours",
      img: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      city: "Singapore",
      tours: "300+ Tours",
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=687",
    },
    {
      city: "Paris",
      tours: "100+ Tours",
      img: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      city: "Singapore",
      tours: "300+ Tours",
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=687",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = 200; // match with card width
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section style={{ maxWidth: "100%", padding: "60px 20px" }}>
      {/* Heading */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
          maxWidth: "1200px",
          marginInline: "auto",
           
        }}
      >
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "700",
            color: "#0f172a",
            margin: 0,
          }}
        >
          Trending destinations
        </h2>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontWeight: 500,
            textDecoration: "none",
            color: "#0f172a",
          }}
        >
          See all <IoIosArrowForward style={{ fontSize: "16px" }} />
        </a>
      </div>

      {/* Scrollable Cards */}
      <div style={{ position: "relative", overflowX: "hidden" }}>
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
            padding: "8px",
            
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            marginLeft: "3px",
          }}
        >
          <IoIosArrowBack />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: "20px",
            padding: "0 50px",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            
          }}
        >
          {destinations.map((d, i) => (
            <div
              key={i}
              style={{
                flex: "0 0 auto",
                width: "130px",
                scrollSnapAlign: "start",
                textAlign: "center",
              }}
            >
              <img
                src={d.img}
                alt={d.city}
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "12px",
                }}
              />
              <p
                style={{ fontWeight: 600, fontSize: "18px", color: "#0f172a" }}
              >
                {d.city}
              </p>
              <p style={{ fontSize: "14px", color: "#64748b" }}>{d.tours}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
            padding: "8px",
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}
