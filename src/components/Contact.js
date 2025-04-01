import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact Us</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action=""
            className="flex flex-col w-full md:w-2/3 lg:w-1/2 space-y-4"
          >
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 w-full"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg mb-2">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 w-full"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-lg mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="6"
                className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 w-full"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
