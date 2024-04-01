import React from "react";
import Dummy from "dummyjs";

const Items = ({ flag = false }) => {
  return (
    <div className="w-[230px] gap-3 flex flex-col items-start p-3 rounded-md border-[1px] mt-2">
      <img src={Dummy.image("200")} alt="" />
      <div>
        <h1 className={flag ? "font-bold " : "font-bold text-center"}>
          {Dummy.text(1)}
        </h1>
        {flag ? (
          <>
            <p>{Dummy.text(1)}</p>
            <p>Pune, Maharashtra</p>
            <p>
              <span className="font-bold">Rs. 6500</span>/piece
            </p>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col items-center w-full">
        {flag ? (
          <>
            <div className="w-full">
              <button className="bg-[#F3F3F3] text-[#2E3192] w-full p-2">
                View Number
              </button>
            </div>
            <br />
          </>
        ) : (
          ""
        )}
        <div className="w-full">
          <button className="bg-[#2E3192] text-[#F3F3F3] w-full p-2">
            {flag ? "Get Best Price" : "Get Quotes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
