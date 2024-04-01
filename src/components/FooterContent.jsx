import React from "react";
import Dummy from "dummyjs";

const FooterContent = () => {
  return (
    <div>
      <div className="gap-2 flex flex-col pt-2">
        <div className="gap-2">
          {[...Array(5)].map((_, index) => (
            <a href="">
              <p key={index}>{Dummy.text(1)}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
