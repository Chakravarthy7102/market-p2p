import { HelpCircle, RefreshCcw, Users } from "lucide-react";

import Chip from "./chip";
import Button from "./button";

export default function Card() {
  return (
    <div className="bg-gray-900 p-5 rounded-lg max-w-xl border-[0.5px] border-zinc-800 space-y-7">
      <div className="flex justify-between">
        <Chip text="Most Played" />
        <HelpCircle className="text-zinc-500 hover:text-zinc-300 cursor-pointer" />
      </div>
      <div className="flex justify-between">
        <Users className="h-16 w-16" />
        <RefreshCcw className="h-16 w-16 text-purple-600" />
        <Users className="h-16 w-16" />
      </div>
      <div className="space-y-2">
        <span className="text-md font-bold text-zinc-200 mt-7">
          Multi-user Lot
        </span>
        <p className="text-zinc-400 text-sm">
          In this lot multiple people will bet against you. The condition for
          the lot to start is both sides should have equal funds.
        </p>
      </div>
      <Button>Create lot</Button>
    </div>
  );
}
