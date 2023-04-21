import {
    Add,
    Close,
    Favorite,
    FavoriteBorder, OpenInBrowser, OpenInFull, OpenInNew, OpenInNewOutlined,
    Remove,
    Search,
    ShoppingBagOutlined,
    ShoppingCart
} from "@mui/icons-material"
import clsx from "clsx"
import Image from "next/image"
import React, {ReactNode, useState} from "react"
import {Button} from "@mui/material";
import {useRouter} from "next/router";
import {color} from "@mui/system";

export const RowCard: React.FC<{
    title: string, link: string,
}> =
    ({title, link}) => {
        const router = useRouter()

        function openProduct() {
            router.push("/product/")
        }

        return (
            <div
                className="px-2 py-4 my-4 max-w-2xl bg-gray-100 border border-gray-100 rounded-[16px] flex items-center">

                <div className="flex-1 min-w-0 px-4 items-start">

                    <p className="mb-1 font-bold text-gray-900 dark:text-gray-900 text-left">
                        {title}

                    </p>

                    <p className="mb-1 font-normal text-gray-400 dark:text-gray-900 text-left">
                        {link}
                    </p>
                </div>

                <div className="flex flex-col self-stretch min-w-0 items-end pr-1">
                    <div className="flex flex-col">
                        <a className="leading-none hover:bg-gray-100 flex-shrink-0 mb-4 cursor-pointer">
                            <FavoriteBorder/>
                        </a>

                        <a className="leading-none hover:bg-gray-100 flex-shrink-0 cursor-pointer" onMouseDown={() => router.push(link)}>
                            <OpenInNewOutlined/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }