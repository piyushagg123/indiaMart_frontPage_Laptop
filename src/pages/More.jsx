import React from "react";
import MoreItem from "../components/MoreItem";

const More = () => {
  return (
    <>
      <br />
      <br />
      <div className="w-[95%] m-auto bg-white pb-2">
        <h1 className="font-bold text-4xl">More for You</h1>
        <br />
        <br />
        <div className="flex justify-around">
          <MoreItem />
          <MoreItem />
          <MoreItem />
          <MoreItem />
        </div>
      </div>
    </>
  );
};

export default More;
