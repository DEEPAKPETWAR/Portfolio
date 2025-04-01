import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Hero from '../assets/hero.jpg'; // Ensure this image is optimized

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row">

        {/* Text Content */}
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
            I have 6 months of experience building and designing software. Currently, I love working on web applications using technologies like React, Tailwind CSS, Express.js, and MongoDB.
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <MdKeyboardArrowRight size={25} />
              </span>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-8 md:mt-0 md:ml-10 flex justify-center items-center">
          <img
            src={Hero}
            alt="Hero"
            className="rounded-2xl mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
