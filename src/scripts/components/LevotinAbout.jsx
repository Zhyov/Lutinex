import { useEffect } from "react"
import WordBox from "./WordBox"
import Navbar from "./Navbar"

export default function LevotinAbout() {
    useEffect(() => {
        document.title = "Ληβοτιν · About"
    })

    return (
        <>
            <Navbar gridEnabled={false} searchEnabled={false} filterEnabled={false} />
            <div className="flex flex-col items-stretch mt-2 mb-2 gap-2 mx-auto w-full max-w-[min(95vw,1500px)] md:max-w-[min(68vw,1500px)]">
                <div className="shadow-sm flex-1 flex flex-wrap border-0 md:border-2 gap-4 md:border-cardborder bg-dark md:bg-cardbg rounded-md duration-100 p-4 *:w-full">
                    In progress!
                </div>
            </div>
        </>
    )
}