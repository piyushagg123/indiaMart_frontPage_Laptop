import React from "react";
import Dummy from "dummyjs";
import GoodsItemIn from "./GoodsItemIn";
const GoodsItem = () => {
  return (
    <div className="">
      <br />
      <br />
      <br />
      <br />
      <h1 className="font-bold text-4xl">
        Building Construction Material & Equipment
      </h1>
      <br />
      <div className="flex justify-around border-t-[2px] p-3 w-[95%] m-auto border-black bg-white">
        <div className="w-[25%] flex flex-col bg-black text-white p-5 justify-end">
          <a href="">{Dummy.text(1)}</a>
          <a href="">{Dummy.text(1)}</a>
          <a href="">{Dummy.text(1)}</a>
          <a href="">{Dummy.text(1)}</a>
          <div className="mt-3">
            <button className="bg-[green] p-2 pl-5 pr-5 rounded">
              View All
            </button>
          </div>
        </div>
        <div className="w-[30%] gap-8 flex flex-col">
          <GoodsItemIn />
          <GoodsItemIn />
          <GoodsItemIn />
        </div>
        <div className="w-[30%] gap-8 flex flex-col">
          <GoodsItemIn />
          <GoodsItemIn />
          <GoodsItemIn />
        </div>
      </div>
    </div>
  );
};

export default GoodsItem;
