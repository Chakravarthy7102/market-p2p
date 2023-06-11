import { useEffect, useMemo, useState } from "react";

export enum STEPS {
  CHOOSE_ASSET = 1,
  CHOOSE_OPP_ASSET = 2,
  TAKE_POSITION = 3,
}

const CURRENT_STEP_KEY = "current_step";

interface TrackStepsProgress {
  currentStep: STEPS;
  completedSteps: Array<STEPS>;
  updateCurrentStepStatus: (currentStep: STEPS) => void;
}

export default function useTrackStepsProgress(): TrackStepsProgress {

  const persistedCurrentStep = useMemo(() => {
    const storedcurrentStep = localStorage.getItem(CURRENT_STEP_KEY);
    return storedcurrentStep
      ? (parseInt(storedcurrentStep) as STEPS)
      : STEPS.CHOOSE_ASSET;
  }, []);
  //current active step that the user is present on
  //TODO: better to use global store to track this state as every new init of this hook allocates extra memory.
  const [currentStep, setCurrentStep] = useState<STEPS>(persistedCurrentStep);

  //list of steps that the user have completed following.
  const [completedSteps, setCompletedSteps] = useState<Array<STEPS>>([]);

  function updateCurrentStepStatus(currentStep: STEPS) {
    localStorage.setItem(CURRENT_STEP_KEY, currentStep.toString());
    setCurrentStep(currentStep);
  }

  function updateCompletedSteps() {
    if (currentStep === STEPS.CHOOSE_ASSET) {
      setCompletedSteps([STEPS.CHOOSE_ASSET]);
    } else if (currentStep === STEPS.CHOOSE_OPP_ASSET) {
      setCompletedSteps([STEPS.CHOOSE_ASSET, STEPS.CHOOSE_OPP_ASSET]);
    } else if (currentStep === STEPS.TAKE_POSITION) {
      setCompletedSteps([
        STEPS.CHOOSE_ASSET,
        STEPS.CHOOSE_OPP_ASSET,
        STEPS.TAKE_POSITION,
      ]);
    }
  }

  useEffect(() => {
    //whenever the currentStep state changes/updates reset the completedSteps accordingly
    updateCompletedSteps();
  }, [currentStep]);
  
  return { currentStep, completedSteps, updateCurrentStepStatus };
}
