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

export default function useTabs() {
  const [currentTab, setCurrentTab] = useState<TABS>(TABS.CRYPTO);

  function updateCurrentStepStatus(currentStep: TABS) {
    setCurrentTab(currentStep);
  }

  return { currentTab, updateCurrentStepStatus };
}
