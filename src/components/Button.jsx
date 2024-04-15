import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, to }) => {
  return (
    <>
      <Link to={to}>
        <button className="bg-[#7B91FF] w-[343px] h-[50px] rounded-lg font-semibold text-[16px] text-white ">
          {text}
        </button>
      </Link>
    </>
  );
};

export default Button;
