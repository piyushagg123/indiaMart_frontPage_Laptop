import React from "react";
import Dummy from "dummyjs";

const Nav_item = ({ name }) => {
  return (
    <a
      href="
    "
    >
      <div className="flex flex-col">
        <img data-dummy="400X300" className="w-5 h-5" src="" alt="" />
        <p>{name}</p>
      </div>
    </a>
  );
};

export default Nav_item;
