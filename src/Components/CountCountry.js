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
        count: students
          ?.map((item) => {
            var count = 0;
            if (itemm._id == item.country_id) {
              count++;
            }
            return count;
          })
          ?.reduce(function (a, b) {
            return a + b;
          }),
      };
    });
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
      <h1>Count of students per country</h1>
      {values?.map((data) => (
        <div className="flex items-center justify-center my-5">
          <h1 className="font-semibold">{data.name}</h1>
          <h1 className="ml-20">{data.count}</h1>
        </div>
      ))}
    </div>
  );
};

export default CountCountry;
