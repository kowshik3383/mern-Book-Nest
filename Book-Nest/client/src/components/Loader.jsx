import React from "react";

const Loader = () => {
  return (
    <div className="loader ">
      <div className="flex text-8xl font-bold m-10 ">
        <div className="  animate-pulse ">W</div>
        <div className="  animate-pulse ">E</div>
        <div className="  animate-pulse ">L</div>
        <div className="  animate-pulse ">C</div>
        <div className="  animate-pulse ">O</div>
        <div className="  animate-pulse ">M</div>
        <div className="  animate-pulse ">E</div>
      </div>
      <div>
        <div className="flex text-8xl font-bold m-10 ">
          <div className="  animate-pulse ">T</div>
          <div className="  animate-pulse ">O</div>
        </div>
        <div className="flex text-8xl font-bold m-10 ">
          <div className="  animate-pulse ">M</div>
          <div className="  animate-pulse ">E</div>
          <div className="  animate-pulse ">R</div>
          <div className="  animate-pulse ">N</div>
          <div className="w-32 h-6  rounded-full ml-5"></div>

          <div className="  animate-pulse ">W</div>
          <div className="  animate-pulse ">E</div>
          <div className="  animate-pulse ">B </div>

          <div className="  animate-pulse ">S</div>
          <div className="  animate-pulse ">I</div>
          <div className="  animate-pulse ">T </div>
          <div className="  animate-pulse ">E </div>
        </div>
      </div>
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className="wheel-and-hamster"
      >
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
    </div>
  );
};

export default Loader;
