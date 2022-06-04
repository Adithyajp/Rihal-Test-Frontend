import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import { ToastContainer, toast } from 'react-toast'
import { deleteCountries } from "../Api";

const CountryList = (props) => {
  const { getCountryList } = useContext(AppContext);
  const { data } = props;

  const notify = () => toast.success('Country deleted 🗑️')


  const countryDeleteHandler = async () => {
    try {
      await deleteCountries(data.id);
    } catch (e) {
      console.log(e?.response ?? e);
    } finally {
      getCountryList();
      notify();
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
      <ToastContainer />
    </>
  );
};

export default CountryList;
