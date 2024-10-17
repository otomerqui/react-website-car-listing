import React from 'react';

const Hero = ({ backgroundImage, title }) => {
  return (
    <div 
      className="w-full h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-white text-4xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md text-center">
        {title}
      </h1>
    </div>
  );
};

export default Hero;
