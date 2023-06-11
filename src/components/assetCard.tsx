import useLotStore from "@/zustand/lotStore";
import classNames from "classnames";
import Image from "next/image";

export type Context = "yourAsset" | "opposingAsset";

export default function AssetCard({
  title,
  imageUrl,
  context,
  isSelected,
  uuid,
}: {
  title: string;
  imageUrl: string;
  context: Context;
  isSelected: boolean;
  uuid: string;
}) {
  const { updateLot, lot, resetLot } = useLotStore((store) => store);

  function saveSelectedAsset() {
    const currentSelectedAsset = lot[context];
    if (currentSelectedAsset) {
      resetLot(context);
    } else {
      updateLot(context, { title, imageUrl, uuid });
    }
  }

  return (
    <div
      onClick={saveSelectedAsset}
      className={classNames(
        "cursor-pointer p-3 flex flex-col items-center gap-2 border border-transparent hover:border hover:border-purple-500/60 hover:bg-gradient-to-b from-violet-600/40 to-indigo-600/50 shrink-0 rounded-lg m-1",
        {
          "border border-purple-500/60 bg-gradient-to-b from-violet-600/40 to-indigo-600/50":
            isSelected,
        }
      )}
    >
      <Image
        className="bg-white rounded-full"
        src={imageUrl}
        alt={title}
        height={28}
        width={28}
      />
      <h6 className="md:text-sm text-xxs font-semibold">{title}</h6>
    </div>
  );
}
