import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Search = ({ button }) => {
  return (
    <div className="flex items-center">
      <div className="bg-white text-black h-[35px] rounded-l-sm flex border-r pr-2">
        <button className="flex items-center gap-5">
          All India <FaChevronDown fill="black" />
        </button>
      </div>
      <input
        type="text"
        placeholder="Enter product/service name"
        className="h-[35px]  w-[200px]  xl:w-[300px] pl-1"
      />
      <div className="h-[35px] flex pr-2 items-center bg-[green] w-fit justify-center">
        <button className="flex items-center text-white gap-3 p-2">
          <IoIosSearch fill="white" /> {button}
        </button>
      </div>
    </div>
  );
};

export default Search;
