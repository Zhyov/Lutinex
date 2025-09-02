import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Navbar({ gridEnabled, searchEnabled, filterEnabled, search, setSearch, gridCols, setGridCols, setFilterParam }) {

    const hideOrNot = searchEnabled ? "hidden md:block" : "block"
    const changeGrid = gridEnabled ? "hidden md:block" : "hidden"
    const changeFilter = filterEnabled ? "hidden md:block" : "hidden"
    const allFilters = ["general", "special", "replaceable", "combination"]
    const [openMenu, setOpenMenu] = useState(null)
    const [activeFilters, setActiveFilters] = useState([...allFilters])
    const menuRef = useRef(null)
    const filterValues = {
        general: 1,
        special: 2,
        replaceable: 4,
        combination: 8
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(null)
            }
        }

        if (openMenu) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }

        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [openMenu])

    function getHexFromFilters(activeFilters) {
        if (activeFilters.length === 0) {
            return "0"
        }
        const sum = activeFilters.reduce((acc, f) => acc + (filterValues[f] || 0), 0)
        return sum.toString(16)
    }

    const toggleFilter = (filterName) => {
        setActiveFilters(prev => {
            if (prev.includes(filterName)) {
                return prev.filter(f => f !== filterName)
            } else {
                return [...prev, filterName]
            }
        })
    }

    useEffect(() => {
        if (setFilterParam) {
            const hex = getHexFromFilters(activeFilters)
            setFilterParam(hex)
        }
    }, [activeFilters])

    return (
        <nav className="p-4 h-18 sticky top-0 z-1 backdrop-blur flex flex-nowrap flex-row justify-center items-center w-full bg-dark/40 shadow-md border-b-1 border-b-neutral-800" >
            <div className="flex flex-nowrap flex-row basis-auto gap-x-1 items-center mr-0 md:mr-auto">
                <Link to="/Lutinex/">
                    <img src="https://zhyov.github.io/Lutinex/assets/title.svg" alt="logo" className="size-16 mr-4 invert" />
                </Link>
                <Link to="/Lutinex/" className={hideOrNot}>
                    <div className="flex flex-nowrap flex-row gap-x-2 p-2 rounded-md items-center transition-colors hover:bg-neutral-800 hover:*:invert-0">
                        <img src="https://zhyov.github.io/Lutinex/assets/icon/home.svg" alt="home" className="size-4 invert-50" />
                        <span className="text-[16px] text-white invert-50">Home</span>
                    </div>
                </Link>
                <Link to="/Lutinex/language/dictionary" className={hideOrNot}>
                    <div className="flex flex-nowrap flex-row gap-x-2 p-2 rounded-md items-center transition-colors hover:bg-neutral-800 hover:*:invert-0">
                        <img src="https://zhyov.github.io/Lutinex/assets/icon/dictionary.svg" alt="dictionary" className="size-4 invert-50" />
                        <span className="text-[16px] text-white invert-50">Dictionary</span>
                    </div>
                </Link>
                <Link to="/Lutinex/language/about" className={hideOrNot}>
                    <div className="flex flex-nowrap flex-row gap-x-2 p-2 rounded-md items-center transition-colors hover:bg-neutral-800 hover:*:invert-0">
                        <img src="https://zhyov.github.io/Lutinex/assets/icon/about.svg" alt="about" className="size-4 invert-50" />
                        <span className="text-[16px] text-white invert-50">About</span>
                    </div>
                </Link>
                <Link to="/Lutinex/country/stocks" className={hideOrNot}>
                    <div className="flex flex-nowrap flex-row gap-x-2 p-2 rounded-md items-center transition-colors hover:bg-neutral-800 hover:*:invert-0">
                        <img src="https://zhyov.github.io/Lutinex/assets/icon/stocks.svg" alt="stocks" className="size-4 invert-50" />
                        <span className="text-[16px] text-white invert-50">Stocks</span>
                    </div>
                </Link>
            </div>
            {
                searchEnabled
                ? <div className="flex flex-nowrap flex-row basis-6/10 gap-x-2 justify-end">
                    <div>
                        <button onClick={() => setOpenMenu(openMenu === "filter" ? null : "filter")} className={`flex flex-nowrap flex-row p-3 rounded-md ring-1 ring-neutral-800 items-center transition-colors hover:bg-neutral-800 hover:cursor-pointer hover:*:invert-0 ${changeFilter}`}>
                            <img src="https://zhyov.github.io/Lutinex/assets/icon/filter.svg" alt="filter" className="size-4 invert-50" />
                        </button>
                        {openMenu === "filter" && (
                            <div className="absolute -translate-x-3/8 translate-y-16 flex flex-nowrap flex-col items-center top-0 rounded-sm ring-1 w-40 ring-neutral-800 bg-dark">
                                <span className="font-[600] px-2 py-1.5">Search Filter</span>
                                <span className="bg-neutral-800 h-0.5 w-full"></span>
                                <div className="flex flex-nowrap flex-col w-full">
                                    <button onClick={() => toggleFilter("general")} className="hover:bg-neutral-800 relative w-auto justify-start items-center rounded-sm m-0.5 py-1.5 pl-4 pr-2 gap-x-3 cursor-pointer outline-none text-sm flex flex-nowrap flex-row">
                                        <span className="flex size-3.5 items-center">
                                            <svg className={`size-4 ${activeFilters.includes("general") ? "opacity-100" : "opacity-0"}`} viewBox="0 0 24 24" width="1.2em" height="1.2em">
                                                <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>general
                                    </button>
                                    <button onClick={() => toggleFilter("special")} className="hover:bg-neutral-800 relative w-full justify-start items-center rounded-sm py-1.5 pl-4 pr-2 gap-x-3 cursor-pointer outline-none text-sm flex flex-nowrap flex-row">
                                        <span className="flex size-3.5 items-center">
                                            <svg className={`size-4 ${activeFilters.includes("special") ? "opacity-100" : "opacity-0"}`} viewBox="0 0 24 24" width="1.2em" height="1.2em">
                                                <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>special
                                    </button>
                                    <button onClick={() => toggleFilter("replaceable")} className="hover:bg-neutral-800 relative w-full justify-start items-center rounded-sm py-1.5 pl-4 pr-2 gap-x-3 cursor-pointer outline-none text-sm flex flex-nowrap flex-row">
                                        <span className="flex size-3.5 items-center">
                                            <svg className={`size-4 ${activeFilters.includes("replaceable") ? "opacity-100" : "opacity-0"}`} viewBox="0 0 24 24" width="1.2em" height="1.2em">
                                                <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>replaceable
                                    </button>
                                    <button onClick={() => toggleFilter("combination")} className="hover:bg-neutral-800 relative w-full justify-start items-center rounded-sm py-1.5 pl-4 pr-2 gap-x-3 cursor-pointer outline-none text-sm flex flex-nowrap flex-row">
                                        <span className="flex size-3.5 items-center">
                                            <svg className={`size-4 ${activeFilters.includes("combination") ? "opacity-100" : "opacity-0"}`} viewBox="0 0 24 24" width="1.2em" height="1.2em">
                                                <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>combination
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        <button onClick={() => setOpenMenu(openMenu === "grid" ? null : "grid")} className={`flex flex-nowrap flex-row p-3 rounded-md ring-1 ring-neutral-800 items-center transition-colors hover:bg-neutral-800 hover:cursor-pointer hover:*:invert-0 ${changeGrid}`}>
                            <img src="https://zhyov.github.io/Lutinex/assets/icon/grid.svg" alt="grid" className="size-4 invert-50" />
                        </button>
                        {openMenu === "grid" && (
                            <div className="absolute -translate-x-3/8 translate-y-16 flex flex-nowrap flex-col items-center top-0 rounded-sm ring-1 w-40 ring-neutral-800 bg-dark">
                                <span className="font-[600] px-2 py-1.5">Grid View</span>
                                <span className="bg-neutral-800 h-0.5 w-full"></span>
                                <div className="flex flex-nowrap flex-col w-full">
                                    <button disabled={gridCols === 1} onClick={() => setGridCols(1)} className="hover:bg-neutral-800 relative w-full justify-start items-center rounded-sm py-1.5 pl-4 pr-2 gap-x-3 cursor-pointer outline-none text-sm flex flex-nowrap flex-row">
                                        <span className="flex size-3.5 items-center">
                                            <span className={`${gridCols === 1 ? "" : "hidden"}`}>∘</span>
                                        </span>one
                                    </button>
                                    <button disabled={gridCols === 2} onClick={() => setGridCols(2)} className="hover:bg-neutral-800 relative w-full justify-start items-center rounded-sm py-1.5 pl-4 pr-2 gap-x-3 cursor-pointer outline-none text-sm flex flex-nowrap flex-row">
                                        <span className="flex size-3.5 items-center">
                                            <span className={`${gridCols === 2 ? "" : "hidden"}`}>∘</span>
                                        </span>two
                                    </button>
                                    <button disabled={gridCols === 3} onClick={() => setGridCols(3)} className="hover:bg-neutral-800 relative w-full justify-start items-center rounded-sm py-1.5 pl-4 pr-2 gap-x-3 cursor-pointer outline-none text-sm flex flex-nowrap flex-row">
                                        <span className="flex size-3.5 items-center">
                                            <span className={`${gridCols === 3 ? "" : "hidden"}`}>∘</span>
                                        </span>three
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-nowrap flex-row">
                        <input type="text" placeholder="Oliňazä amijąç'maka" className="w-full md:w-auto focus:ring-2 placeholder:text-neutral-400 self-center pl-3 pr-3 pt-1.5 pb-1.5 align-middle rounded-md ring-1 ring-neutral-800 text-lg" value={search} onChange={element => setSearch(element.target.value)} />
                    </div>
                </div> 
                : <></>
            }
        </nav>
    )
}