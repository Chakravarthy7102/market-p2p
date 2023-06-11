import { XCircleIcon } from "lucide-react";
import Steps from "./ui/steps";
import Tabs from "./ui/tabs";
import AssetCard, { Context } from "./assetCard";
import mockData from "@/data/assets";
import { useMemo } from "react";
import Search from "./ui/search";
import { STEPS } from "@/hooks/useTrackStepsProgress";
import useLotStore from "@/zustand/lotStore";
import Button from "./ui/button";
import TakePostion from "./takePostion";
import useStepsStore from "@/zustand/stepsStore";

interface ModalContentI {
  toggleModal: () => void;
}

export default function Modal({ toggleModal }: ModalContentI) {
  const { currentStep } = useStepsStore();

  const context = useMemo((): Context | undefined => {
    if (currentStep === STEPS.CHOOSE_ASSET) return "yourAsset";
    if (currentStep === STEPS.CHOOSE_OPP_ASSET) return "opposingAsset";
  }, [currentStep]);

  return (
    <div
      tabIndex={-1}
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 bg-gray-700/70 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-2xl max-h-full m-auto">
        <div className="relative space-y-5 bg-gray-900 rounded-lg shadow ">
          <div className="flex items-start justify-between p-4 rounded-t md:px-16">
            <h3 className="text-md font-semibold text-zinc-200">
              Multi-user Lot
            </h3>
            <XCircleIcon
              className="cursor-pointer hover:text-gray-400 text-gray-600"
              onClick={toggleModal}
            />
          </div>
          <Steps />
          {context ? (
            <>
              <Search />
              <Tabs />
              <AssetsList context={context} />
            </>
          ) : (
            <TakePostion toggleModal={toggleModal} />
          )}
        </div>
      </div>
    </div>
  );
}

function AssetsList({ context }: { context: Context }) {
  const selectedAsset = useLotStore((state) => state.lot[context]);
  const { updateStepStatus } = useStepsStore();

  function handleOppAssetNext() {
    if (!selectedAsset) {
      alert("Please select a asset to move forward!");
      return;
    }
    updateStepStatus(STEPS.TAKE_POSITION);
  }

  function handleYourAssetNext() {
    if (!selectedAsset) {
      alert("Please select a asset to move forward!");
      return;
    }
    updateStepStatus(STEPS.CHOOSE_OPP_ASSET);
  }

  function handleGoBack() {
    updateStepStatus(STEPS.CHOOSE_ASSET);
  }

  return (
    <section>
      <div className="flex justify-center h-[calc(100vh-25rem)] overflow-y-scroll">
        {mockData.map((assets, index) => {
          return (
            <div key={index} className="flex flex-col">
              {assets.map((asset) => {
                return (
                  <AssetCard
                    key={asset.uuid}
                    {...asset}
                    context={context}
                    isSelected={asset.uuid === selectedAsset?.uuid}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      {context === "opposingAsset" ? (
        <div className="flex p-5 gap-2">
          <Button onClick={handleGoBack} color="secondary">
            Back
          </Button>
          <Button onClick={handleOppAssetNext}>Next</Button>
        </div>
      ) : (
        <Button onClick={handleYourAssetNext}>Next</Button>
      )}
    </section>
  );
}
