import React from "react";
import InputField from "../components/InputField";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {

  const navigate = useNavigate()

  const SignIn = () => {
    navigate('/signin')
  }

  return (
    <div className="sm:w-full sm:h-[800px] flex flex-col justify-between">
      <div className="mt-11">
        <h1 className="font-semibold text-[20px] text-black pl-5">
          Create an account
        </h1>

        <div className="inputField flex flex-col gap-6 mt-10 w-full items-center">
          <InputField placeholder="First Name" type="text" />
          <InputField placeholder="Last Name" type="text" />
          <InputField placeholder="Email" type="email" />
          <InputField placeholder="Password" type="password" />
        </div>

        <div className="w-full px-4 mt-7 flex gap-2 h-[21px] items-center">
          <CheckBox />
          <p className="font-medium text-[12px] w-full h-[21px]">
            By proceeding, I agree to all{" "}
            <a href="#" className="text-[#93A9FF]">
              T&C
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#93A9FF]">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-7 mb-6">
        <div className="w-full flex items-center justify-center">
          <Button text="Create an Account" to="/goals"/>
        </div>

        <div className="relative">
          <div className="border-0 border-black border-b-[1px] w-full relative"></div>
          <span className="absolute top-[-13px] translate-x-[900%] bg-white inline-block w-5 h-5">Or</span>
        </div>

        <div className="w-full flex items-center justify-center gap-5">
          <div className="w-[44px] h-[44px] border-[1px] border-[#7F7F7F] flex items-center justify-center rounded-lg">
            <img src="src\assets\flat-color-icons_google.png" alt="" />
          </div>
          <div className="w-[44px] h-[44px] border-[1px] border-[#7F7F7F] flex items-center justify-center rounded-lg">
            <img src="src\assets\Vector.png" alt="" />
          </div>
        </div>

        <div className="w-full flex items-center justify-center font-medium text-[12px]">
          <p>Already have an account? <a href="#" className="text-[#819CFF]" onClick={SignIn}>Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
