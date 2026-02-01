import { Link } from "react-router-dom"
import Navbar from "./Navbar"

export default function LevotinWordPageSkeleton() {

    const randomLength = Math.floor(Math.random() * 100) + 1
    console.log(randomLength)

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-stretch mt-2 gap-2 mx-auto max-w-11/12 md:max-w-[min(98vw,1500px)]">
                <div className="flex flex-row gap-2 mt-2">
                    <Link to="/Lutinex/dictionary">
                        <img src="https://zhyov.github.io/Lutinex/assets/icon/back.svg" alt="back" className="size-10 p-3 rounded-md invert transition-colors hover:bg-neutral-300" />
                    </Link>
                    <span className="text-4xl rounded-full bg-neutral-700 animate-pulse w-28 h-10"></span>
                </div>
                <div className="shadow-sm flex-1 flex flex-wrap flex-col border-2 gap-1 border-cardborder bg-cardbg w-auto rounded-md duration-100">
                    <div className="flex flex-col space-y-1">
                        <div className="flex flex-row w-full mb-1 pt-4 px-4">
                            <div className="flex flex-row min-w-max rounded-full bg-neutral-700 animate-pulse w-34 h-10"></div>
                        </div>
                        <span className="bg-cardborder h-0.5 w-full my-4"></span>
                        <span className="w-full text-2xl px-4">Broad Definition</span>
                        <span className="text-[16px] rounded-full bg-neutral-700 animate-pulse w-40 h-5 mx-4"></span>
                        <span className="bg-cardborder h-0.5 w-full my-4"></span>
                        <span className="w-full text-xl flex flex-row gap-x-2 items-center px-4">Morpheme type: <span className="rounded-full bg-neutral-700 animate-pulse w-20 h-6"></span></span>
                        <span className="text-xl rounded-full bg-neutral-700 animate-pulse w-50 h-6 m-4"></span>
                    </div>
                </div>
            </div>
        </>
    )
}