export default function Chip({ text }: { text: string }) {
  return (
    <span className="px-3 py-1 text-center text-zinc-300 font-semibold text-xs bg-black border-[0.5px] border-zinc-700 rounded-xl">{text}</span>
  );
}
