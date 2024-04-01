import React, { useState } from "react";
import Dummy from "dummyjs";
import Nav_item from "./Nav_item";
import Search from "./Search";
import Help from "./Help";
import SignIn from "./SignIn";

const Navbar = () => {
  const [helpMenu, setHelpMenu] = useState(false);
  const [signInMenu, setSignInMenu] = useState(false);
  return (
    <>
      <div className="bg-[#2E3192] flex fixed w-full  items-center p-2 justify-between text-white top-0">
        <div className="flex gap-5">
          <p>
            <img
              src="https://lh3.googleusercontent.com/y94CuIWP_ttJwMZoyxq2uR5iwkYk0E_Is_8NCp-v0bumpgh1QHgFPqQ2cYvNHHrA3ZIHfVUQbfiu8QjzTmLqadX0RvEai1jE_-H47A"
              alt=""
              className="h-10"
            />
          </p>
          <div className="flex items-center">
            <Search />
            <div className="h-[35px] bg-white text-black flex items-center ml-1">
              <button className="p-2">Get Best Price</button>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pr-6">
          <Nav_item name={"Shopping"} />
          <Nav_item name={"Sell"} />
          <div
            onMouseOver={() => setHelpMenu(true)}
            onMouseLeave={() => setHelpMenu(false)}
          >
            <Nav_item name={"Help"} />
            {helpMenu ? <Help /> : ""}
            {/* <Help /> */}
          </div>
          <Nav_item name={"Messages"} />
          <div
            onMouseOver={() => setSignInMenu(true)}
            onMouseLeave={() => setSignInMenu(false)}
          >
            {" "}
            <Nav_item name={"Sign In"} />
            {signInMenu ? <SignIn /> : ""}
            {/* <SignIn /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
