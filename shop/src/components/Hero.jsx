import React, { useState, useEffect } from 'react';

const Hero = ({ products }) => {
  const [hero, setHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHero((cur) => (cur + 1) % products.length); // Loop through images
    }, 1000);

    return () => clearInterval(timer); // Cleanup to prevent multiple intervals
  }, [products.length]); // Depend on products.length to ensure correct looping

  return (
    <>
      {products.length > 0 && ( // Prevent accessing an empty array
        <div key={products[hero].id} className="flex w-[100%]  h-[400px]">
          <img src={products[hero].image} alt="Hero Banner" className="w-full h-auto" />
          
        </div>
      )}
    </>
  );
};

export default Hero;
