import { Context } from "@/components/assetCard";
import { Asset } from "@/data/assets";
import { create } from "zustand";

interface LotState {
  lot: {
    yourAsset: Asset | null;
    opposingAsset: Asset | null;
  };
  updateLot: (context: Context, data: Asset) => void;
  resetLot: (context: Context) => void;
}

const useLotStore = create<LotState>((set) => ({
  lot: {
    opposingAsset: null,
    yourAsset: null,
  },
  updateLot: (context: Context, data: Asset) =>
    set((state) => {
      if (context === "yourAsset") {
        return {
          ...state,
          lot: { yourAsset: data, opposingAsset: state.lot.opposingAsset },
        };
      }
      if (context === "opposingAsset") {
        return {
          ...state,
          lot: { opposingAsset: data, yourAsset: state.lot.yourAsset },
        };
      }
      return state;
    }),
  resetLot: (context: Context, data = null) =>
    set((state) => {
      if (context === "yourAsset") {
        return {
          ...state,
          lot: { yourAsset: data, opposingAsset: data },
        };
      }
      if (context === "opposingAsset") {
        return {
          ...state,
          lot: { opposingAsset: data, yourAsset: data },
        };
      }
      return state;
    }),
}));

export default useLotStore;
