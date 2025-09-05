import { Link } from "react-router-dom"
import DataItem from "./DataItem"

export default function StockCard({ name, code, price, previousPrice, percentPrice, stockData }) {
    return (
        <div className="shadow-sm flex-1 flex flex-nowrap flex-col gap-2 border-2 border-cardborder bg-cardbg rounded-md duration-100">
            <span className="text-2xl font-[600] px-4 py-2 mt-2">{name} (<Link to={`/Lutinex/companies/${code}`} className="text-blue-500 hover:underline">{code}</Link>)</span>
            <span className="bg-cardborder h-0.5 w-full"></span>
            <span className="text-2xl font-[700] px-4">${price} <span className={`text-xl ${price - previousPrice === 0 ? "text-neutral-500" : price - previousPrice > 0 ? "text-green-500" : "text-red-500"}`}>{price - previousPrice < 0 ? "" : "+"}{price - previousPrice} ({price - previousPrice < 0 ? "" : "+"}{percentPrice}%)</span></span>
            <DataItem stockData={stockData} />
        </div>
    )
}