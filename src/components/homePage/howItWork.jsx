
import React, { useState, useEffect, useRef } from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "WATCH THE VIDEO LECTURES",
      text: "Get familiar with the framework.",
      image: "https://img.freepik.com/free-psd/macaroon-isolated-transparent-background_191095-35017.jpg?t=st=1732887349~exp=1732890949~hmac=b8c8912b0c8cbd839733a5ec524d7953ba7b5c64b5e16ae2cb6add2b5d9cb46d&w=740",
    },
    {
      id: 2,
      title: "COMPLETE THE EXERCISES",
      text: "Execute your skills effectively.",
      image: "https://img.freepik.com/free-psd/macaroon-isolated-transparent-background_191095-35017.jpg?t=st=1732887349~exp=1732890949~hmac=b8c8912b0c8cbd839733a5ec524d7953ba7b5c64b5e16ae2cb6add2b5d9cb46d&w=740",
    },
    {
      id: 3,
      title: "ATTEND LIVE CLASSES",
      text: "Engage and learn in real-time.",
      image: "https://img.freepik.com/free-psd/macaroon-isolated-transparent-background_191095-35017.jpg?t=st=1732887349~exp=1732890949~hmac=b8c8912b0c8cbd839733a5ec524d7953ba7b5c64b5e16ae2cb6add2b5d9cb46d&w=740",
    },
    {
      id: 4,
      title: "PRACTICE IN THE COMMUNITY",
      text: "Collaborate and grow together.",
      image: "https://img.freepik.com/free-psd/macaroon-isolated-transparent-background_191095-35017.jpg?t=st=1732887349~exp=1732890949~hmac=b8c8912b0c8cbd839733a5ec524d7953ba7b5c64b5e16ae2cb6add2b5d9cb46d&w=740",
    },
  ];

  const [activeStep, setActiveStep] = useState(1);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".step-section");

      // Determine the active section
      let currentStep = 1;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentStep = parseInt(section.dataset.id, 10);
        }
      });
      setActiveStep(currentStep);

      if (contentRef.current) {
        const contentRect = contentRef.current.getBoundingClientRect();
        const scrollProgress = 1 - (contentRect.top / window.innerHeight);
        if (scrollProgress > 0 && scrollProgress <= 1) {
          contentRef.current.style.opacity = scrollProgress;
          contentRef.current.style.transform = `translateY(${(1 - scrollProgress) * 100}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-transparent">
    <div className="sm:block hidden">
    <div className="flex justify-center sm:text-8xl text-4xl text-white items-center h-[50vh] ">
      <span>How it <span className="text-green">Works</span></span>
    </div>
    <div 
    ref={contentRef}
    className=" text-white flex justify-center py-10 mx-10 min-h-screen transition-all duration-1000 ease-in-out"
    style={{ opacity: 0, transform: 'translateY(100px)' }}>
      <div className="flex flex-row max-w-full w-full gap-20">
        {/* Left Column */}
        <div className="w-1/4 sticky top-0 h-screen text-lg hidden sm:flex flex-col justify-center space-y-4 tracking-wider">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`py-4 pl-2 transition-all duration-300 ${
                activeStep === step.id
                  ? "text-white font-bold border-b-2 border-green"
                  : "text-gray-500 font-bold border-b-2 border-gray-500"
              }`}
            >
              {step.title}
            </div>
          ))}
        </div>

        {/* Middle Column */}
        <div className="w-1/2 space-y-10">
          {steps.map((step) => (
            <div
              key={step.id}
              data-id={step.id}
              className="step-section min-h-screen flex flex-col justify-center"
            >
              <h2 className="text-2xl font-bold">{step.text}</h2>
              <p className="text-gray-400 mt-4">
                You will learn from video modules and interactive exercises that reinforce your skills step by step.
              </p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="w-1/4 sticky top-0 h-screen flex justify-center items-center ">
          <div className="relative w-64 h-64">
            {steps.map((step) => (
              <img
                key={step.id}
                src={step.image}
                alt={step.title}
                className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-[2000ms] ease-in-out transform ${
                  activeStep === step.id ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transitionProperty: 'transform, opacity',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: `${activeStep === step.id ? '200ms' : '0ms'}`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    {/* mobile how it works section */}
    <div className="sm:hidden flex flex-col">
      <div className="flex justify-center text-4xl text-white items-center h-[50vh] ">
        <span>How it <span className="text-green">Works</span></span>
      </div>
    </div>
    </div>
  );
};

export default HowItWorks;
