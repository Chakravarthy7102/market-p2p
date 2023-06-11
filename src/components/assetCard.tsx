import Image from "next/image";

export default function AssetCard({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) {
  return (
    <div className="cursor-pointer p-3 flex flex-col items-center gap-2 border border-transparent hover:border hover:border-purple-500/60 hover:bg-gradient-to-b from-violet-600/40 to-indigo-600/50 shrink-0 rounded-lg">
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
