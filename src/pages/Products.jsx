import React from "react";
import Items from "../components/Items";

const Products = () => {
  return (
    <div className="w-[95%] m-auto bg-white pb-2">
      <br />
      <div className="flex items-end gap-3">
        <h1 className="font-bold text-4xl">Products You May Like</h1>{" "}
        <h2>View All </h2>
      </div>
      <div className="flex flex-wrap justify-around">
        <Items flag="true" />
        <Items flag="true" />
        <Items flag="true" />
        <Items flag="true" />
        <Items flag="true" />
        <Items flag="true" />
        <Items flag="true" />
        <Items flag="true" />
        <Items flag="true" />
        <Items flag="true" />
      </div>
    </div>
  );
};

export default Products;
