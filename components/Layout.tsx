import clsx from "clsx"
import React, { ReactNode } from "react"
import { HeaderSpacer } from "./HeaderLayout"

export const MainLayout: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => {
    return (
        <main className={clsx("max-w-full mx-auto pt-4 px-8 min-h-[80%]", className)}>
            {/*<HeaderSpacer />*/}
            {children}
        </main>
    )
}