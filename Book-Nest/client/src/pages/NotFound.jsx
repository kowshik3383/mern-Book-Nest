import React from "react";

const NotFound = () => {
   
  const style = { textShadow: "2px 2px 3px red" , fontSize : "224px" };
  const st = {textShadow: "0 2px 0 #8400ff" , color : '#fff',fontFamily:  "montserrat, sans-serif"}
  return (
    <div id="notfound"  className="flex items-center justify-center h-screen bg-black">
      <div className="notfound text-center">
        <div className="notfound-404">
          <h1 style={style} className=" font-bold ">404</h1>
          <h2 style={st} className="text-6xl">Page not found</h2>
        </div>
        <a href="/" className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
  Button
</a>
      </div>
    </div>
  );
};

export default NotFound;
