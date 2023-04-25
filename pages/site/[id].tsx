import {MainLayout} from "../../components/Layout";
import {useRouter} from "next/router";
import {sites} from "../../data/sites";
import React, {useEffect, useState} from "react";
import {SearchBar} from "../../components/SearchBar";

const Page: React.FC = () => {

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

    const router = useRouter()

    const {id} = router.query
    const site = sites.find(v => v.name.toLowerCase().split(" ").join("-") == id)

    if (!site) {
        return <MainLayout>
            <div className="text-xl font-semibold mr-2 flex flex-col items-center justify-center">
                404: wrong page
            </div>
        </MainLayout>
    }

    return (
        <div>
            <div className={isMobile ? "mt-32 px-4" : "mt-32 px-16"}>

                {/*<SearchBar isMobile={isMobile} inputHandler={() => {*/}
                {/*}} searchInput={searchInput}/>*/}

                <MainLayout>
                    <div className={ isMobile ? "mx-4" : "mx-32" }>

                        <h1 className="text-xl font-regular mr-2 mb-2 text-gray-500">
                            {site.category}
                        </h1>

                        <h1 className="text-4xl font-bold mr-2 mb-8 text-gray-700">
                            {site.name}
                        </h1>

                        <h1 className="text-6xl font-semibold mr-2 mb-4">
                            {site.title}
                        </h1>

                        <h1 className="text-2xl font-regular mr-2 text-gray-500 cursor-pointer"
                            onClick={() => router.push(site.link)
                        }>
                            {site.link}
                        </h1>
                    </div>
                </MainLayout>
            </div>

            {isMobile ? <div/> : <div className="fixed top-4 pl-8 flex flex-row items-start">

                <a href={"https://thenavigator.tech"}
                   className="mb-1 text-xl font-bold text-gray-900 dark:text-gray-900 text-left py-3 pl-8">
                    The navigator
                </a>

                <a href={"https://kepler88d.dev"}
                   className="mb-1 text-xl font-thin text-gray-900 dark:text-gray-900 text-left py-3 pl-2">
                    by kepler88d
                </a>
            </div>}
        </div>
    )
}

export default Page