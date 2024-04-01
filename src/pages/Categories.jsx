import React from "react";
import Items from "../components/Items";

const Categories = () => {
  return (
    <div className="w-[95%] m-auto bg-white mt-3 pb-2">
      <br />
      <div>
        <h1 className="font-bold text-4xl">Categories You May Like</h1>
      </div>
      <div className="flex flex-wrap justify-around">
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      </div>
    </div>
  );
};

export default Categories;
