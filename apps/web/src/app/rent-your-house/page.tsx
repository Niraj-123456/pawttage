"use client";
import { useState } from "react";
import Button from "ui/components/Button";

import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";

const RentYourHouse = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [canGotoNextStep, setCanGotoNextStep] = useState<boolean>(false);

  const handleCurrentStepIncrease = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleCurrentStepDecrease = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="m-14 p-2">
      <h4 className="text-3xl font-medium text-center">
        Rent Your house for pets
      </h4>

      <div className="grid place-items-center mt-28 w-full max-w-4xl m-auto">
        {currentStep === 1 && <StepOne />}
        {currentStep === 2 && <StepTwo />}
        {currentStep === 3 && <StepThree />}
        {currentStep === 4 && <StepFour />}

        <div className="flex justify-between mt-10 w-full">
          <Button
            variant="outlined"
            size="small"
            startIcon={<ArrowCircleLeftOutlined />}
            onClick={handleCurrentStepDecrease}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            size="small"
            endIcon={<ArrowCircleRightOutlined />}
            onClick={handleCurrentStepIncrease}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RentYourHouse;
