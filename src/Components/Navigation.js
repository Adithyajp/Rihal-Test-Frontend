import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar-colour fixed poppins h-screen w-[255px] pt-[43px]">
      <Link to="/">
        <h1 className="text-white text-xl font-bold flex ml-10">DASHBOARD</h1>
      </Link>
      <ul className="mt-[50px] text-white ">
        <Link to="/">
          <li className="flex hover:bg-[#8959EA] hover:border-l-[3px] cursor-pointer items-center pl-10 py-3 transition">
            <i class="bx bxs-bar-chart-alt-2 text-2xl"></i>
            <h1 className="text-base ml-4">Statistics</h1>
          </li>
        </Link>
        <Link to="/countries">
          <li className="flex hover:bg-[#8959EA] hover:border-l-[3px] cursor-pointer items-center pl-10 py-3 transition">
            <i class="bx bx-world text-2xl"></i>
            <h1 className="text-base ml-4">Countries</h1>
          </li>
        </Link>
        <Link to="/classes">
          <li className="flex hover:bg-[#8959EA] hover:border-l-[3px] cursor-pointer items-center pl-10 py-3 transition">
            <i class="bx bxs-carousel text-2xl"></i>
            <h1 className="text-base ml-4">Classes</h1>
          </li>
        </Link>
        <Link to="/students">
          <li className="flex hover:bg-[#8959EA] hover:border-l-[3px] cursor-pointer items-center pl-10 py-3 transition">
            <i class="bx bxs-user text-2xl"></i>
            <h1 className="text-base ml-4">Students</h1>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
