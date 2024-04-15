import React from "react";
import GoalsOptions from "../components/GoalsOptions";
import Button from "../components/Button";

const Goals = () => {
  return (
    <div className="sm:w-full flex flex-col items-center justify-between sm:h-[800px] mt-11">
      <div className="flex flex-col gap-10">
        <div className="w-full text-center font-semibold text-[20px]">
          <h1>What are your goals?</h1>
        </div>

        <div className="flex flex-col gap-5">
          <GoalsOptions text="Weight Loss" />
          <GoalsOptions text="Muscle Gain" />
          <GoalsOptions text="Flexibility and Mobility" />
          <GoalsOptions text="General Fitness" />
          <GoalsOptions text="Event - specific training" />
          <GoalsOptions text="Mindfulness and Mental Health" />
        </div>
      </div>

      <div className="mb-[5rem]">
        <Button text="Confirm" to="/workouttracker"/>
      </div>
    </div>
  );
};

export default Goals;
