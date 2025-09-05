import { useState } from "react"
import { Pie, Line } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, CategoryScale, LinearScale, PointElement, LineElement, Title } from "chart.js"

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Title)

export default function DataItem({ stockData }) {
    const [selectedView, setSelectedView] = useState("price")
    const lineData = {
        labels: stockData.price_data.map(p => p.date),
        datasets: [
            {
                label: "Share Price",
                data: stockData.price_data.map(p => p.price),
                fill: false,
                borderColor: stockData.company.price - stockData.company.previous_price === 0 ? "#444444" : stockData.company.price - stockData.company.previous_price > 0 ? "#00ff00" : "#ff0000",
                tension: 0.1,
            }
        ]
    }

    const sharesData = {
        labels: stockData.shares_data.map(s => s.owner),
        datasets: [
            {
                label: "Shares",
                data: stockData.shares_data.map(s => s.shares),
                backgroundColor: stockData.shares_data.map(s => s.color),
                borderWidth: 0,
            }
        ]
    }

    return (
        <div className="flex flex-col w-auto gap-2 px-4">
            <div className="flex flex-row gap-2 items-stretch">
                <button onClick={() => setSelectedView("price")} className={`w-full border-2 rounded-sm p-1.5 cursor-pointer text-sm transition-colors ${selectedView === "price" ? "bg-cardbgslight border-cardborderslight" : "bg-cardbglight border-cardborderlight hover:bg-cardbgslight hover:border-cardborderslight"}`}>
                    Share Price
                </button>
                <button onClick={() => setSelectedView("shares")} className={`w-full border-2 rounded-sm p-1.5 cursor-pointer text-sm transition-colors ${selectedView === "shares" ? "bg-cardbgslight border-cardborderslight" : "bg-cardbglight border-cardborderlight hover:bg-cardbgslight hover:border-cardborderslight"}`}>
                    Shares
                </button>
            </div>
            <div className="w-full h-64 flex align-middle justify-center py-2">
                {selectedView === "price" ?
                    <Line data={lineData} className="my-auto" />
                    : 
                    <Pie data={sharesData} />
                }
            </div>
        </div>
    )
}