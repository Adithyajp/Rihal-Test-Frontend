import { useState, createContext, useEffect } from "react";
import { getClasses, getCountries, getStudents } from "../Api";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);

  const getCountryList = async () => {
    try {
      let data = await getCountries();
      setCountries(data);
    } catch (e) {
      console.log(e?.response ?? e);
    }
  };

  const getClassList = async () => {
    try {
      let data = await getClasses();
      setClasses(data);
    } catch (e) {
      console.log(e?.response ?? e);
    }
  };

  const getStudentList = async () => {
    try {
      let data = await getStudents();
      setStudents(data);
    } catch (e) {
      console.log(e?.response ?? e);
    }
  };

  useEffect(() => {
    getCountryList();
    getClassList();
    getStudentList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    countries,
    getCountryList,
    classes,
    getClassList,
    students,
    getStudentList,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
