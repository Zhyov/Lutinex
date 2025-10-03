import { useState } from "react"
import { Pie, Line } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, CategoryScale, LinearScale, PointElement, LineElement, Title } from "chart.js"

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Title)

export default function DataItem({ stockData }) {
    const token = localStorage.getItem("token")
    const user = JSON.parse(localStorage.getItem("user"))

    const [invalidShareAmountWarning, setInvalidShareAmountWarning] = useState(false)
    const [insufficientFundsWarning, setInsufficientFundsWarning] = useState(false)
    const [insufficientSharesWarning, setInsufficientSharesWarning] = useState(false)
    const [successfullySoldMessage, setSuccessfullySoldMessage] = useState(false)
    const [succesfullyBoughtMessage, setSuccesfullyBoughtMessage] = useState(false)
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
                if (errorData.error === "Invalid number of shares") {
                    setInvalidShareAmountWarning(true)
                    setInsufficientFundsWarning(false)
                    setSuccesfullyBoughtMessage(false)
                    setInsufficientSharesWarning(false)
                    setSuccessfullySoldMessage(false)
                } else if (errorData.error === "Insufficient balance") {
                    setInsufficientFundsWarning(true)
                    setInvalidShareAmountWarning(false)
                    setSuccesfullyBoughtMessage(false)
                    setInsufficientSharesWarning(false)
                    setSuccessfullySoldMessage(false)
                } else {
                    console.error("Error: " + (errorData.error || errorData.msg || response.statusText))
                }
            } else {
                setInsufficientSharesWarning(false)
                setSuccessfullySoldMessage(false)
                setInvalidShareAmountWarning(false)
                setInsufficientFundsWarning(false)
                setSuccesfullyBoughtMessage(true)

                setTimeout(() => {
                    window.location.reload()
                }, 3000)
            }
        } catch (err) {
            console.error(err)
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
                if (errorData.error === "Invalid number of shares") {
                    setInvalidShareAmountWarning(true)
                    setInsufficientFundsWarning(false)
                    setSuccesfullyBoughtMessage(false)
                    setInsufficientSharesWarning(false)
                    setSuccessfullySoldMessage(false)
                } else if (errorData.error === "Not enough shares to sell") {
                    setInsufficientFundsWarning(false)
                    setInvalidShareAmountWarning(false)
                    setSuccesfullyBoughtMessage(false)
                    setInsufficientSharesWarning(true)
                    setSuccessfullySoldMessage(false)
                } else {
                    console.error("Error: " + (errorData.error || errorData.msg || response.statusText))
                }
            } else {
                setInsufficientSharesWarning(false)
                setSuccessfullySoldMessage(true)
                setInvalidShareAmountWarning(false)
                setInsufficientFundsWarning(false)
                setSuccesfullyBoughtMessage(false)

                setTimeout(() => {
                    window.location.reload()
                }, 3000)
            }
        } catch (err) {
            console.error(err)
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
            <div className={`w-full h-64 flex align-middle justify-center ${!token ? "py-2" : ""}`}>
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
                        {invalidShareAmountWarning ? <span className="mx-auto w-full text-red-500">You can't buy that amount of shares!</span> : null}
                        {insufficientFundsWarning ? <span className="mx-auto w-full text-red-500">You don't have enough money!</span> : null}
                        {insufficientSharesWarning ? <span className="mx-auto w-full text-red-500">You don't have that amount of shares!</span> : null}
                        {succesfullyBoughtMessage ? <span className="mx-auto w-full text-red-500">Succesfully bought {buyAmount} shares!</span> : null}
                        {successfullySoldMessage ? <span className="mx-auto w-full text-red-500">Succesfully sold {buyAmount} shares!</span> : null}
                    </div>
                ) : null
            }
        </div>
    )
}