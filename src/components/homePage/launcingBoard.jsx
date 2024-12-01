import React from "react";

const LaunchNotification = () => {
  return (
    <div className=" my-40 mb-52 flex items-center justify-center">
      <div className="text-center text-white space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
        FREELANCERS ASSEMBLES!!!
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold">
        JOIN OUR WAITLIST
        </h1>
        <p className="text-lg md:text-xl">
        Be a part of the Biggest Revolution in Education + Freelance Industry
        </p>
        <div className="flex items-center justify-center space-x-3">
          <input
            type="email"
            placeholder="Email address..."
            className="px-4 py-3 rounded-lg text-gray-900 w-64 md:w-96 focus:outline-none bg-gray-200 backdrop-blur-0 bg-opacity-80 border-1"
          />
          <button className="px-6 py-3 bg-white text-Green-700 font-semibold rounded-lg shadow hover:bg-gray-100">
            Notify me
          </button>
        </div>
        <div className="flex justify-center space-x-4 text-xl mt-6">
          <a href="#" className="hover:opacity-75">
            <i className="fab fa-xing"></i>
          </a>
          <a href="#" className="hover:opacity-75">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="hover:opacity-75">
            <i className="fab fa-facebook-messenger"></i>
          </a>
          <a href="#" className="hover:opacity-75">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LaunchNotification;
