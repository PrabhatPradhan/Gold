// components/PromoCards.tsx

export default function PromoCards() {
    return (
      <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 py-10">
        {/* Card 1 - Maldives */}
        <div
          className="relative rounded-2xl overflow-hidden text-white p-6 flex flex-col justify-between h-72 bg-cover bg-center"
          style={{ backgroundImage: "url('https://res.cloudinary.com/enchanting/f_auto,q_70,w_900,h_490,c_fill/et-web/2019/06/Enchanting-Travels-Maldives-5.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 via-blue-400/50 to-transparent z-0" />
  
          <div className="relative z-10">
            <h4 className="italic text-white text-lg mb-1">Explore</h4>
            <h2 className="text-4xl font-bold text-yellow-300 mb-1">Maldives</h2>
            <p className="text-white mb-4">5 days & 6 Nights</p>
          </div>
  
          {/* Price Tag */}
          <div className="absolute top-4 right-4 bg-yellow-400 text-purple-800 font-semibold px-4 py-1 rounded-full text-sm shadow-lg z-10">
            Starting @ <span className="text-xl font-bold">$1599</span>
          </div>
  
          <button className="relative z-10 mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full px-6 py-2 w-fit text-sm">
            Discover Now
          </button>
        </div>
  
        {/* Card 2 - Summer Sale */}
        <div
          className="relative rounded-2xl overflow-hidden text-white p-6 flex flex-col justify-between h-72 bg-cover bg-center"
          style={{ backgroundImage: "url('https://www.flamingotravels.co.in/blog/wp-content/uploads/2021/11/Main_image.jpg')" }}
        >
          {/* Orange Overlay */}
          <div className="absolute inset-0 bg-orange-500/80 z-0" />
  
          <div className="relative z-10">
            <h4 className="italic text-yellow-100 text-lg mb-1">Summer</h4>
            <h2 className="text-4xl font-bold text-white mb-2">SALE</h2>
            <div className="bg-green-600 text-white rounded-full px-4 py-1 w-fit text-sm font-medium">
              Sales <br /> <span className="text-lg font-bold">50% Off</span>
            </div>
          </div>
  
          <button className="relative z-10 mt-auto bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-6 py-2 w-fit text-sm">
            Discover Now
          </button>
        </div>
      </div>
    );
  }
  