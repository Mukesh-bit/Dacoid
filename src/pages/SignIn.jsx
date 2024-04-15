import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {

  const navigate = useNavigate()

  const createAccount = () => {
    navigate('/createaccount')
  }


  return (
    <div className="sm:w-full sm:h-[800px] flex flex-col justify-between mt-11">
      <div className="mt-11">
        <h1 className="font-semibold text-[20px] text-black pl-5">
        Welcome Back
        </h1>

        <div className="inputField flex flex-col gap-6 mt-10 w-full items-center relative">
          <InputField placeholder="Email" type="email" />
          <input type="password" placeholder="Password" className="relative bg-[#F1F1F1] w-[343px] h-[50px] p-5 rounded-lg placeholder:text-[#7F7F7F] placeholder:font-medium placeholder:text-[12px]"/>
          <img src="src\assets\eye-off.png" alt="eye" className="absolute top-[5.7rem] right-8"/>
        </div>

        <div className="w-full pl-5 mt-1">
          <a href="#" className="font-medium text-[12px] text-[#7F7F7F] border-[#7F7F7F] border-b">Forgot your password?</a>
        </div>
      </div>

      <div className="flex flex-col gap-7 mb-6">
        <div className="w-full flex items-center justify-center">
          <Button text="Sign In" to="/signin"/>
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
          <p className="border-[#7F7F7F] border-b">Dont't have an account yet? <a href="#" className="text-[#819CFF]" onClick={createAccount}>Create an account</a></p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
