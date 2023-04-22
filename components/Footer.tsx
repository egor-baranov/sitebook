import {
    Favorite,
    FavoriteBorder,
    Instagram,
    Search,
    ShoppingBagOutlined,
    ShoppingCart,
    Telegram
} from "@mui/icons-material"
import "@mui/material/utils"
import clsx from "clsx"
import Link from "next/link"
import React, { ReactNode } from "react"
import styles from "./Footer.module.css"
import {MobileNavBar} from "./MobileNavBar"
import colors from "tailwindcss/colors"

export const Footer: React.FC = () => {
    const color = colors.white

    return (
        <div className={clsx("w-full fixed bg-gray-100 min-h-[10%]", styles.footer)}>
            <div className="mx-auto max-w-2xl flex flex-row overflow-auto pr-2">
                <a className="flex-1 text-gray-500 text-medium flex-shrink-0 rounded-lg">
                    made by kepler88d
                </a>

                {/*<Link href={""}>*/}
                {/*    <a className="absolute bottom-0 right-8 mx-auto leading-none text-black flex-shrink-0">*/}
                {/*        <Instagram fontSize="medium" sx={{ color: {color} }}/>*/}
                {/*    </a>*/}
                {/*</Link>*/}

                {/*<Link href={""}>*/}
                {/*    <a className="absolute bottom-0 right-0 mx-auto leading-none text-black flex-shrink-0">*/}
                {/*        <Telegram fontSize="medium" sx={{ color: {color} }}/>*/}
                {/*    </a>*/}
                {/*</Link>*/}

            </div>
        </div>
    )
}