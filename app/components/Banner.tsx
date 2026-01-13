import React from 'react'

const partners = [
  { name: "Partner1", src: "/partner1.svg" },
  { name: "Partner2", src: "/partner2.svg" },
  { name: "Partner3", src: "/partner3.svg" },
  { name: "Partner4", src: "/partner4.svg" },
  { name: "Partner5", src: "/partner5.svg" },
  { name: "Partner6", src: "/partner6.svg" },
  { name: "Partner7", src: "/partner7.svg" },
  { name: "Partner8", src: "/partner8.svg" },
];


function Banner() {
  return (
    <div className="bg-[#0E954721] h-35.25 w-full">
      <div className="flex justify-center items-center h-full">
        {partners.map((partner) => (
          <div key={partner.name} className="mx-4">
            <img src={partner.src} alt={partner.name} className="h-20" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner