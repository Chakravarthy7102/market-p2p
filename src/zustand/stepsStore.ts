import { STEPS } from "@/hooks/useTrackStepsProgress";
import { create } from "zustand";

interface StepsState {
  completedSteps: STEPS[];
  currentStep: STEPS;
  updateStepStatus: (currentStep: STEPS) => void;
  resetStepData: () => void;
}

const useStepsStore = create<StepsState>((set) => ({
  completedSteps: [],
  currentStep: STEPS.CHOOSE_ASSET,
  updateStepStatus: (currentStep: STEPS) =>
    set((state) => {
      if (currentStep === STEPS.CHOOSE_ASSET) {
        return { ...state, currentStep, completedSteps: [STEPS.CHOOSE_ASSET] };
      } else if (currentStep === STEPS.CHOOSE_OPP_ASSET) {
        return {
          ...state,
          currentStep,
          completedSteps: [STEPS.CHOOSE_ASSET, STEPS.CHOOSE_OPP_ASSET],
        };
      } else if (currentStep === STEPS.TAKE_POSITION) {
        return {
          ...state,
          currentStep,
          completedSteps: [
            STEPS.CHOOSE_ASSET,
            STEPS.CHOOSE_OPP_ASSET,
            STEPS.TAKE_POSITION,
          ],
        };
      }
      return state;
    }),
  resetStepData: () =>
    set((state) => {
      return {
        ...state,
        completedSteps: [],
        currentStep: 1,
      };
    }),
}));

export default useStepsStore;
