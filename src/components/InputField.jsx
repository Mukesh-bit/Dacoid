import React from "react";

const InputField = ({placeholder ,type}) => {
  return (
    <div>
      <input
        className="bg-[#F1F1F1] w-[343px] h-[50px] p-5 rounded-lg placeholder:text-[#7F7F7F] placeholder:font-medium placeholder:text-[12px]"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
