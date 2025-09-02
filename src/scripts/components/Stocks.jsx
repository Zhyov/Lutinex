import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { Pie, Line } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, CategoryScale, LinearScale, PointElement, LineElement, Title } from "chart.js"

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Title)

function StockCardSkeleton() {
    return (
      <div className="shadow-sm flex-1 flex flex-nowrap flex-col gap-2 border-2 w-128 border-cardborder bg-cardbg rounded-md duration-100 p-4">
            <h1 className="text-2xl font-[600]">Ifäsota Aziwąk (ISA)</h1>
            <span className="bg-cardborder h-0.5 w-full"></span>
            <h2 className="text-2xl font-[700]">$0.00 <span className="text-xl text-neutral-500">+0.00 (+0.00%)</span></h2>
            <div className="flex flex-col w-auto gap-2">
                <div className="flex flex-row gap-2 items-stretch">
                    <button className="w-full border-2 rounded-sm p-1.5 cursor-pointer text-sm transition-colors bg-cardbglight border-cardborderlight hover:bg-cardbgslight hover:border-cardborderslight">
                        Share Price
                    </button>
                    <button className="w-full border-2 rounded-sm p-1.5 cursor-pointer text-sm transition-colors bg-cardbglight border-cardborderlight hover:bg-cardbgslight hover:border-cardborderslight">
                        Shares
                    </button>
                </div>
                <div className="w-full h-64 flex align-middle justify-center">
                    <div className="animate-pulse w-full h-full rounded-md bg-neutral-700"></div>
                </div>
            </div>
        </div>  
    )
}

function StockCard({ name, code, price, previousPrice, percentPrice, priceData, sharesData }) {
    const [selectedView, setSelectedView] = useState("price")

    return (
        <div className="shadow-sm flex-1 flex flex-nowrap flex-col gap-2 border-2 w-128 border-cardborder bg-cardbg rounded-md duration-100 p-4">
            <h1 className="text-2xl font-[600]">{name} ({code})</h1>
            <span className="bg-cardborder h-0.5 w-full"></span>
            <h2 className="text-2xl font-[700]">${price} <span className={`text-xl ${price - previousPrice === 0 ? "text-neutral-500" : price - previousPrice > 0 ? "text-green-500" : "text-red-500"}`}>{price - previousPrice < 0 ? "" : "+"}{price - previousPrice} ({price - previousPrice < 0 ? "" : "+"}{percentPrice}%)</span></h2>
            <div className="flex flex-col w-auto gap-2">
                <div className="flex flex-row gap-2 items-stretch">
                    <button onClick={() => setSelectedView("price")} className={`w-full border-2 rounded-sm p-1.5 cursor-pointer text-sm transition-colors ${selectedView === "price" ? "bg-cardbgslight border-cardborderslight" : "bg-cardbglight border-cardborderlight hover:bg-cardbgslight hover:border-cardborderslight"}`}>
                        Share Price
                    </button>
                    <button onClick={() => setSelectedView("shares")} className={`w-full border-2 rounded-sm p-1.5 cursor-pointer text-sm transition-colors ${selectedView === "shares" ? "bg-cardbgslight border-cardborderslight" : "bg-cardbglight border-cardborderlight hover:bg-cardbgslight hover:border-cardborderslight"}`}>
                        Shares
                    </button>
                </div>
                {selectedView === "price" && (
                    <div className="w-full h-64 flex align-middle justify-center">
                        <Line data={priceData} />
                    </div>
                )}
                {selectedView === "shares" && (
                    <div className="w-full h-64 flex align-middle justify-center">
                        <Pie data={sharesData} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default function Stocks() {
    const [loading, setLoading] = useState(true)
    const [stocks, setStocks] = useState([])

    useEffect(() => {
        document.title = "Lötinäç · Stocks"

        fetch("https://eshakapapi.onrender.com/stocks")
            .then(res => res.json())
            .then(data => {
                setStocks(data)
                setLoading(false)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="relative mx-auto p-0 flex flex-col min-h-dvh">
            <Navbar gridEnabled={false} searchEnabled={false} filterEnabled={false} />
            <div className="grid grid-cols-1 2xl:grid-cols-3 lg:grid-cols-2 items-center mt-2 mb-2 gap-2 mx-auto max-w-11/12 md:max-w-[min(100vw,1800px)]">
                { loading ? Array(6).fill(0).map((_, i) => <StockCardSkeleton key={i} />) : stocks.map(stock => {
                    
                    
                    const lineData = {
                        labels: stock.price_data.map(p => p.date),
                        datasets: [
                            {
                                label: "Share Price",
                                data: stock.price_data.map(p => p.price),
                                fill: false,
                                borderColor: stock.company.price - stock.company.previous_price === 0 ? "#444444" : stock.company.price - stock.company.previous_price > 0 ? "#00ff00" : "#ff0000",
                                tension: 0.1,
                            }
                        ]
                    }

                    const sharesData = {
                        labels: stock.shares_data.map(s => s.owner),
                        datasets: [
                            {
                                label: "Shares",
                                data: stock.shares_data.map(s => s.shares),
                                backgroundColor: stock.shares_data.map(s => s.color),
                                borderWidth: 0,
                            }
                        ]
                    }

                    return (
                        <StockCard 
                            key={stock.company.id} 
                            name={stock.company.name} 
                            code={stock.company.code} 
                            price={stock.company.price}
                            previousPrice={stock.company.previous_price}
                            percentPrice={stock.company.percent_change.toFixed(2)} 
                            priceData={lineData} 
                            sharesData={sharesData} 
                        />
                    )
                })}
            </div>
        </div>
    )
}