// components/PromoCards.tsx

export default function PromoCards() {
  return (
     
<div className="flex justify-center px-4 py-10">
  <div className="grid md:grid-cols-2 gap-12 max-w-7xl w-full">
    {/* Card 1 - Maldives */}
    <div
      className="relative rounded-2xl overflow-hidden text-white p-6 flex flex-col justify-between h-72 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://demo.qzency.com/html/tripfy/preview/assets/image/card-img/home3-offer-card-1.png')",
      }}
    ></div>

    {/* Card 2 - Summer Sale */}
    <div
      className="relative rounded-2xl overflow-hidden text-white p-6 flex flex-col justify-between h-72 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://demo.qzency.com/html/tripfy/preview/assets/image/card-img/home3-offer-card-2.png')",
      }}
    ></div>
  </div>
</div>

 
  );
}
