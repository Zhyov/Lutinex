import { useEffect } from "react"
import Navbar from "./Navbar"

export default function Home() {
    useEffect(() => {
        document.title = "Lötinäç"
    })

    return (
        <div className="relative mx-auto p-0 flex flex-col min-h-dvh">
            <Navbar gridEnabled={false} searchEnabled={false} filterEnabled={false} />
            <main className="flex flex-col justify-center items-center border-neutral-800 rounded-sm gap-4 my-auto min-h-full">
                <h1 className="text-4xl font-[600]">Lötinäç / Λυτινεχ</h1>
                <p className="text-center w-[65%]">Lötinäç / Λυτινεχ is a fictional country made for a Minecraft world. Äšakap and Ληβοτιν are conlangs created by <a href="https://github.com/Zhyov" className="underline">Zhyov</a> for this nation.<br />This is an app made with the purpose of displaying information about the nation and its languages, primarily the latter.</p>
                <ul className="flex flex-col gap-2 items-center w-[65%]">
                    <a href="https://github.com/Zhyov/Lutinex" className="flex flex-nowrap flex-row gap-x-2 p-2 rounded-md items-center transition-colors hover:bg-neutral-800 hover:*:invert">
                        <img src="https://zhyov.github.io/Lutinex/assets/icon/github.svg" alt="github" className="size-4 invert-50" />
                        <span className="text-[16px] text-neutral-950 invert-50">Website's GitHub</span>
                    </a>
                    <a href="https://github.com/Zhyov/LutinexAPI" className="flex flex-nowrap flex-row gap-x-2 p-2 rounded-md items-center transition-colors hover:bg-neutral-800 hover:*:invert">
                        <img src="https://zhyov.github.io/Lutinex/assets/icon/github.svg" alt="github" className="size-4 invert-50" />
                        <span className="text-[16px] text-neutral-950 invert-50">API's GitHub</span>
                    </a>
                </ul>
            </main>
        </div>
    )
}