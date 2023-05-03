import React from "react"

export const SearchBar: React.FC<{isMobile: boolean, inputHandler: any, searchInput: any}> = ({isMobile, inputHandler, searchInput}) => {

    return (

        <form className={isMobile ? "w-full bg-white": "w-full bg-white pr-32 pl-72" }>
            {/*<label htmlFor="default-search"*/}
            {/*       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>*/}
            <div className={isMobile ? "relative w-full justify-center" : "relative w-full justify-center"}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input type="search" id="default-search"
                       onChange={inputHandler}
                       value={searchInput}
                       className="block w-full my-4 py-3 px-4 pl-10 focus:outline-0 text-base text-gray-900 rounded-full bg-gray-50 dark:bg-gray-50 dark:placeholder-gray-500 dark:text-gray-900"
                       placeholder="Search" required>

                </input>
            </div>
        </form>
    )
}