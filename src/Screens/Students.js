import { Fragment, useState, useContext, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { createStudents } from "../Api";
import StudentList from "../Components/StudentList";
import { AppContext } from "../Contexts/AppContext";
import Select from "react-select";

const Students = () => {
  // Getting students from Appcontext
  const { classes, countries, students, getStudentList } =
    useContext(AppContext);

  const [enteredStudent, setEnteredStudent] = useState("");
  const [enteredClass, setEnteredClass] = useState("");
  const [enteredCountry, setEnteredCountry] = useState("");
  const [dob, setDob] = useState("");
  let [isOpen, setIsOpen] = useState(false);

  const classOptions = classes.map((item) => {
    return {
      value: item._id,
      label: item.class_name
    }
  })

  const countryOptions = countries.map((item) => {
    return {
      value: item._id,
      label: item.name
    }
  })

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const studentHandler = (event) => {
    setEnteredStudent(event.target.value);
  };

  const dobHandler = (event) => {
    setDob(event.target.value);
  };

  // useEffect(() => {
  //   console.log(enteredCountry);
  // }, [enteredCountrys]);

  const createStudentHandler = async (e) => {
    e.preventDefault();
    const studentdata = {
      class_id: enteredClass.value,
      country_id: enteredCountry.value,
      name: enteredStudent,
      date_of_birth: dob
    };
    setEnteredStudent("");
    console.log(studentdata);
    try {
      await createStudents(studentdata);
    } catch (e) {
      console.log(e?.response ?? e);
    } finally {
      getStudentList();
    }
  };
  return (
    <>
      <div className="h-screen pl-80 pt-[40px]">
        <div className="flex items-center">
          <h1 className="poppins text-3xl font-bold flex">Students</h1>
          <button
            type="button"
            onClick={openModal}
            className="ml-8 button-color text-white text-lg px-6 py-1 rounded-xl font-bold nunito border-2 border-[#B5A4FF] hover:bg-[#8959EA] transition"
          >
            ADD
          </button>
        </div>
        <div className="grid grid-cols-1 divide-y-2 pt-10">
          {students?.map((data) => (
            <StudentList key={data.id} data={data} />
          ))}
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-[1000px] p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <form onSubmit={createStudentHandler}>
                  <div className="w-full py-3 px-3 rounded font-bold text-xl">
                    Create Student
                  </div>
                  <div className="grid grid-cols-2 grid-flow-col-dense mt-4 mr-12 py-7 px-5 rounded-[11px]">
                    <div className="col-span-2 pr-5">
                      <div className="flex items-center">
                        <h1 className="poppins font-bold text-base w-[165px]">
                          Name
                        </h1>
                        <input
                          value={enteredStudent}
                          onChange={studentHandler}
                          className="w-full px-6 ml-7 h-[40px] rounded-[4px] border border-[#CBB7F1] focus:outline-none focus:bg-white focus:border-purple-500"
                        ></input>
                      </div>
                      <div className="flex items-center mt-7">
                        <h1 className="poppins font-bold text-base mr-5 w-[140px]">
                          Class name
                        </h1>
                        <Select
                          value={enteredClass}
                          options={classOptions}
                          onChange={setEnteredClass} // Options to display in the dropdown
                        />
                        {/* <div className="w-full ml-7 h-[40px] rounded-[11px] bg-[#F8F8F8] border border-[#CBB7F1]"></div> */}
                      </div>
                      <div className="flex items-center mt-7">
                        <h1 className="poppins font-bold text-base mr-5 w-[140px]">
                          Country name
                        </h1>
                        {/* <div className="w-full ml-7 h-[40px] rounded-[11px] bg-[#F8F8F8] border border-[#CBB7F1]"></div> */}
                        <Select
                          value={enteredCountry}
                          options={countryOptions}
                          onChange={setEnteredCountry} // Options to display in the dropdown
                        />
                      </div>
                      <div className="flex items-center mt-7">
                        <h1 className="poppins font-bold text-base w-[133px]">
                          Date of Birth
                        </h1>
                        <input
                          value={dob}
                          onChange={dobHandler}
                          type="date"
                          className="w-[164px] ml-7 px-5 h-[40px] rounded-[4px] border border-[#CBB7F1]"
                        ></input>
                      </div>
                    </div>
                    {/* <div className="justify-self-end">
                      <button className="button-color text-white text-lg px-6 py-1 rounded-xl font-black nunito border-2 border-[#B5A4FF] hover:bg-[#8959EA] transition">
                        EDIT
                      </button>
                    </div> */}
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex transition text-md justify-center px-4 py-2 font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Students;
