import React from "react";
import Dates from "../components/Dates";

const workoutSchedule = () => {
  return (
    <div className="sm:w-[375px] sm:h-[800px] flex flex-col items-center bg-gray-50 mt-11 ">
      <div className="w-full flex items-center px-5">
        <img
          className="w-[20px] h-[20px]"
          src="src\assets\chevron-left.png"
          alt=""
        />
        <h1 className="text-center w-full text-[20px] font-semibold">
          Workout Scheduale
        </h1>
      </div>

      <div className="mt-[10px]">
        <h1 className="flex items-center"><i class="ri-arrow-left-s-line"></i> <span className="font-semibold text-[12px] mx-[3px]">Feb 2024</span> <i class="ri-arrow-right-s-line"></i></h1>
      </div>

      <div className="w-full mt-[14px]">
        <div className="w-[343px] h-[76.85px] flex gap-2 mx-auto">
          
          <Dates day="Sun" date="5" bgcolor="#FFFFFF"/>
          <Dates day="Mon" date="6" bgcolor="#8DA4FF"/>
          <Dates day="Tue" date="7" bgcolor="#FFFFFF"/>
          <Dates day="Wed" date="8" bgcolor="#FFFFFF"/>
          <Dates day="Thu" date="9" bgcolor="#FFFFFF"/>

        </div>
      </div>


      

      <div className="w-full mt-[38px] relative z-0  overflow-y-scroll no-scrollbar">

        <div className="w-full">
          <h1 className="pl-5 pb-3 font-semibold text-[12px]">06:00 AM</h1>
          <div className="w-full border-[1px] border-b-gray-300"></div>
        </div>
        <div className="w-full mt-[9px] font-semibold text-[12px] relative">
          <h1 className="pl-5 pb-3">07:00 AM</h1>
          <div className="w-full border-[1px] border-b-gray-300"></div>
        </div>
        <div className="w-full mt-[9px] font-semibold text-[12px]">
          <h1 className="pl-5 pb-3">08:00 AM</h1>
          <div className="w-full border-[1px] border-b-gray-300"></div>
        </div>
        <div className="w-full mt-[9px] font-semibold text-[12px] relative">
          <h1 className="pl-5 pb-3">09:00 AM</h1>
          <div className="w-full border-[1px] border-b-gray-300"></div>
        </div>
        <div className="w-full mt-[9px] font-semibold text-[12px]">
          <h1 className="pl-5 pb-3">10:00 AM</h1>
          <div className="w-full border-[1px] border-b-gray-300"></div>
        </div>
        <div className="w-full mt-[9px] font-semibold text-[12px]">
          <h1 className="pl-5 pb-3">11:00 AM</h1>
          <div className="w-full border-[1px] border-b-gray-300"></div>
        </div>
        <div className="w-full mt-[9px] font-semibold text-[12px]">
          <h1 className="pl-5 pb-3">12:00 AM</h1>
          <div className="w-full border-[1px] border-b-gray-300"></div>
        </div>
        <div className="w-full mt-[9px] font-semibold text-[12px]">
          <h1 className="pl-5 pb-3">01:00 AM</h1>
          <div className="w-full border-[1px] border-b-gray-300"></div>
        </div>
        <div className="w-full mt-[9px] font-semibold text-[12px]">
          <h1 className="pl-5 pb-3">02:00 AM</h1>
          <div className="w-full border-[1px] border-b-gray-300"></div>
        </div>
        <div className="w-full mt-[9px] font-semibold text-[12px]">
          <h1 className="pl-5 pb-3">03:00 AM</h1>
          <div className="w-full border-[1px] border-b-gray-300"></div>
        </div>
        <div className="w-full mt-[9px] font-semibold text-[12px]">
          <h1 className="pl-5 pb-3">04:00 AM</h1>
          <div className="w-full border-[1px] border-b-gray-300"></div>
        </div>
        <div className="w-full mt-[9px] font-semibold text-[12px]">
          <h1 className="pl-5 pb-3">05:00 AM</h1>
          <div className="w-full border-[1px] border-b-gray-300"></div>
        </div>

        <div className="w-[149px] h-[30px] rounded-2xl bg-[#D3A4F4] flex items-center justify-center absolute top-[58px] right-5">
          <h1 className="font-semibold text-[12px] text-white">Ab Workout, 7:30am</h1>
        </div>

        <div className="w-[149px] h-[30px] rounded-2xl bg-[#D3A4F4] flex items-center justify-center absolute top-[7.7rem] right-[8rem]">
          <h1 className="font-semibold text-[12px] text-white">Upperbody Workout, 9am</h1>
        </div>

        <div className="w-[149px] h-[30px] rounded-2xl bg-gray-200 flex items-center justify-center absolute bottom-[8.2rem] right-[8rem]">
          <h1 className="font-semibold text-[12px] text-black">Lowerbody Workout, 3pm</h1>
        </div>

        <div className="w-[63px] h-[63px] bg-[#E9B1E0] rounded-full flex items-center justify-center absolute bottom-[3rem] right-5">
          <h1><i class="text-white text-3xl ri-add-line"></i></h1>
        </div>


      </div>

      <div className="w-full">
        <div className=" w-[375px] h-[76px] bg-white fixed left-0 bottom-0 flex items-center justify-center">
          <img className="w-[317px] h-[27.22px]" src="src\assets\Group 5.png" alt="" />
          <img className="absolute top-[-30px]" src="src\assets\Group 1.png" alt="" />
        </div>
      </div>

    </div>
  );
};

export default workoutSchedule;
