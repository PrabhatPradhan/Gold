'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  {
    name: 'Thailand',
    price: '₹36,500',
    image: '/Images/Visa-card-1.jpeg',
  },
  {
    name: 'Maldives',
    price: '₹70,900',
    image: '/Images/Visa-card-2.jpeg',
  },
  {
    name: 'Sri Lanka',
    price: '₹48,500',
    image: '/Images/Visa-card-3.jpeg',
  },
  {
    name: 'Vietnam',
    price: '₹8,800',
    image: '/Images/Visa-card-4.jpeg',
  },
  {
    name: 'Almaty',
    price: '₹20,300',
    image: '/Images/Visa-card-5.jpeg',
  },
  {
    name: 'Hong Kong',
    price: '₹--,--',
    image: '/Images/Visa-card-6.jpeg',
  },
  {
    name: 'Malaysia',
    price: '₹9,800',
    image: '/Images/Visa-card-7.jpeg',
  },
  {
    name: 'Seychelles',
    price: '',
    image: '/Images/Visa-card-8.jpeg',
  },
  {
    name: 'Thailand',
    price: '₹36,500',
    image: '/Images/Visa-card-1.jpeg',
  },
  {
    name: 'Maldives',
    price: '₹70,900',
    image: '/Images/Visa-card-2.jpeg',
  },
  {
    name: 'Sri Lanka',
    price: '₹48,500',
    image: '/Images/Visa-card-3.jpeg',
  },
  {
    name: 'Vietnam',
    price: '₹8,800',
    image: '/Images/Visa-card-4.jpeg',
  },
  {
    name: 'Almaty',
    price: '₹20,300',
    image: '/Images/Visa-card-5.jpeg',
  },
  {
    name: 'Hong Kong',
    price: '₹--,--',
    image: '/Images/Visa-card-6.jpeg',
  },
  {
    name: 'Malaysia',
    price: '₹9,800',
    image: '/Images/Visa-card-7.jpeg',
  },
  {
    name: 'Seychelles',
    price: '',
    image: '/Images/Visa-card-8.jpeg',
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
    <div className="px-4 md:px-6 py-8 md:py-10 bg-white ml-12 mr-12">
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
        className="flex gap-2 overflow-x-auto no-scrollbar mt-8 pb-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {destinations.map((dest, idx) => (
          <div
            key={idx}
            className="min-w-[120px] sm:min-w-[180px] md:min-w-[140px] h-[170px] sm:h-[210px] relative rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform"
          >
            <Image src={dest.image} alt={dest.name} fill className="object-cover " />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-2 sm:p-3 text-xs ">
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
