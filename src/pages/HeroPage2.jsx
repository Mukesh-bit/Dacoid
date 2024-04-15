import React from "react";
import { Link} from "react-router-dom";

const HeroPage2 = () => {


  return (
    <div className="sm:w-[375px] sm:h[800px] bg-[#FCFCFC] mt-11">
      <div className="w-full text-right pr-5">
        <Link>
          <a className="font-medium text-[16px] border-b border-[#9FB2FF] text-[#9FB2FF]">
            Skip
          </a>
        </Link>
      </div>

      <div className="w-full flex items-center justify-center mt-[68px]">
        <img src="src\assets\image 16.png" className="w-[352px] h-[234px] bg-transparent" alt="" />
      </div>

      <div className="w-full mt-[85px]"> 
        <h1 className="font-semibold text-[20px]  pl-3">Get Burn</h1>
        <p className="font-medium text-[16px] text-[#787878] leading-5 w-[343px] mx-auto ">Let's keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
      </div>

      <div className="w-full flex justify-end fixed bottom-[3rem] right-5">
        <Link to='/createaccount'>
        <img src="src\assets\Group 12.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default HeroPage2;
