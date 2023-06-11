import classNames from "classnames";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  color?: "primary" | "secondary";
};

const Button = ({ className, color, children, ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(
        "bg-primary-graident text-sm text-center w-full px-4 py-2 rounded-xl font-bold hover:opacity-70",
        className,
        {
          "!bg-none border-[0.5px] border-zinc-700": color === "secondary",
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
