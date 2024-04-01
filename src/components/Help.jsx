import React from "react";

const Help = () => {
  return (
    <div className="text-black absolute bg-white gap-1 flex-col flex right-9 top-14 p-4">
      <p className="text-xs">Find answers to your queries</p>
      <div className="flex justify-between">
        <div>
          <button>
            For <span className="font-bold">Buying</span>
          </button>
        </div>
        <div>
          <button>
            For <span className="font-bold">Selling</span>
          </button>
        </div>
      </div>
      <div>
        <button>Share your Feedback</button>
      </div>
      <div>
        <button>Raise a Complaint</button>
      </div>
      <div>
        <p>Email us on</p>
        <p className="font-bold">a@gmail.com</p>
      </div>
      <div>
        <p>
          Call us at <span className="font-bold">096-9696-9696</span>
        </p>
      </div>
      <div>
        <button>Chat with us</button>
      </div>
      <div>
        <button>Seller Academy</button>
      </div>
    </div>
  );
};

export default Help;
