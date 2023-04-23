import {MainLayout} from "../components/Layout"
import React, {useEffect, useState} from "react";
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

    function items(title: string | null) {
        return Array
            .from(sites)
            .filter(v =>
                v.link.toLowerCase().includes(searchInput.toLowerCase())
                || v.title.toLowerCase().includes(searchInput.toLowerCase())
                || searchInput.length == 0
            ).filter(v => v.category == title || title === null)
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
    }

    function group(title: any, values: any) {
        return (
            <div className={isMobile ? "py-4" : "py-4"}>
                <div className="flex flex-row">
                    <h1 className="text-3xl font-bold mr-2"> {categoryEmoji.get(title)!! + " " + title} </h1>
                    <div className="pt-2"><Pill label={values.length.toString()}/></div>
                </div>

                {
                    values.map(
                        (v: any) =>
                            (<RowCard key={v.link} title={v.title} link={v.link} labels={v.labels}/>))
                }
            </div>
        )
    }

    const handleChange = (e: { preventDefault: () => void; target: { value: React.SetStateAction<string>; }; }) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const categoryEmoji = new Map<string, string>([
        ["Software Design", "👨‍💻"],
        ["AI", "🤖"],
        ["UI/UX", "🎨"],
        ["Crypto", "💵"],
        ["Tech", "💻"],
        ["Productivity", "🧰"],
        ["Other", "🍔"]
    ]);

    const displayValues = Array.from(
        categoryEmoji.keys()
    ).map(v => [v, items(v)])
        .filter(v => v[1].length > 0)

    return (
        <div className="mt-32">
            <SearchBar isMobile={isMobile} inputHandler={handleChange} searchInput={searchInput}/>

            <MainLayout className={isMobile ? "mx-4" : "mx-16"}>
                {
                    displayValues.length > 0 ?
                        <div className={isMobile ? "grid grid-cols-1" : "grid grid-cols-2 gap-8"}>
                            {displayValues.map(v => group(v[0], v[1]))}
                        </div>
                        : <div className="text-3xl font-bold mr-2 flex flex-col items-center justify-center">
                            Nothing was found, try another query
                        </div>
                }
            </MainLayout>
        </div>

    )
}

export default Home