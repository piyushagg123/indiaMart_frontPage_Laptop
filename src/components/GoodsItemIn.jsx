import React from "react";
import Dummy from "dummyjs";

const GoodsItemIn = () => {
  return (
    <div className="flex gap-4 max-w-[100%] border p-2 rounded">
      <img src={Dummy.image("100")} alt="" />
      <div className="flex flex-col">
        <a href="" className="font-bold">
          {Dummy.text(1)}
        </a>
        <a href="">{Dummy.text(1)}</a>
        <a href="">{Dummy.text(1)}</a>
        <a href="">{Dummy.text(1)}</a>
      </div>
    </div>
  );
};

export default GoodsItemIn;
