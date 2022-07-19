import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import { ToastContainer, toast } from "react-toast";
import { deleteCountries } from "../Api";

const CountryList = (props) => {
  const { getCountryList } = useContext(AppContext);
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

  const countryDeleteHandler = async () => {
    try {
      await deleteCountries(data._id);
      showNoty("Deleted country successfully", "green");
    } catch (e) {
      showNoty(e?.response.data.error ?? e);
    } finally {
      getCountryList();
    }
  };

  return (
    <>
      <div className="flex justify-between pr-20 py-7">
        <h1 className="poppins text-2xl">{data.name}</h1>
        <button
          onClick={countryDeleteHandler}
          className="ml-8 button-color text-white text-md px-6 py-1 rounded-xl font-black nunito border-2 border-[#B5A4FF] hover:bg-[#8959EA] transition"
        >
          Delete
        </button>
      </div>
      <div id="snackbar"></div>
    </>
  );
};

export default CountryList;
