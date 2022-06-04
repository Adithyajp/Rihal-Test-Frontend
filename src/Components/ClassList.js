import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import { ToastContainer, toast } from "react-toast";
import { deleteClasses } from "../Api";

const ClassList = (props) => {
  const { getClassList } = useContext(AppContext);
  const { data } = props;

  const notify = () => toast.success("Class deleted 🗑️");

  const classDeleteHandler = async () => {
    try {
      await deleteClasses(data.id);
    } catch (e) {
      console.log(e?.response ?? e);
    } finally {
      getClassList();
      notify();
    }
  };

  return (
    <>
      <div className="flex justify-between pr-20 py-7">
        <h1 className="poppins text-2xl">{data.class_name}</h1>
        <button
          onClick={classDeleteHandler}
          className="ml-8 button-color text-white text-md px-6 py-1 rounded-xl font-black nunito border-2 border-[#B5A4FF] hover:bg-[#8959EA] transition"
        >
          Delete
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default ClassList;
