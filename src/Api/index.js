import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

const networkErrorLogger = (e, URL, PAYLOAD) => {
  console.log(
    `Request: ${URL} with payload: ${JSON.stringify(PAYLOAD)} failed! `
  );

  if (e?.message === "Network Error") {
    throw new Error("Network Error. Ensure you are connected to internet.");
    //   } else if (isAuth && e?.response?.status === 401) {
    //     window.localStorage.removeItem(ACCESS_TOKEN_STRING);
    //     window.location.reload();
  } else {
    throw e;
  }
};

const get = async (URL) => {
  try {
    const result = await axiosInstance.get(URL);
    return result.data;
  } catch (e) {
    networkErrorLogger(e, URL, "nil");
  }
};

const post = async (URL, PAYLOAD = {}) => {
  try {
    const result = await axiosInstance.post(URL, PAYLOAD);
    return result.data;
  } catch (e) {
    networkErrorLogger(e, URL, PAYLOAD);
  }
};

const _delete = async (URL) => {
  try {
    const result = await axiosInstance.delete(URL);
    return result.data;
  } catch (e) {
    networkErrorLogger(e, URL, null);
  }
};

///Country APIs
export const getCountries = () => {
  const URL = API_BASE_URL + `/countries`;
  return get(URL);
};

export const createCountries = async (data) => {
  const URL = API_BASE_URL + `/countries`;
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const result = await axiosInstance.post(URL, data, config);

    return result.data;
  } catch (e) {
    networkErrorLogger(e, URL, data);
  }
};

export const deleteCountries = (countryId) => {
  const URL = API_BASE_URL + `/countries/${countryId}`;
  return _delete(URL);
};

///Classes APIs
export const getClasses = () => {
  const URL = API_BASE_URL + `/classes`;
  return get(URL);
};

export const createClasses = async (data) => {
  const URL = API_BASE_URL + `/classes`;
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const result = await axiosInstance.post(URL, data, config);

    return result.data;
  } catch (e) {
    networkErrorLogger(e, URL, data);
  }
};

export const deleteClasses = (classId) => {
  const URL = API_BASE_URL + `/classes/${classId}`;
  return _delete(URL);
};

///Studenst APIs
export const getStudents = () => {
  const URL = API_BASE_URL + `/students`;
  return get(URL);
};

export const createStudents = async (data) => {
  const URL = API_BASE_URL + `/students`;
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const result = await axiosInstance.post(URL, data, config);

    return result.data;
  } catch (e) {
    networkErrorLogger(e, URL, data);
  }
};

export const deleteStudents = (studentId) => {
  const URL = API_BASE_URL + `/students/${studentId}`;
  return _delete(URL);
};

