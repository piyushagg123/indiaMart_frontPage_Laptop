import React, { useState } from "react";
import MegaMenuContent from "./MegaMenuContent";
import Dummy from "dummyjs";

const MegaMenuItem = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      onMouseOver={() => setOpenMenu(true)}
      onMouseLeave={() => setOpenMenu(false)}
      className="hover:bg-[#F3F3F3] p-3 max-w-[15%]"
    >
      <div className="flex gap-2">
        <img src={Dummy.image("50")} alt="" />
        <p>Building and construction</p>
      </div>
      {openMenu ? (
        <div className="flex justify-around absolute w-full bg-[#F3F3F3] left-0">
          <MegaMenuContent />
          <MegaMenuContent />
          <MegaMenuContent />
          <MegaMenuContent />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MegaMenuItem;
