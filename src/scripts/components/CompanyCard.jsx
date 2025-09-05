import DataItem from "./DataItem"
import { Link } from "react-router-dom"

export default function CompanyCard({ companyData }) {
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

    const owners = companyData.shares_data.map(share => {
        return (
            share.is_user === false ? null : (
                <li key={crypto.randomUUID()} className="text-lg font-normal">
                    <span className="font-[600]">{formatNumber(share.shares)}</span> shares from <Link to={`/Lutinex/users/${share.owner_username}`} className="font-[600] text-blue-500 hover:underline">{share.owner_name}</Link>{share.owner !== share.owner_name ? (<span> as <span className="font-[600]">{share.owner}</span></span>) : ""}
                </li>
            )
        )
    })

    return (
        <div className="flex flex-col items-stretch mt-2 mb-2 gap-2 mx-auto max-w-11/12 md:max-w-[min(98vw,1500px)]">
            <div className="shadow-sm flex-1 flex flex-wrap flex-col justify-center ring-2 ring-cardborder bg-cardbg rounded-md">
                <div className="flex flex-col p-4 pb-0">
                    <span className="text-2xl font-[600] text-white">{companyData.company.name} ({companyData.company.code})</span>
                </div>
                <span className="bg-cardborder h-0.5 w-full my-4"></span>
                <div className="flex flex-col gap-2 min-w-full md:min-w-0 max-w-3/8 px-4">
                    <span className="text-xl font-bold text-neutral-500">Share price: <span className="font-normal text-white">${companyData.company.price}</span></span>
                    <DataItem stockData={companyData} />
                </div>
                <span className="bg-cardborder h-0.5 w-full my-4"></span>
                <div className="p-4 pt-0">
                    <span className="text-xl font-bold text-neutral-500">Share Ownerships:</span>
                    <div>
                        {owners}
                    </div>
                </div>
            </div>
         </div>
    )
}