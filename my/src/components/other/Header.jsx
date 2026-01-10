import React from "react";
const Header = () => {
  return (
    <div className="flex justify-between items-start">
      <h1 className="text-white text-2xl font-medium">
        Hello <br />
        <span className="text-white text-3xl font-semi-bold"> Arnob 😀 </span>
      </h1>
      <button className="bg-red-400 text-white px-3 py-2 font-medium">
        Log Out
      </button>
    </div>
  );
};

export default Header;
