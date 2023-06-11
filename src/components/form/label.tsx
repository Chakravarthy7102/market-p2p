import classNames from "classnames";

export default function Label({
  className,
  ...props
}: JSX.IntrinsicElements["label"]) {
  return (
    <label
      {...props}
      className={classNames(
        "text-sm font-semibold my-2 text-gray-400",
        className
      )}
    />
  );
}
