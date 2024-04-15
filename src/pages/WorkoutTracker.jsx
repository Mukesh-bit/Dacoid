import React from "react";
import { Link, useNavigate } from "react-router-dom";

const WorkoutTracker = () => {

  const navigate = useNavigate()

  const workoutSchedule = () => {
    navigate('/workoutschedule')
  }

  return (
    <div className="sm:w-[375px] sm:h-[800px] flex flex-col items-center bg-gray-50 mt-11 sm:no-scrollbar sm:overflow-y-auto">
      <div className="w-full flex items-center px-5">
        <img
          className="w-[20px] h-[20px]"
          src="src\assets\chevron-left.png"
          alt=""
        />
        <h1 className="text-center w-full text-[20px] font-semibold">
          Workout Tracker
        </h1>
      </div>

      <div className="mt-10">
        <div className="flex w-full justify-end gap-[3.3rem] pr-[2rem] font-normal text-[11.2px]">
          <h1>Good job</h1>
          <h1>less then 320cal</h1>
        </div>
        <div className="flex w-full justify-end gap-[6.9rem] pr-[4.6rem] ">
          <img src="src\assets\Union.png" alt="" />
          <img src="src\assets\Union.png" alt="" />
        </div>
        <img src="src\assets\Chart Full.png" alt="" />
      </div>

      <div className="flex items-center gap-[8px] pl-[9px] mt-[24.85px] w-[328.75px] h-[50px] bg-gradient-to-r from-[#cbd6ff] from-10% via-violet-200 via-30% to-transparent to-28% rounded-lg">
        <img
          className="w-[20px] h-[20px] "
          src="src\assets\alert-triangle.png"
          alt=""
        />
        <h1 className="text-[12.57px] font-medium leading-none w-[70%]">
          You've burned fewer calories than yesterday. Time to get moving!{" "}
        </h1>
      </div>

      <div className="flex items-center justify-between w-full px-5 mt-[54.69px]">
        <h1 className="font-semibold text-[16px] text-black">
          Upcoming Workout
        </h1>
        <h3 className="font-medium text-[12px] text-gray-500">See more</h3>
      </div>

      <div className="mt-[16px] flex flex-col gap-[16px]">
        <div className="w-[343px] h-[75px] rounded-lg bg-[#FFFFFF] flex items-center justify-between px-[16px] drop-shadow-lg">
          <div className="flex gap-[9px]">
            <img
              src="src\assets\Ellipse 53.png"
              alt=""
              className="w-[50px] h-[50px]"
            />

            <div className="flex flex-col gap-2">
              <h1 className="font-medium text-[12px]">Full Body Workout</h1>{" "}
              <h2 className="text-gray-500 font-medium text-[10px]">
                Today 3pm
              </h2>
            </div>
          </div>
          <div>
            <img src="src\assets\Toggle.png" alt="" />
          </div>
        </div>

        <div className="w-[343px] h-[75px] rounded-lg bg-[#FFFFFF] flex items-center justify-between px-[16px] drop-shadow-lg">
          <div className="flex gap-[9px]">
            <img
              src="src\assets\Ellipse 54.png"
              alt=""
              className="w-[50px] h-[50px]"
            />

            <div className="flex flex-col gap-2">
              <h1 className="font-medium text-[12px]">Upper Body Workout</h1>{" "}
              <h2 className="text-gray-500 font-medium text-[10px]">
                4 Feb, 3:30 pm
              </h2>
            </div>
          </div>
          <div>
            <img src="src\assets\Toggle.png" alt="" />
          </div>
        </div>
      </div>

      <div className="text-[16px] font-semibold mt-[17px] w-full px-5">
        <h1>What Do You Want to Train</h1>
      </div>

      <div className="w-[343px] h-[124px] bg-[#8CB1FF] rounded-lg mt-[16px] flex items-center justify-between ">
        <div className="pl-[16px] flex flex-col gap-2">
          <h1 className="text-[12px] font-medium">Full Body Workout</h1>
          <h2 className="text-[10px] font-medium">Arms</h2>
          <h2 className="text-[10px] font-medium">Chest</h2>
        </div>
        <img className="pr-[12px]" src="src\assets\Ellipse 55.png" alt="" />
      </div>

      <div className="w-full z-10">
        <div className=" w-[375px] h-[76px] bg-white fixed left-0 bottom-0 flex items-center justify-center">
          <img
            className="w-[317px] h-[27.22px]"
            src="src\assets\Group 5.png"
            alt=""
          />
            <img
              className="z-20 absolute top-[-30px]"
              src="src\assets\Group 1.png"
              alt=""
              onClick={workoutSchedule}
            />
         
        </div>
      </div>
    </div>
  );
};

export default WorkoutTracker;
