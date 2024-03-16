import React, { useState, useEffect } from "react";

const Optional = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulating loading delay with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clearing timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-3/4 mt-16 flex justify-center">
        {/* Placeholder for image */}
        <div className="h-80 w-60 bg-gray-300 mt-10 md:mt-0 ml-20 md:ml-0"></div>
        <div className="h-80 w-60 bg-gray-300 mt-3 md:mt-0"></div>
      </div>
      <div className="w-full md:w-1/4 mt-16 md:ml-0 flex justify-center">
        <div className="mt-12 text-center md:text-left">
          {/* Placeholder for text */}
          <div className="h-12 w-36 bg-gray-300 mb-3"></div>
          <div className="h-32 w-60 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );

  // Actual content
  const ActualContent = () => (
    <div className="h-screen flex flex-col md:flex-row">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        className="w-full md:w-3/4 mt-16 flex justify-center"
      >
        <img
          className="h-80 mt-10 md:mt-0 ml-20 md:w-60"
          src="https://images.unsplash.com/photo-1551582045-6ec9c11d8697?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
        />
        <img
          className="h-80 mt-3 md:mt-0 md:w-60"
          src="https://images.unsplash.com/photo-1570654621852-9dd25b76b38d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
        />
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        className="w-full md:w-1/4 mt-16 md:ml-0 flex justify-center"
      >
        <div className="mt-12 text-center md:text-left">
          <h1 className="text-xl">
            {" "}
            Winter is Here <br /> The Pleasure can Come
          </h1>
          <p className="mt-3 leading-7">
            Enjoy the wintry area from their most enchanting side. With our
            specials we have compiled for you, nothing stands in the way of an
            unforgettable winter.
          </p>
        </div>
      </div>
    </div>
  );

  // Conditionally render skeleton loader or actual content based on loading state
  return isLoading ? <SkeletonLoader /> : <ActualContent />;
};

export default Optional;
