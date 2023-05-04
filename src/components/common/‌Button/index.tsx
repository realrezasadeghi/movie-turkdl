import classNames from "classnames";
import React, { PropsWithChildren, ReactNode } from "react";

import Loading from "../Loading";

type TButtonProps = PropsWithChildren & {
    iconOnly?: boolean
    label?: string | null;
    color?: string;
    circle?: boolean
    variant?: number;
    className?: string;
    disabled?: boolean;
    isLoading?: boolean;
    endIcon?: ReactNode;
    startIcon?: ReactNode;
    type?: 'button' | 'submit' | 'reset'
}

export default function Button({ disabled, children, endIcon, className, isLoading, circle, color = 'gray', variant = 500, label, startIcon, iconOnly, type = 'button' }: TButtonProps) {
    const classNameRoot = classNames("rounded hover:opacity-80 p-2 w-20", className, `bg-${color}-${variant}`, {
        'opacity-50 cursor-stop': disabled,
        'rounded-full': circle
    });

    return (
        <button className={classNameRoot} disabled={disabled || isLoading} type={type}>
            <div className="flex items-center justify-center">
                {isLoading ? (
                    <Loading />
                ) : (
                    <React.Fragment>
                        {!iconOnly ? <span className="dark:text-white text-sm">{label}</span> : null}
                    </React.Fragment>
                )}
            </div>
        </button>
    )
}