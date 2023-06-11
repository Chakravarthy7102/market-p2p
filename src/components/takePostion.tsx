import Image from "next/image";
import useLotStore from "@/zustand/lotStore";
import Label from "./form/label";
import Input from "./form/input";

interface PostionCardI {
  title: string;
  imageUrl: string;
  type: string;
}
function PostionCard({ imageUrl, title, type }: PostionCardI) {
  return (
    <div className="text-center h-50 w-50 flex flex-col gap-3 justify-center px-10 py-5 items-center bg-gray-950 rounded-xl border border-gray-800">
      <h5 className="text-xs font-semibold">{type}</h5>
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

export default function TakePosition() {
  const { opposingAsset, yourAsset } = useLotStore((store) => store.lot);

  return (
    <>
      {opposingAsset && yourAsset && (
        <div className="space-y-5 pt-5">
          <div className="flex justify-center gap-10 items-center">
            <PostionCard
              imageUrl={yourAsset.imageUrl}
              title={yourAsset.title}
              type="Your Asset"
            />
            <div className="flex items-center justify-center h-16 w-16 rounded-full border border-purple-700">
              <Image
                alt="realtive logo"
                src={"https://relative.fi/icons/relative.svg"}
                height={25}
                width={25}
                className="rounded-full"
              />
            </div>
            <PostionCard
              imageUrl={opposingAsset.imageUrl}
              title={opposingAsset.title}
              type="Opposing Asset"
            />
          </div>
          <form className="flex flex-col px-10" action="">
            <Label htmlFor="fund">Fund your Pool (Ethereum)</Label>
            <Input
              min={0}
              type="number"
              name="fund"
              id="fund"
              placeholder="$100"
            />
            <Label htmlFor="fund">Lot Starts On</Label>
            <Input type="date" name="fund" id="fund" placeholder="$100" />
            <Label htmlFor="fund">Lot Ends On</Label>
            <Input type="date" name="fund" id="fund" placeholder="$100" />
          </form>
        </div>
      )}
    </>
  );
}
