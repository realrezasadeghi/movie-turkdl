import classNames from "classnames";
import { PropsWithChildren } from "react";

type TBoxProps = PropsWithChildren & {
    className?: string
}

export default function Box({ children, className }: TBoxProps) {
    const rootClassName = classNames("w-full border border-gray-300 dark:border-gray-700 rounded-md p-4", className)
    return (
        <div className={rootClassName}>
            {children}
        </div>
    )
}