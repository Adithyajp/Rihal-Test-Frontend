import { Fragment, useEffect, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AppContext } from "../Contexts/AppContext";
import moment from "moment";
import { deleteStudents } from "../Api";

const StudentList = (props) => {
  let { data } = props;
  const { classes, countries, getStudentList } = useContext(AppContext);

  // const idReplace = () => {
  //   //   console.log(classes)
  //   let class_name = classes.find((item) => item._id === data.class_id);
  //   console.log(class_name?.class_name)
  //   data.class_id = class_name?.class_name;
  // };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function closeModall() {
    studentDeleteHandler()
    setIsOpen(false);
    //   notifyDelete();
  }

  function openModal() {
    setIsOpen(true);
  }

  const studentDeleteHandler = async () => {
    try {
      await deleteStudents(data.id);
    } catch (e) {
      console.log(e?.response ?? e);
    } finally {
      getStudentList();
    //   notify();
    }
  };

  //   const notifyDelete = () =>
  //     toast.success("Competitor Deleted", {
  //       position: "bottom-center",
  //       autoClose: 1000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     });

  // useEffect(() => {
  //   idReplace();
  // }, []);
  return (
    <>
      <div className="grid grid-cols-2 grid-flow-col-dense mt-10 mr-12 py-7 px-5 rounded-[11px] shadow-[0px_0px_12px_rgba(0,0,0,0.08)]">
        <div className="col-span-2 pr-5">
          <div className="flex items-center">
            <h1 className="poppins font-bold text-base w-[180px] text-left">
              Student Name
            </h1>
            <div className="flex items-center px-6 w-full ml-7 h-[40px] rounded-[4px]  border border-[#CBB7F1]">
              {data.name}
            </div>
          </div>
          <div className="flex items-center mt-7">
            <h1 className="poppins font-bold text-base mr-5 w-[135px] text-left">
              Class Name
            </h1>
            {/* {hitKeyword.map((item) => ( */}
            <div className="px-4 flex items-center justify-center ml-7 h-[40px] rounded-[24px]  border border-[#CBB7F1]">
              {data.class_id}
            </div>
            {/* ))} */}
          </div>
          <div className="flex items-center mt-7">
            <h1 className="poppins font-bold text-base mr-5 w-[135px] text-left">
              Country Name
            </h1>
            {/* {hitKeyword.map((item) => ( */}
            <div className="px-4 flex items-center justify-center ml-7 h-[40px] rounded-[24px]  border border-[#CBB7F1]">
              {data.country_id}
            </div>
            {/* ))} */}
          </div>
          <div className="flex items-center mt-7">
            <h1 className="poppins font-bold text-base w-[155px] text-left">
              Date of Birth
            </h1>
            <div className="flex items-center justify-center w-[164px] ml-7 px-5 h-[40px] rounded-[4px]  border border-[#CBB7F1]">
              <i className="bx bx-calendar-alt mr-3 text-xl"></i>
              {moment(data.date_of_birth).format("l")}
            </div>
          </div>
        </div>
        <div className="justify-self-end">
          <button
            data-tooltip-target="tooltip-bottom"
            data-tooltip-placement="bottom"
            onClick={openModal}
            className="button-color text-white text-lg px-6 py-1 rounded-xl font-black nunito border-2 border-[#B5A4FF] hover:bg-[#8959EA] transition"
          >
            <i className="bx bx-trash text-xl"></i>
          </button>
        </div>
      </div>
      {/*  Delete student modal  */}
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                {/* <form className="w-full"> */}
                <div className="w-full">
                  <div className="w-full py-3 px-3 rounded font-bold">
                    Delete Student
                  </div>
                  <div className="w-full mb-3 flex items-center py-3 px-3 rounded">
                    Are you sure you want to delete&nbsp;{data.name}?
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    className="inline-flex mr-2 justify-center px-4 py-2 text-sm font-medium text-black bg-gray-100 border border-transparent transition rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModall}
                  >
                    Confirm
                  </button>
                </div>
                {/* </form> */}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default StudentList;
