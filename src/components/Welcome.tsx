import React from "react";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-start ">
        <div>
          <span className=" text-white font-black text-[2rem] lg:text-[5rem]">
            God is for you
          </span>
        </div>
        <div className="lg:-mt-8">
          <span className=" text-white font-black text-[2rem] lg:text-[5rem]">
            and so are we
          </span>
        </div>
      </div>
      <button className="px-4 py-2 bg-white text-black font-bold text-2xl capitalize mt-4 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[rgba(75,12,191,1)] duration-500 transition-[color,box-shadow]">
        visit us
      </button>
    </div>
  );
}
