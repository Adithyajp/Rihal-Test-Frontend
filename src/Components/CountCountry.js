import { useEffect, useState, useContext } from "react";
import { AppContext } from "../Contexts/AppContext";

const CountCountry = () => {
  const { countries, students } = useContext(AppContext);
  const [values, setValues] = useState([]);
  const [count, setCount] = useState("0");

  const classCounter = () => {
    if (countries == []) {
      return;
    }
    let data = countries?.map((itemm, index) => {
      return {
        name: itemm.name,
        count: students?.map((item) => {
          var count = 0;
          if (itemm._id == item.country_id) {
            count++;
          }
          return count;
        }),
        // ?.reduce(function (a, b) {
        //   return a + b;
        // }),
      };
    });
    data.forEach((data) => {
      let sum = 0;
      for (let i = 0; i < data?.count?.length; i++) {
        sum += data?.count[i];
      }
      data.count = sum;
    });
    console.log(data, "from countCountry");
    setValues(data);
  };

  useEffect(() => {
    classCounter();
  }, [countries]);

  //   useEffect(() => {
  //     console.log(values);
  //   }, [values]);

  return (
    <div>
      <div className="flex items-center rounded-[16px] bg-[#FDF2FA] px-3 py-1">
        <i class="bx bxs-circle text-[#C11574] text-[6px] mr-[5px]"></i>
        <h1 className="text-[#C11574] text-[17px] font-semibold">
          {" "}
          Count of students per country{" "}
        </h1>
      </div>
      {values == "" && (
        <h1 className="ml-10 mt-5 text-[#9ea5b5] text-[14px] font-medium text-left">
          No countries have been added
        </h1>
      )}
      {values?.map((data) => (
        <div className="grid grid-cols-2 my-5 ml-5">
          <h1 className="text-[#101828] text-[14px] text-left font-medium">
            {data.name}
          </h1>
          <h1 className="ml-20 text-[#667085] text-[14px] font-medium text-left">
            {data.count}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default CountCountry;
