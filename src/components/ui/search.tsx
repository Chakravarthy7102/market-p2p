import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="relative flex justify-center bg-transparent pb-5">
      <SearchIcon className="absolute left-8 ml-2 top-2 text-gray-600" />
      <input
        className="py-2 px-12 focus:outline-none rounded-2xl border-2 border-purple-600/70 w-[90%] bg-transparent placeholder:text-gray-600 text-sm"
        placeholder="Search Token eg. ETH, GOLD etcI"
      />
    </div>
  );
}
