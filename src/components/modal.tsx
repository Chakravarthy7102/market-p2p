import { XCircleIcon } from "lucide-react";
import Steps from "./steps";
import Tabs from "./tabs";
import AssetCard from "./assetCard";
import assets from "@/data/assets";
import { useMemo } from "react";
import Search from "./search";

interface ModalContentI {
  toggleModal: () => void;
}

export default function Modal({ toggleModal }: ModalContentI) {
  const mockData = useMemo(() => {
    return assets.map((asset) => new Array(10).fill(asset, 0, 10));
  }, []);
  return (
    <div
      tabIndex={-1}
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-2xl max-h-full m-auto">
        <div className="relative h-[calc(90vh)] space-y-5 bg-gray-900 rounded-lg shadow ">
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
          <Search />
          <Tabs />
          <div className="flex md:gap-8 justify-center h-[calc(100vh-25rem)] overflow-y-scroll">
            {mockData.map((assets) => {
              return (
                <div className="flex flex-col">
                  {assets.map((asset) => {
                    return <AssetCard {...asset} />;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
