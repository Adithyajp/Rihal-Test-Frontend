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
  }, [students,age]);



//   useEffect(() => {
//     console.log(values);
//   }, [values]);

  return (
    <div>
      <h1>Average Age of Students</h1>
      <div className="flex items-center justify-center my-5">
        <h1 className="font-semibold">{age}</h1>
      </div>
    </div>
  );
};

export default StudentAge;
