import { useEffect, useState, useContext } from "react";
import { AppContext } from "../Contexts/AppContext";

const CountClass = () => {
  const { classes, students } = useContext(AppContext);
  const [values, setValues] = useState([]);

  const classCounter = () => {
    if (classes == []) {
      return;
    }
    let data = classes?.map((itemm) => {
      return {
        name: itemm.class_name,
        count: students
          ?.map((item) => {
            var count = 0;
            if (itemm._id == item.class_id) {
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
  }, [classes]);

  //   useEffect(() => {
  //     console.log(values);
  //   }, [values]);

  return (
    <div>
      <h1>Count of students per class</h1>
      {values?.map((data, key) => (
        <div className="flex items-center justify-center my-5">
          <h1 className="font-semibold">{data.name}</h1>
          <h1 className="ml-20">{data.count}</h1>
        </div>
      ))}
    </div>
  );
};

export default CountClass;
