import React from "react";
import Dummy from "dummyjs";

const MoreItem = () => {
  return (
    <div className="w-[20%] flex items-center flex-col">
      <img src={Dummy.image("75")} alt="" />
      <p className="font-bold">{Dummy.text(1)}</p>
      <p>{Dummy.text(2)}</p>
      <div>
        <br />
        <br />
        <button className="border border-black rounded-2xl p-1 pl-3 pr-3">
          {Dummy.text(2)}
        </button>
      </div>
    </div>
  );
};

export default MoreItem;
