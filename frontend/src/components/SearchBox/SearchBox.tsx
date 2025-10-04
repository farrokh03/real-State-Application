import { faTableCells, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SearchBox = () => {
  return (
    <div className="w-full h-20 bg-neutral-800 flex items-center justify-around px-4 sticky top-32 z-50">
      <div className="w-10/12 ">
        <button className="text-xl cursor-pointer absolute mt-1 ml-2 bg-gray-600 w-10 h-10 rounded-full text-blue-400 z-10 hover:bg-blue-400 hover:text-gray-600 transition-colors">
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <input
          className="h-10 placeholder:text-gray-500 w-11/12 bg-gradient-to-l from-neutral-400  to-neutral-300 px-15 py-6  outline-0   focus:to-neutral-400 text-neutral-600   transition"
          placeholder={` search between 5331 items ...`}
          type="search"
          name="searchbox"
        />
      </div>
      <button className="bg-gradient-to-l from-blue-200 to-blue-300 w-40 shadow-lg shadow-neutral-700  px-8 py-1  flex flex-row items-center justify-around hover:bg-neutral-400 transition-colors duration-200 hover:from-neutral-500 hover:to-neutral-400">
        <FontAwesomeIcon icon={faTableCells} /> Categories
      </button>
    </div>
  );
};
export default SearchBox;
