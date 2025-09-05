import { Link } from "react-router-dom"

export default function UserCard({username, displayname, networth}) {
    function formatNumber(num) {
        if (num === undefined || num === null || isNaN(num)) return "0"
        if (num === 0) return "0"
        const suffixes = ["", "K", "M", "B", "T"]
        let i = 0
        while (num >= 1000 && i < suffixes.length - 1) {
            num /= 1000
            i++
        }
        return `${parseFloat(num.toFixed(num % 1 === 0 ? 0 : 2))}${suffixes[i]}`
    }

    return (
        <li>
            <div className={`shadow-sm flex-1 flex flex-wrap flex-col border-2 gap-1 hover:ring-cardbglight hover:bg-cardbglight bg-cardbg border-cardborder w-auto rounded-md duration-100`}>
                <Link to={`/Lutinex/users/${username}`} className="flex-1">
                    <div className="flex flex-row justify-between space-y-1 p-2">
                        <span className="text-2xl">{displayname} <span className="text-xl text-neutral-500">@{username}</span></span>
                        <span className="text-2xl">${formatNumber(networth)}</span>
                    </div>
                </Link>
            </div>
        </li>
    )
}