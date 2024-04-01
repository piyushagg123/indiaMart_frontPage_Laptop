import React from "react";
import Dummy from "dummyjs";
const MegaMenuContent = () => {
  return (
    <div className="gap-2 flex flex-col pt-2">
      <p className="font-bold">Building and Construction</p>
      <div className="gap-2">
        {[...Array(10)].map((_, index) => (
          <a href="">
            <p key={index}>{Dummy.text(3)}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MegaMenuContent;
