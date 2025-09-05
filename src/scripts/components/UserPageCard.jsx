import { useNavigate, Link } from "react-router-dom"

export default function UserPageCard({ userData, specifiedUsername}) {
    const token = localStorage.getItem("token")
    const user = JSON.parse(localStorage.getItem("user"))

    const navigate = useNavigate()
    
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

    const logOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate(`/Lutinex/users/${specifiedUsername}`)
    }

    const stockHoldings = Array.isArray(userData.stocks) ? (userData.stocks.length === 0) ? "No stock holdings" : userData.stocks.map(stock => (
        <li key={crypto.randomUUID()} className="text-lg font-normal">
            <span className="font-[600]">${formatNumber(stock.current_value)}</span> as <span className="font-[600]">{formatNumber(stock.shares_owned)} shares</span> of <Link to={`/Lutinex/companies/${stock.code}`} className="font-[600] text-blue-500 hover:underline">${stock.code}</Link>
        </li>
    )) : null

    const managementCompany = userData.own_company ? userData.own_company : "None"

    return (
        <div className="flex flex-col items-stretch my-2 gap-2 mx-auto max-w-11/12 md:max-w-[min(98vw,1500px)]">
            <div className="shadow-sm flex-1 flex flex-wrap flex-col justify-center ring-2 ring-cardborder bg-cardbg rounded-md">
                <div className="flex flex-col gap-1 p-4 pb-0">
                    <span className="text-2xl font-[600] text-white">{userData.name}</span>
                    <span className="text-xl text-neutral-500">@{userData.username}</span>
                    <span className="text-xl text-neutral-500 font-[600] mt-4">Investment management company: <span className="text-white font-normal">{managementCompany}</span></span>
                </div>
                <span className="bg-cardborder h-0.5 w-full my-4"></span>
                <div className="px-4">
                    <span className="text-xl font-bold text-neutral-500">Balance: <span className="font-normal text-white">${formatNumber(userData.balance + userData.in_shares)}</span></span>
                    <ul className="list-disc list-inside gap-0 mt-0">
                        <li className="text-lg font-bold text-neutral-500">Savings: <span className="font-normal text-white">${formatNumber(userData.balance)}</span></li>
                        <li className="text-lg font-bold text-neutral-500">Stocks: <span className="font-normal text-white">${formatNumber(userData.in_shares)}</span></li>
                    </ul>
                </div>
                <span className="bg-cardborder h-0.5 w-full my-4"></span>
                <div className="p-4 pt-0">
                    <span className="text-xl font-bold text-neutral-500">Stock Holdings:</span>
                    <div className="max-h-48 overflow-y-auto">
                        {stockHoldings}
                    </div>
                </div>
                {
                    token && user.username === specifiedUsername ? (
                        <button onClick={logOut} className="m-4 w-max border-2 rounded-sm p-1.5 cursor-pointer text-sm transition-colors bg-cardbglight border-cardborderlight hover:bg-cardbgslight hover:border-cardborderslight">
                            Log Out
                        </button>
                    ) : null
                }
            </div>
        </div>
    )
}