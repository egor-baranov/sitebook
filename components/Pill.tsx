import React from "react";

export const Pill: React.FC<{
    label: string,
}> =
    ({label}) => {
        return (
            <div className="flex flex-row min-w-0 items-center bg-gray-200 rounded-full mr-2 px-2 py-0.5 h-[32px] cursor-pointer">
                <p
                    className="flex flex-auto text-gray-500 dark:text-gray-500 text-center px-2">
                    {label}
                </p>
            </div>
        )
    }