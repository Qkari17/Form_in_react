import { type ComponentProps } from "react";
import {clsx} from "clsx"

type Props = {
    label : string;
} & ComponentProps<"button">;

export const Button = ({label, className, ...rest}:Props) => {
    return <button className={clsx("px 4 py-2 text-white text-xl bg-amber-500 w-20 rounded-3xl hover:bg-amber-600 border border-black border-2", className)}{...rest}>{label}</button>
}