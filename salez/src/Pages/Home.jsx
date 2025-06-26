import React from 'react';
import{Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <section className="bg-[rgb(17,17,59)] h-[400px] text-white text-center px-4 flex flex-col justify-center items-center"> 
      <h1 className="text-4xl md:text-5xl p-4 font-bold hover:text-yellow-500">
        Don't Run Behind Opportunities, Make Opportunities Run Behind You
      </h1>
      <button className="bg-yellow-500 text-[rgb(17,17,59)] px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition">
        To Get Hired
      </button>
      <h2 className="pt-4 font-bold text-3xl">Or</h2>
      <h1 className="text-4xl md:text-5xl p-4 font-bold hover:text-yellow-500">
        Create Opportunities
      </h1>
      <button className="bg-yellow-500 text-[rgb(17,17,59)] px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition">
        To Hire
      </button>
    </section>
      <section className='flex-col'>




      </section>
    </> 
  );
};

export default Home;
