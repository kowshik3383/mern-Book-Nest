import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating loading delay with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clearing timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#rooms", label: "Rooms" },
    { href: "#footer", label: "Footer" },
  ];

  const handleClickSignUp = () => {
    navigate("/sign-up");
  };

  const handleClickSignIn = () => {
    navigate("/sign-in");
  };

  const style = { textShadow: "3px 2px 4px red" };
  const stylek = { textShadow: "10px 20px 40px black" };

  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="animate-pulse">
      {/* Skeleton loader for header */}
      <header className="sm:px-8 px-4 py-2 z-10 w-full shadow-lg">
        <nav className="flex justify-between items-center max-container">
          {/* Placeholder for logo */}
          <div className="w-24 h-8 bg-gray-300"></div>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {/* Placeholder for nav links */}
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index}>
                <div className="w-24 h-8 bg-gray-300"></div>
              </li>
            ))}
          </ul>
          {/* Placeholder for buttons */}
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            <div className="w-24 h-8 bg-gray-300"></div>
            <div className="w-24 h-8 bg-gray-300"></div>
            <div className="w-24 h-8 bg-gray-300"></div>
          </div>
          {/* Hamburger menu */}
          <div className="hidden max-lg:block cursor-pointer">
            <div className="w-8 h-8 bg-gray-300"></div>
          </div>
        </nav>
      </header>
      {/* Placeholder for mobile navigation */}
      {isMenuOpen && (
        <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100">
          <div className="hidden max-lg:block fixed right-0 px-8 py-4 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            <AiOutlineClose className="text-black  text-4xl" />
          </div>
          <ul className="lg:hidden flex flex-col items-center justify-center h-full">
            {Array.from({ length: 4 }).map((_, index) => (
              <li className="text-black" key={index}>
                <div className="w-24 h-8 bg-gray-300"></div>
              </li>
            ))}
            <button className="w-24 h-8 bg-blue-500 text-white px-6 py-2 rounded-lg mt-9 border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
              Sign Up
            </button>
            <button className="w-24 h-8 bg-blue-500 text-white px-6 py-2 rounded-lg mt-3 border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
              Sign In
            </button>
          </ul>
        </nav>
      )}
      {/* Placeholder for main content */}
      <div className="flex flex-col items-center mt-40 h-screen">
        <div className="w-full h-24 bg-gray-300 mb-5"></div>
        <div className="w-full h-16 bg-gray-300 mb-5"></div>
        <div className="w-full h-48 bg-gray-300"></div>
      </div>
    </div>
  );

  // Actual header content
  const ActualContent = () => (
    <div className="head">
      <header className="sm:px-8 px-4 py-2 z-10 w-full shadow-lg">
        <nav className="flex justify-between items-center max-container">
          <a id="logo" href="/" className="text-3xl font-bold text-rose-100">
            Book Nest
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            <button onClick={handleClickSignUp}>Sign Up</button>
            <span>/</span>
            <button onClick={handleClickSignIn}>Sign In</button>
          </div>
          <div className="hidden max-lg:block cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100">
          <div className="hidden max-lg:block fixed right-0 px-8 py-4 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            <AiOutlineClose className="text-black  text-4xl" />
          </div>
          <ul className="lg:hidden flex flex-col items-center justify-center h-full">
            {navLinks.map((item) => (
              <li className="text-black" key={item.label}>
                <a href={item.href} className="text-black  font-montserrat leading-normal text-lg text-slate-gray">
                  {item.label}
                </a>
              </li>
            ))}
            <button onClick={handleClickSignUp} className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 mt-9 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
              Sign Up
            </button>
            <button onClick={handleClickSignIn} className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 mt-9 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
              Sign In
            </button>
          </ul>
        </nav>
      )}
      <div className="flex flex-col items-center mt-40 h-screen">
        <h1 style={style} className="font-bold text-5xl text-black mt-12 text-center">
          Discover Your Perfect Stay, Every Time
        </h1>
        <p style={stylek} className="font-medium mt-5 text-xl text-white text-center">
          Explore a world of endless possibilities with our intuitive hotel booking platform,
          <br /> designed to cater to your every travel need
        </p>
        <button
          onClick={handleClickSignUp}
          className="cursor-pointer text-black mt-5 px-4 py-2 font-semibold bg-gradient-to-b from-slate-50 to-slate-200 rounded hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
        >
          Register
        </button>
      </div>
    </div>
  );

  // Conditionally render skeleton loader or actual content based on loading state
  return isLoading ? <SkeletonLoader /> : <ActualContent />;
};

export default Header;
