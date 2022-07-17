import { useContext, useEffect } from "react";
import { AppContext } from "../Contexts/AppContext";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { nav } = useContext(AppContext);

  const linkSetter = () => {
    let home = document.getElementById("home-link");
    let countries = document.getElementById("countries-link");
    let classes = document.getElementById("classes-link");
    let students = document.getElementById("students-link");
    if (nav === "Home") {
      home.classList.add("bg-[#F9F5FF]");
      home.children[0].classList.add("text-[#9E77ED]");
      home.children[1].classList.add("text-[#6941C6]");
      countries.classList.remove("bg-[#F9F5FF]");
      countries.children[0].classList.remove("text-[#9E77ED]");
      countries.children[1].classList.remove("text-[#6941C6]");
      classes.classList.remove("bg-[#F9F5FF]");
      classes.children[0].classList.remove("text-[#9E77ED]");
      classes.children[1].classList.remove("text-[#6941C6]");
      students.classList.remove("bg-[#F9F5FF]");
      students.children[0].classList.remove("text-[#9E77ED]");
      students.children[1].classList.remove("text-[#6941C6]");
    } else if (nav === "Countries") {
      countries.classList.add("bg-[#F9F5FF]");
      countries.children[0].classList.add("text-[#9E77ED]");
      countries.children[1].classList.add("text-[#6941C6]");
      home.classList.remove("bg-[#F9F5FF]");
      home.children[0].classList.remove("text-[#9E77ED]");
      home.children[1].classList.remove("text-[#6941C6]");
      classes.classList.remove("bg-[#F9F5FF]");
      classes.children[0].classList.remove("text-[#9E77ED]");
      classes.children[1].classList.remove("text-[#6941C6]");
      students.classList.remove("bg-[#F9F5FF]");
      students.children[0].classList.remove("text-[#9E77ED]");
      students.children[1].classList.remove("text-[#6941C6]");
    } else if (nav === "Classes") {
      classes.classList.add("bg-[#F9F5FF]");
      classes.children[0].classList.add("text-[#9E77ED]");
      classes.children[1].classList.add("text-[#6941C6]");
      home.classList.remove("bg-[#F9F5FF]");
      home.children[0].classList.remove("text-[#9E77ED]");
      home.children[1].classList.remove("text-[#6941C6]");
      countries.classList.remove("bg-[#F9F5FF]");
      countries.children[0].classList.remove("text-[#9E77ED]");
      countries.children[1].classList.remove("text-[#6941C6]");
      students.classList.remove("bg-[#F9F5FF]");
      students.children[0].classList.remove("text-[#9E77ED]");
      students.children[1].classList.remove("text-[#6941C6]");
    } else if (nav === "Students") {
      students.classList.add("bg-[#F9F5FF]");
      students.children[0].classList.add("text-[#9E77ED]");
      students.children[1].classList.add("text-[#6941C6]");
      home.classList.remove("bg-[#F9F5FF]");
      home.children[0].classList.remove("text-[#9E77ED]");
      home.children[1].classList.remove("text-[#6941C6]");
      countries.classList.remove("bg-[#F9F5FF]");
      countries.children[0].classList.remove("text-[#9E77ED]");
      countries.children[1].classList.remove("text-[#6941C6]");
      classes.classList.remove("bg-[#F9F5FF]");
      classes.children[0].classList.remove("text-[#9E77ED]");
      classes.children[1].classList.remove("text-[#6941C6]");
    }
  };

  useEffect(() => {
    linkSetter();
  }, [nav]);

  return (
    <div className="fixed h-screen w-[255px] pt-[43px] border-r border-[#EAECF0]">
      <Link to="/">
        <h1 className="text-[#101828] text-xl font-bold flex ml-10">
          DASHBOARD
        </h1>
      </Link>
      <ul className="mt-[50px] text-white px-[16px]">
        <Link to="/">
          <li id="home-link" className="group flex hover:bg-[#F9F5FF] rounded-[6px] cursor-pointer items-center pl-10 py-3 transition">
            <i className="bx bxs-bar-chart-alt-2 text-[20px] text-[#667085] group-hover:text-[#9E77ED]"></i>
            <h1 className="ml-[15px] font-medium text-[16px] text-[#344054] group-hover:text-[#6941C6]">
              Statistics
            </h1>
          </li>
        </Link>
        <Link to="/countries">
          <li id="countries-link" className="group flex hover:bg-[#F9F5FF] rounded-[6px] cursor-pointer items-center pl-10 py-3 transition">
            <i className="bx bx-world text-[20px] text-[#667085] group-hover:text-[#9E77ED]"></i>
            <h1 className="ml-[15px] font-medium text-[16px] text-[#344054] group-hover:text-[#6941C6]">
              Countries
            </h1>
          </li>
        </Link>
        <Link to="/classes">
          <li id="classes-link" className="group flex hover:bg-[#F9F5FF] rounded-[6px] cursor-pointer items-center pl-10 py-3 transition">
            <i className="bx bxs-carousel text-[20px] text-[#667085] group-hover:text-[#9E77ED]"></i>
            <h1 className="ml-[15px] font-medium text-[16px] text-[#344054] group-hover:text-[#6941C6]">
              Classes
            </h1>
          </li>
        </Link>
        <Link to="/students">
          <li id="students-link" className="group flex hover:bg-[#F9F5FF] rounded-[6px] cursor-pointer items-center pl-10 py-3 transition">
            <i className="bx bxs-user text-[20px] text-[#667085] group-hover:text-[#9E77ED]"></i>
            <h1 className="ml-[15px] font-medium text-[16px] text-[#344054] group-hover:text-[#6941C6]">
              Students
            </h1>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
