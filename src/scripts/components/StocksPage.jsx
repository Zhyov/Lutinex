import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import StockCardSkeleton from "./StockCardSkeleton"
import StockCard from "./StockCard"

export default function StocksPage() {
    const [loading, setLoading] = useState(true)
    const [stocks, setStocks] = useState([])

    useEffect(() => {
        document.title = "Lötinäç · Stocks"

        fetch("https://lutinexapi.onrender.com/stocks")
            .then(res => res.json())
            .then(data => {
                setStocks(data)
                setLoading(false)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <Navbar gridEnabled={false} searchEnabled={false} filterEnabled={false} />
            <div className="grid grid-cols-1 2xl:grid-cols-3 lg:grid-cols-2 items-stretch my-2 gap-2 mx-auto max-w-11/12 md:max-w-[min(100vw,1800px)]">
                { loading ? Array(6).fill(0).map((_, i) => <StockCardSkeleton key={i} />) : stocks.map(stock => {
                    return (
                        <StockCard 
                            key={stock.company.id} 
                            name={stock.company.name} 
                            code={stock.company.code} 
                            price={stock.company.price}
                            previousPrice={stock.company.previous_price}
                            percentPrice={stock.company.percent_change.toFixed(2)} 
                            stockData={stock}
                        />
                    )
                })}
            </div>
        </>
    )
}