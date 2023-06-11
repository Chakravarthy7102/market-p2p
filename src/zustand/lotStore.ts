import { create } from "zustand";

interface LotState {
  lot: {};
  updateLot: ({}: any) => void;
}

const useLotStore = create<LotState>((set) => ({
  lot: {},
  updateLot: (lot) => set((state) => ({ ...state, lot })),
}));
