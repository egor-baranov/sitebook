import styles from './index.module.css'
import {MainLayout} from "../components/Layout"
import clsx from "clsx";
import React, {ReactNode, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {RowCard} from "../components/RowCard";

// @ts-ignore
const Home: React.FC = () => {

    function group(title: string) {
        return (
            <div className="py-8">
                <h1 className="text-3xl mb-4 pt-8 font-bold"> {title} </h1>
                <RowCard title={"Craftwork: UX/UI kits, illustrations, mockups, fonts and more"}
                         link={"https://craftwork.design/"}/>
                <RowCard title={"Intercom: The best of automation and human customer service"}
                         link={"https://www.intercom.com/"}/>
                <RowCard title={"Ocho - Building Wealth for Business Owners"}
                         link={"https://ocho.com/"}/>
                <RowCard title={"Blockchain Security & Smart Contract Auditing Services"}
                         link={"https://mixbytes.io/"}/>
                <RowCard title={"WE3. Web3 designers for ambitious startups"}
                         link={"https://we3.co/"}/>
                <RowCard title={"Intercom: The best of automation and human customer service"}
                         link={"https://www.intercom.com/"}/>
            </div>
        )
    }

    return (
        <MainLayout>

            {group("Software Design")}
            {group("Crypto")}
            {group("UI/UX")}

        </MainLayout>
    )
}

export default Home