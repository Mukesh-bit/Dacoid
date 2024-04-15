import React from "react";
import { Link } from "react-router-dom";

const HeroPage1 = () => {
  return (
    <div className="sm:w-[375px] sm:h[800px] bg-[#FCFCFC] mt-11">
      <div className="w-full text-right pr-5">
        <Link to="/createaccount">
          <a className="font-medium text-[16px] border-b border-[#9FB2FF] text-[#9FB2FF]">
            Skip
          </a>
        </Link>
      </div>

      <div className="w-full flex items-center justify-center mt-[68px]">
        <img
          src="src\assets\image 13.png"
          className="w-[282px] h-[282px] bg-transparent"
          alt=""
        />
      </div>

      <div className="w-full mt-[85px]">
        <h1 className="font-semibold text-[20px]  pl-3">Track Your Goal</h1>
        <p className="font-medium text-[16px] text-[#787878] leading-5 w-[343px] mx-auto ">
          Don't worry if you have trouble <br /> determining your goals, We can
          help you determine your goals and track your goals
        </p>
      </div>

      <div className="w-full flex justify-end fixed bottom-[3rem] right-5">
        <Link to="/heropage2">
          <img src="src\assets\Group 12.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default HeroPage1;
