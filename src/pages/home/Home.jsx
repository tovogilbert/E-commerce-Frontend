import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft, FaArrowRight } from "react-icons/fa";
import { shoes } from '../../faker/Data';
import ShoeCard from './components/ShoeCard';
import greenShoe from '../../assets/images/greenShoe.svg';

const Home = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleShoes = 5;
  
  const nextSlide = () => {
    if (startIndex + visibleShoes < shoes.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className='w-full min-h-screen overflow-y-auto'>
      <section className='relative bg-gray-100 py-9 mt-5 rounded-2xl mx-5 flex flex-col-reverse justify-center items-center'>
        <div className='text-center'>
          <p className='text-orange-600 text-4xl font-bold mt-4 mb-1 opacity-90'>25% OFF</p>
          <h1 className='text-5xl font-bold text-gray-950 opacity-90'>Summer Sale</h1>
          <p className='text-[15px] mx-2 text-gray-600 leading-17'>Discover our summer styles with discount</p>
          <button className='mt-4 w-full py-2 text-white rounded-md bg-black text-lg font-bold flex items-center justify-center opacity-90'>
            Shop Now <FaArrowRight className='ml-5 text-[15px]' />
          </button>
        </div>
        <div className='w-53'>
          <img src={greenShoe} alt='Green Shoe' className='w-full' />
        </div>
      </section>
      <section className="p-6">
        <h2 className="text-[26px] text-gray-950 font-bold mt-7">Explore our latest drops</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {shoes.slice(startIndex, startIndex + visibleShoes).map((shoe) => (<ShoeCard key={shoe.id} shoe={shoe} />))}
        </div>
        <div className="flex justify-start items-center text-gray-700 space-x-6 mt-4">
          <button  onClick={prevSlide}  disabled={startIndex === 0}  className="p-2 bg-gray-100 rounded-full disabled:opacity-80" >
            <FaChevronLeft className="text-lg" />
          </button>
          <button onClick={nextSlide} disabled={startIndex + visibleShoes >= shoes.length} className="p-2 bg-gray-100 rounded-full disabled:opacity-80">
            <FaChevronRight className="text-lg" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
