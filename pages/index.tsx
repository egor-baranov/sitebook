import styles from './index.module.css'
import {MainLayout} from "../components/Layout"
import clsx from "clsx";
import React, {ReactNode, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {RowCard} from "../components/RowCard";
import {Pill} from "../components/Pill";
import {SearchBar} from "../components/SearchBar";
import {sites} from "../data/sites";

// @ts-ignore
const Home: React.FC = () => {

    const [searchInput, setSearchInput] = useState("");

    function getWindowSize() {
        if (typeof window !== "undefined") {
            const {innerWidth, innerHeight} = window;
            return {innerWidth, innerHeight};
        }

        return {innerWidth: 0, innerHeight: 0};
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const isMobile = windowSize.innerWidth <= 800

    function group(title: string) {
        const values = Array
            .from(sites)
            .filter(v =>
                v.link.toLowerCase().includes(searchInput.toLowerCase())
                || v.title.toLowerCase().includes(searchInput.toLowerCase())
                || searchInput.length == 0
            ).filter(v => v.category == title)
            .sort(
                (a, b) => {
                    if (a.title < b.title) {
                        return -1;
                    }
                    if (a.title > b.title) {
                        return 1;
                    }
                    return 0;
                }
            )

        if (values.length == 0) {
            return (<div/>)
        }

        return (
            <div className={isMobile ? "py-4 px-0" : "py-4 px-32"}>
                <div className="flex flex-row">
                    <h1 className="text-3xl font-bold mr-2"> {title} </h1>
                    <div className="pt-2"> <Pill label={values.length.toString()}/> </div>
                </div>

                {
                    values.map(
                        (v) =>
                            (<RowCard key={v.link} title={v.title} link={v.link} labels={v.labels}/>))
                }
            </div>
        )
    }

    const handleChange = (e: { preventDefault: () => void; target: { value: React.SetStateAction<string>; }; }) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    return (
        <div className="mt-32">
            <SearchBar isMobile={isMobile} inputHandler={handleChange} searchInput={searchInput}/>

            <MainLayout>
                {Array.from(new Set(Array.from(sites).map(v => v.category)).values()).sort().map(v => group(v))}
            </MainLayout>
        </div>

    )
}

export default Home