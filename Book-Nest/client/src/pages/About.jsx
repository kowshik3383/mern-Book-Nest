import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      // Global settings for AOS animations
      // For example:
      duration: 800,  // Duration of animations
      easing: 'ease-in-out', // Easing function
      // Remove 'once' option to allow animations to trigger unlimited times
    });
    // Simulating loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []); // Run only once after component mount

  return (
    <>
      {isLoading ? (
        <div className="animate-pulse flex items-center mt-10 bg-red-100 w-screen">
          <div className="w-full md:w-1/2">
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-8 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
          <div className="hidden md:block w-1/2">
            <div className="h-64 bg-gray-300 rounded"></div>
          </div>
        </div>
      ) : (
        <div data-aos="zoom-in-up" className="flex items-center mt-10 bg-red-100 w-screen">
          <div className="w-full md:w-1/2">
            <h1 id="about-us" className="text-xl text-orange-300">
              <span className="uppercase">Established</span> 2018
            </h1>
            <h1 className="font-bold mt-5 text-3xl">
              About The Book Nest <br /> Hotel & Suites{" "}
            </h1>
            <p className="text-justify mt-5 leading-7 ">
              Welcome to Booknest, where luxury meets comfort in the heart 
              of our location. Situated amidst the bustling cityscape, our hotel{" "}
              
              offers a tranquil oasis for travelers seeking a memorable stay. With{" "}
              
              our unparalleled hospitality and top-notch amenities, we strive to{" "}
            
              exceed your expectations and create unforgettable experiences.{" "}
             
            </p>
          </div>
          <div data-aos="flip-left" className="hidden md:block w-1/2">
            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="/"
              className="h-2/4 rounded-lg"
            />
            <h1>HELLO KOWSHIK</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
