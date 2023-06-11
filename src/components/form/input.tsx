import classNames from "classnames";

export default function Input({
  className,
  ...props
}: JSX.IntrinsicElements["input"]) {
  return (
    <input
      {...props}
      className={classNames(
        "bg-gray-950 py-2 px-3 rounded-2xl text-zinc-200 focus:outline-none focus:outline-violet-600/75",
        className
      )}
    />
  );
}
