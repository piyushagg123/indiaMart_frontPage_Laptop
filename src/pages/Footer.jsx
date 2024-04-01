import React from "react";
import FooterContent from "../components/FooterContent";

const Footer = () => {
  return (
    <div className="">
      <br />
      <br />
      <div className="flex justify-between pl-16 pr-16">
        <h1 className="text-2xl text-[blue]">We are here to help you!</h1>
        <div className="flex gap-8">
          <p>Go Mobile:</p>
          <p>Follow us on:</p>
        </div>
      </div>
      <div className="bg-white pl-16 pr-16 pt-2">
        <div className="flex justify-between ">
          <FooterContent />
          <FooterContent />
          <FooterContent />
          <FooterContent />
          <FooterContent />
        </div>
        <div className="flex justify-between border-t text-[10px]">
          <p>
            Copyright © 1996-2024 IndiaMART InterMESH Ltd. All rights reserved.
          </p>
          <div>
            <p>Terms of Use - Privacy Policy - Link to Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
