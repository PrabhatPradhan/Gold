'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  {
    name: 'Thailand',
    price: '₹36,500',
    image: 'https://plus.unsplash.com/premium_photo-1750355751988-ac2f0cbc335c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Maldives',
    price: '₹70,900',
    image: 'https://plus.unsplash.com/premium_photo-1694475397501-f3ac42dbf82f?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Sri Lanka',
    price: '₹48,500',
    image: 'https://plus.unsplash.com/premium_photo-1664304414632-f23e7cc5aa81?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Vietnam',
    price: '₹8,800',
    image: 'https://plus.unsplash.com/premium_photo-1694475655188-8a87a3979eb2?q=80&w=1030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Almaty',
    price: '₹20,300',
    image: 'https://plus.unsplash.com/premium_photo-1694475532156-1047445fcbfc?q=80&w=884&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Hong Kong',
    price: '₹--,--',
    image: 'https://plus.unsplash.com/premium_photo-1694475397501-f3ac42dbf82f?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Malaysia',
    price: '₹9,800',
    image: 'https://plus.unsplash.com/premium_photo-1664304414632-f23e7cc5aa81?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Seychelles',
    price: '',
    image: 'https://plus.unsplash.com/premium_photo-1694475532156-1047445fcbfc?q=80&w=884&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Thailand',
    price: '₹36,500',
    image: 'https://plus.unsplash.com/premium_photo-1750355751988-ac2f0cbc335c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Maldives',
    price: '₹70,900',
    image: 'https://plus.unsplash.com/premium_photo-1694475397501-f3ac42dbf82f?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Sri Lanka',
    price: '₹48,500',
    image: 'https://plus.unsplash.com/premium_photo-1664304414632-f23e7cc5aa81?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Vietnam',
    price: '₹8,800',
    image: 'https://plus.unsplash.com/premium_photo-1694475655188-8a87a3979eb2?q=80&w=1030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Almaty',
    price: '₹20,300',
    image: 'https://plus.unsplash.com/premium_photo-1694475532156-1047445fcbfc?q=80&w=884&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Hong Kong',
    price: '₹--,--',
    image: 'https://plus.unsplash.com/premium_photo-1694475397501-f3ac42dbf82f?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Malaysia',
    price: '₹9,800',
    image: 'https://plus.unsplash.com/premium_photo-1664304414632-f23e7cc5aa81?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Seychelles',
    price: '',
    image: 'https://plus.unsplash.com/premium_photo-1694475532156-1047445fcbfc?q=80&w=884&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

 
 
export default function VisaFreeDestinations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="px-4 md:px-6 py-8 md:py-10 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Visa Free Destinations</h2>
          <p className="text-sm md:text-base text-gray-500">Up to 30% off! Limited time offer</p>
        </div>
        <div className="flex gap-2 self-end">
          <button onClick={() => scroll('left')} className="p-2 bg-gray-100 rounded-full">
            <ChevronLeft />
          </button>
          <button onClick={() => scroll('right')} className="p-2 bg-gray-100 rounded-full">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Scrollable Destination Cards */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto no-scrollbar pb-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {destinations.map((dest, idx) => (
          <div
            key={idx}
            className="min-w-[140px] sm:min-w-[180px] md:min-w-[220px] h-[220px] sm:h-[260px] relative rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform"
          >
            <Image src={dest.image} alt={dest.name} fill className="object-cover" />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-2 sm:p-3 text-xs sm:text-sm">
              <h3 className="font-semibold">{dest.name}</h3>
              {dest.price && (
                <p>
                  Starting at <span className="font-bold">{dest.price}</span>
                  <br />Per person
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
