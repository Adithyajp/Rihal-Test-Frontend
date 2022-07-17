import { useEffect, useState, useContext } from "react";
import { AppContext } from "../Contexts/AppContext";

const StudentAge = () => {
  const { students } = useContext(AppContext);
  const [values, setValues] = useState([]);
  const [age, setAge] = useState();

  const ageCounter = () => {
    let ages = [];
    students?.map((item) => {
      var today = new Date();
      var birthDate = new Date(item.date_of_birth);
      var age_now = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age_now--;
      }
      ages?.push(age_now);
    });
    setValues(ages);
  };

  const ageAverage = () => {
    let sum = 0;
    for (let i = 0; i < values.length; i += 1) {
      sum += values[i];
    }
    setAge(sum / values.length);
  };

  useEffect(() => {
    ageCounter();
    ageAverage();
  }, [students, age]);

  //   useEffect(() => {
  //     console.log(values);
  //   }, [values]);

  return (
    <div>
      <div className="flex items-center rounded-[16px] bg-[#ECFDF3] px-3 py-1">
        <i class="bx bxs-circle text-[#027A48] text-[6px] mr-[5px]"></i>
        <h1 className="text-[#027A48] text-[17px] font-semibold">
          {" "}
          Average age of students{" "}
        </h1>
      </div>
      {isNaN(age) && (
        <h1 className="ml-10 mt-5 text-[#9ea5b5] text-[14px] font-medium text-left">
          No students have been added
        </h1>
      )}
      {isNaN(age) === false && (
        <div className="grid grid-cols-2 my-5 ml-5">
          <h1 className="text-[#101828] text-[14px] text-left font-medium">
            Average age
          </h1>
          <h1 className="ml-20 text-[#667085] text-[14px] font-medium text-left">
            {age}
          </h1>
        </div>
      )}
    </div>
  );
};

export default StudentAge;
