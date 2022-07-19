import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import { deleteClasses } from "../Api";

const ClassList = (props) => {
  const { getClassList} = useContext(AppContext);
  const { data } = props;

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

  const classDeleteHandler = async () => {
    try {
      console.log(data._id)
      await deleteClasses(data._id);
      showNoty("Deleted class successfully", "green");
    } catch (e) {
      showNoty(e?.response.data.error ?? e);
    } finally {
      getClassList();
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
      <div id="snackbar"></div>
    </>
  );
};

export default ClassList;
