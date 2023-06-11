import classNames from "classnames";

export default function Input({
  className,
  ...props
}: JSX.IntrinsicElements["input"]) {
  return (
    <input
      {...props}
      className={classNames(
        "bg-gray-900 px-4 py-2 rounded-2xl text-zinc-200 focus:outline-none focus:outline-violet-600/75",
        className
      )}
    />
  );
}
