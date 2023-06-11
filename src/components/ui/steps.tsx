import { STEPS } from "@/hooks/useTrackStepsProgress";
import useStepsStore from "@/zustand/stepsStore";
import classNames from "classnames";
import { useCallback } from "react";

export default function Steps() {
  const { completedSteps, currentStep } = useStepsStore();

  const getFullTitle = useCallback(
    (currentStep: STEPS) => {
      if (currentStep === STEPS.CHOOSE_ASSET) {
        return "Choose your Asset";
      }
      if (currentStep === STEPS.CHOOSE_OPP_ASSET) {
        return "Choose Opposing Asset";
      }
      if (currentStep === STEPS.TAKE_POSITION) {
        return "Take Position";
      }
    },
    [currentStep]
  );

  return (
    <div className="relative">
      <div className="flex justify-between relative z-10 md:mx-16 mx-11">
        <span
          className={classNames(
            "h-7 w-7 bg-gray-900 border-[0.5px] border-zinc-700 rounded-full text-center",
            {
              "bg-primary-graident border-none":
                currentStep === STEPS.CHOOSE_ASSET,
              "bg-green-500 border-none": completedSteps.includes(
                STEPS.CHOOSE_ASSET
              ),
            }
          )}
        >
          1
        </span>
        <span
          className={classNames(
            "h-7 w-7 bg-gray-900 border-[0.5px] border-zinc-700 rounded-full text-center",
            {
              "bg-primary-graident border-none":
                currentStep === STEPS.CHOOSE_OPP_ASSET,
              "bg-green-500 border-none": completedSteps.includes(
                STEPS.CHOOSE_OPP_ASSET
              ),
            }
          )}
        >
          2
        </span>
        <span
          className={classNames(
            "h-7 w-7 bg-gray-900 border-[0.5px] border-zinc-700 rounded-full text-center",
            {
              "bg-primary-graident border-none":
                currentStep === STEPS.TAKE_POSITION,
              "bg-green-500 border-none": completedSteps.includes(
                STEPS.TAKE_POSITION
              ),
            }
          )}
        >
          3
        </span>
      </div>
      <div className="relative ml-16">
        <hr className="absolute -top-5 h-4 w-[88%] inset-x-0 bg-gray-800 rounded-full border-none" />
      </div>
      <h4 className="text-center m-5 font-semibold">
        {getFullTitle(currentStep)}
      </h4>
    </div>
  );
}
