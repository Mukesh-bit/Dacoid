import React from "react";

const Dates = ({day, date, bgcolor}) => {
  return (
    <>
      <div className={`w-[62.67px] h-[76.24px] bg-[${bgcolor}] flex flex-col gap-0 items-center rounded-xl`}>
        <h4 className="font-semibold text-[11.39px] mt-1">{day}</h4>
        <h1 className="font-semibold text-[28.46px]">{date}</h1>
      </div>
    </>
  );
};

export default Dates;
