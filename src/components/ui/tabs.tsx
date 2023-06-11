import classNames from "classnames";
import { useState } from "react";

export enum TABS {
  CRYPTO = "crypto",
  INDEXES = "indexes",
  STOCKS = "stocks",
  COMMODITIES = "commodties",
  FOREX = "forex",
}

export const tabsList = [
  TABS.CRYPTO,
  TABS.INDEXES,
  TABS.STOCKS,
  TABS.COMMODITIES,
  TABS.FOREX,
];

interface TabI {
  title: TABS;
  isActive?: boolean;
  updateCurrentStepStatus: (currentStep: TABS) => void;
}

function Tab({ title, isActive, updateCurrentStepStatus }: TabI) {
  return (
    <div
      className={classNames(
        "cursor-pointer px-5 py-1 text-gray-600 first-letter:uppercase hover:opacity-90",
        {
          "bg-gradient-to-b from-violet-600/40 to-indigo-600/50 border border-purple-400/80 text-zinc-100 font-semibold rounded-lg":
            isActive,
        }
      )}
      onClick={() => updateCurrentStepStatus(title)}
    >
      {title}
    </div>
  );
}

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState<TABS>(TABS.CRYPTO);

  function updateCurrentStepStatus(currentStep: TABS) {
    setCurrentTab(currentStep);
  }

  return (
    <div className="text-sm font-medium text-center text-gray-500 mx-auto">
      <ul className="flex flex-wrap justify-center">
        {tabsList.map((tabTitle) => {
          return (
            <li className="mr-2">
              <Tab
                updateCurrentStepStatus={updateCurrentStepStatus}
                isActive={currentTab === tabTitle}
                title={tabTitle}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
