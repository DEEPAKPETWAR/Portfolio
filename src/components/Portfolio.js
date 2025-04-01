import React from 'react';
import logo from '../assets/logo.jpg';
import login from '../assets/login.jpg';
import taskmanager from '../assets/taskmanager.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: logo,
      demoLink: '#', // Add your demo link here
      codeLink: '#', // Add your code link here
    },
    {
      id: 2,
      src: login,
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 3,
      src: taskmanager,
      demoLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              <img
                src={src}
                alt={`portfolio-${id}`}
                className="w-full h-64 object-cover rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center space-x-4 mt-4">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md duration-200 hover:scale-105 text-white"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md duration-200 hover:scale-105 text-white"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
