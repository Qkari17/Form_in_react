import clsx from "clsx";
import { ComponentPropsWithRef, forwardRef, Ref, useId } from "react";
import { FieldError } from "react-hook-form";

type Props = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ label, error, ...rest }: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <div className="flex flex-col">
        <label className="mb-1 text-zinc-400" htmlFor={id}>{label}</label>
        <input
          id={id}
          ref={ref}
          {...rest}
          className={clsx({
            " border-2 border-red-500 bg-zinc-600 text-white pl-2 rounded-lg ring-red-300 placeholder:text-red-300 focus:ring-red-500 ":
              error,
            "border-2 border-zinc-500 bg-zinc-600 text-white pl-2 rounded-lg autofill:bg-zinc-600": !error,
          })}
        ></input>
        {error && <p className="text-red-500"> {error?.message}</p>}
      </div>
    );
  }
);
