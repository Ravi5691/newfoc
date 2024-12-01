import React from "react";

const LaunchNotification = () => {
  return (
    <div className=" my-10 mb-32 sm:my-36 sm:mb-52 flex items-center justify-center">
      <div className="text-center text-white space-y-6">
        <h1 className="text-3xl sm:text-5xl font-bold font-serif">
        FREELANCERS ASSEMBLES !!!
        </h1>
        <h1 className="sm:text-5xl text-2xl font-bold font-serif">
        JOIN OUR WAITLIST
        </h1>
        <p className="sm:text-xl text-sm text-green">
        Be a part of the Biggest Revolution in Education + Freelance Industry
        </p>
        <div className="flex items-center justify-center space-x-3">
          <input
            type="email"
            placeholder="Email address..."
            className="sm:px-4 sm:py-3 px-4 py-2 rounded-lg text-gray-900 w-64 md:w-96 focus:outline-none bg-gray-200 backdrop-blur-0 bg-opacity-80 border-1"
          />
          <button className="sm:px-6 sm:py-3 px-4 py-2 bg-white text-sm sm:text-base text-green font-semibold rounded-lg shadow hover:bg-gray-200">
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
