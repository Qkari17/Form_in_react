import clsx from "clsx";

type Props = {
  children: string;
  className?: string;
};

export const Text = ({ children, className }: Props) => {
  const baseClass = "";
  return <p className={clsx(baseClass, className)}>{children}</p>;
};
