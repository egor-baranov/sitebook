import React from "react";

export const Pill: React.FC<{
    label: string,
}> =
    ({label}) => {
        return ( // todo: cursor-pointer on click callback != null
            <div className="flex flex-row min-w-0 items-center bg-gray-200 rounded-full mr-2 px-2 h-[24px] cursor-default">
                <p
                    className="flex flex-auto text-xs text-gray-500 dark:text-gray-500 text-center px-1">
                    {label}
                </p>
            </div>
        )
    }