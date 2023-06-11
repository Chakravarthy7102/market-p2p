import useLotStore from "@/zustand/lotStore";
import useStepsStore from "@/zustand/stepsStore";
import { useState } from "react";

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resetLotData = useLotStore((state) => state.resetLot);
  const resetStepData = useStepsStore((state) => state.resetStepData);

  function toggleModal() {
    if (isModalOpen) {
      resetLotData("opposingAsset");
      resetLotData("yourAsset");
      resetStepData();
    }
    setIsModalOpen(!isModalOpen);
  }

  return {
    isModalOpen,
    toggleModal,
    setIsModalOpen,
  };
}
