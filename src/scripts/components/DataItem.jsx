import { useState } from "react"
import { Pie, Line } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, CategoryScale, LinearScale, PointElement, LineElement, Title } from "chart.js"

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Title)

export default function DataItem({ stockData }) {
    const token = localStorage.getItem("token")
    const user = JSON.parse(localStorage.getItem("user"))

    const [selectedView, setSelectedView] = useState("price")
    const [buyAmount, setBuyAmount] = useState(1)
    const userMoney = user ? user.balance : 0
    const maxBuyableShares = Math.floor(userMoney / stockData.company.price)
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

    const buyShares = async () => {
        if (!token) return

        try {
            const response = await fetch("https://lutinexapi.onrender.com/stocks/buy", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    company_id: stockData.company.id,
                    shares: buyAmount
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                alert("Error: " + (errorData.message || response.statusText))
                return
            }

            const data = await response.json()
            alert(`Bought ${buyAmount} shares successfully!`)
            console.log(data)

            window.location.reload()
        } catch (err) {
            console.error(err)
            alert("Something went wrong while buying shares.")
        }
    }

    const sellShares = async () => {
        if (!token) return

        try {
            const response = await fetch("https://lutinexapi.onrender.com/stocks/sell", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    company_id: stockData.company.id,
                    shares: buyAmount
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                alert("Error: " + (errorData.message || response.statusText))
                return
            }

            const data = await response.json()
            alert(`Sold ${buyAmount} shares successfully!`)
            console.log(data)

            window.location.reload()
        } catch (err) {
            console.error(err)
            alert("Something went wrong while selling shares.")
       }
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
            <div className="w-full h-64 flex align-middle justify-center">
                {selectedView === "price" ?
                    <Line data={lineData} className="my-auto" />
                    : 
                    <Pie data={sharesData} />
                }
            </div>
            {
                token ? (
                    <div className="flex flex-col gap-2 items-stretch py-2">
                        <input type="number" max={maxBuyableShares} min={1} value={buyAmount} onChange={(e) => setBuyAmount(Number(e.target.value))} placeholder="Number of Shares" className="w-full border-2 rounded-sm p-1.5 text-sm bg-cardbglight border-cardborderlight text-center"></input>
                        <div className="flex flex-row gap-2 items-stretch">
                            <button onClick={buyShares} className="w-full border-2 rounded-sm p-1.5 cursor-pointer text-sm transition-colors bg-cardbglight border-cardborderlight hover:bg-cardbgslight hover:border-cardborderslight">
                                Buy Shares
                            </button>
                            <button onClick={sellShares} className="w-full border-2 rounded-sm p-1.5 cursor-pointer text-sm transition-colors bg-cardbglight border-cardborderlight hover:bg-cardbgslight hover:border-cardborderslight">
                                Sell Shares
                            </button>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}