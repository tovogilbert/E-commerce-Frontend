import React from 'react';

const ShoeCard = ({ shoe }) => {
  return (
    <div className="bg-white py-4 text-gray-800 rounded-lg text-left min-w-[190px]">
      <img src={shoe.image} alt={shoe.name} className="w-full h-60" />
      <div>
        <h3 className="font-bold">{shoe.name}</h3>
        <p className="text-sm">{shoe.description}</p>
        <p className="font-bold mt-2">{shoe.price}</p>
      </div>
    </div>
  );
};

export default ShoeCard;
