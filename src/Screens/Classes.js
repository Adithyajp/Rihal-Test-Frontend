import { Fragment, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ClassList from "../Components/ClassList";
import { createClasses } from "../Api";
import { AppContext } from "../Contexts/AppContext";

const Classes = () => {
  // Getting classes from Appcontext
  const { classes, getClassList, setNav } = useContext(AppContext);
  setNav("Classes")
  
  const showNoty = (value, type) => {
    var x = document.getElementById("snackbar");
    x.innerHTML = value;
    x.className = "show";
    if (type == "green") {
      x.style.backgroundColor = "green";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
        x.style.backgroundColor = x.style.backgroundColor.replace(
          "green",
          "rgba(232, 42, 42, 0.86)"
        );
      }, 3000);
    } else {
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    }
  };

  const [enteredClass, setEnteredClass] = useState("");
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const classHandler = (event) => {
    setEnteredClass(event.target.value);
  };

  const classCreateHandler = async (e) => {
    e.preventDefault();
    const classdata = {
      class_name: enteredClass,
    };
    if(classdata.class_name === "" || classdata.class_name === null || classdata.class_name === " ") {
      return showNoty("Class name cannot be empty")
    }
    setEnteredClass("");
    console.log(classdata);
    try {
      await createClasses(classdata);
    } catch (e) {
      console.log(e?.response ?? e);
    } finally {
      getClassList();
    }
  };
  return (
    <>
      <div className="h-screen pl-80 pt-[40px]">
        <div className="flex items-center">
        <h1 className="text-[30px] text-[#101828] font-medium flex">Classes</h1>
          <button
            type="button"
            onClick={openModal}
            className="ml-8 button-color text-white text-lg px-6 py-1 rounded-xl font-bold nunito border-2 border-[#B5A4FF] hover:bg-[#8959EA] transition"
          >
            ADD
          </button>
        </div>
        <div className="grid grid-cols-1 divide-y-2 pt-10">
          {classes?.map((data) => (
            <ClassList key={data._id} data={data} />
          ))}
        </div>
      </div>
      {/* Create country modal  */}
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
                <form className="w-full" onSubmit={classCreateHandler}>
                  <div className="w-full py-3 px-3 rounded font-bold text-xl">
                    Create a new class
                  </div>
                  <div className="grid grid-cols-2 grid-flow-col-dense mt-3 mr-12 py-7 px-5 rounded-[11px]">
                    <div className="col-span-2 pr-5">
                      <div className="flex items-center">
                        <h1 className="poppins font-bold text-base w-[165px]">
                          Class Name
                        </h1>
                        <input
                          value={enteredClass}
                          onChange={classHandler}
                          className="w-full px-6 h-[40px] rounded-[4px] border border-[#CBB7F1] focus:outline-none focus:bg-white focus:border-purple-500"
                        ></input>
                      </div>
                    </div>
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
      <div id="snackbar"></div>
    </>
  );
};

export default Classes;
