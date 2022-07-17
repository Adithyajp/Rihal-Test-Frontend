import { useEffect, useState, useContext } from "react";
import CountClass from "../Components/CountClass";
import CountCountry from "../Components/CountCountry";
import StudentAge from "../Components/StudentAge";
import { AppContext } from "../Contexts/AppContext";

const Home = () => {
  const { setNav, allclass } = useContext(AppContext);
  setNav("Home")
  return (
    <div className="h-screen pl-80 pt-[40px] pb-[40px]">
      <div className="f">
        <h1 className="text-[30px] text-[#101828] font-medium flex">Statistics Dashboard</h1>
        <h1 className="text-[18px] text-[#667085] font-normal flex mt-[5px]">Welcome back, User!</h1>
        {/* <button
          type="button"
          className="ml-8 button-color text-white text-lg px-6 py-1 rounded-xl font-bold nunito border-2 border-[#B5A4FF] hover:bg-[#8959EA] transition"
        >
          ADD
        </button> */}
      </div>
      <div className="mt-10 mr-12 py-7 px-5 rounded-[8px] border border-[#EAECF0] shadow-[0px_1px_3px_rgba(16,24,40,0.1),0px_1px_2px_rgba(16,24,40,0.06)]">
        <div className="flex items-center justify-between ">
          <div>
            <CountClass />
          </div>
        </div>
      </div>
      <div className="mt-10 mr-12 py-7 px-5 rounded-[8px] border border-[#EAECF0] shadow-[0px_1px_3px_rgba(16,24,40,0.1),0px_1px_2px_rgba(16,24,40,0.06)]">
        <div className="flex items-center justify-between ">
          <div>
            <CountCountry/>
          </div>
        </div>
      </div>
      <div className="mt-10 mr-12 py-7 px-5 rounded-[8px] border border-[#EAECF0] shadow-[0px_1px_3px_rgba(16,24,40,0.1),0px_1px_2px_rgba(16,24,40,0.06)]">
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
