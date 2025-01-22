import { type ComponentProps } from "react";
import {clsx} from "clsx"

type Props = {
    label : string;
} & ComponentProps<"button">;

export const Button = ({label, className, ...rest}:Props) => {
    return <button className={clsx("px 4 py-2 text-white bg-yellow-400", className)}{...rest}>{label}</button>
}