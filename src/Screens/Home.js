import { useEffect, useState, useContext } from "react";
import CountClass from "../Components/CountClass";
import CountCountry from "../Components/CountCountry";
import StudentAge from "../Components/StudentAge";
import { AppContext } from "../Contexts/AppContext";

const Home = () => {
  const { allclass } = useContext(AppContext);
  return (
    <div className="h-screen pl-80 pt-[40px]">
      <div className="flex items-center">
        <h1 className="poppins text-3xl font-bold flex">Statistics</h1>
        {/* <button
          type="button"
          className="ml-8 button-color text-white text-lg px-6 py-1 rounded-xl font-bold nunito border-2 border-[#B5A4FF] hover:bg-[#8959EA] transition"
        >
          ADD
        </button> */}
      </div>
      <div className="mt-10 mr-12 py-7 px-5 rounded-[11px] shadow-[0px_0px_12px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between ">
          <div>
            <CountClass />
          </div>
        </div>
      </div>
      <div className="mt-10 mr-12 py-7 px-5 rounded-[11px] shadow-[0px_0px_12px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between ">
          <div>
            <CountCountry/>
          </div>
        </div>
      </div>
      <div className="mt-10 mr-12 py-7 px-5 rounded-[11px] shadow-[0px_0px_12px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between ">
          <div>
            <StudentAge/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
