import React from "react";
import Search from "../components/Search";

const Header = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-6 p-[40px]">
      <h1>Search for products & find verified sellers near you</h1>
      <Search button={"Search"} />
    </div>
  );
};

export default Header;
