import React from "react";

const SignIn = () => {
  return (
    <div className="text-black absolute bg-white gap-1 flex-col flex right-9 top-14 p-4">
      <div className="bg-[green] m-auto text-white p-3 rounded-lg">
        <button>Sign In</button>
      </div>
      <p className="text-xs">
        New to IndiaMART? <a href="">Join Now</a>
      </p>
      <a href="">Home</a>
      <a href="">Post your Requirement</a>
      <a href="">Verified business buyer</a>
      <a href="">Products/Services directory</a>
      <a href="">My Orders</a>
      <a href="">Recent Activities</a>
      <a href="">Setting</a>
      <a href="">Download Apps</a>
    </div>
  );
};

export default SignIn;
