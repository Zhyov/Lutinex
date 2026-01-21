import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "./Navbar"
import LevotinWordCard from "./LevotinWordCard"
import LevotinWordCardSkeleton from "./LevotinWordCardSkeleton"

export default function LevotinDictionary() {
    const location = useLocation()

    const params = new URLSearchParams(location.search)
    const defaultSearch = params.get("q") || ""

    const [search, setSearch] = useState(defaultSearch)
    const [data, setData] = useState([])
    const [maxCount, setMaxCount] = useState(0)
    const [order, setOrder] = useState([])
    const [loading, setLoading] = useState(true)
    const [gridCols, setGridCols] = useState(1)

    useEffect(() => {
        document.title = "Ληβοτιν · Dictionary"
        
        fetch(`https://lutinexapi.onrender.com/fetch/morphemes?q=${encodeURIComponent(search)}`)
            .then(res => res.json())
            .then(obj => {
                setData(obj)
                setLoading(false)
            })
            .catch(err => {
                console.error("Failed to fetch data:", err)
                setLoading(false)
            })
        fetch("https://lutinexapi.onrender.com/max/morpheme")
            .then(res => res.json())
            .then(obj => {
                setMaxCount(obj.max)
            })
            .catch(err => {
                console.error("Failed to fetch data:", err)
            })
        fetch("https://lutinexapi.onrender.com/order/levotin")
            .then(res => res.json())
            .then(obj => {
                setOrder(obj)
            })
            .catch(err => {
                console.error("Failed to fetch data:", err)
            })
    }, [search])

    const compare = (a, b) => {
        const aIndex = order.indexOf(a.type)
        const bIndex = order.indexOf(b.type)

        if (aIndex === bIndex) {
            return a.morpheme.localeCompare(b.morpheme)
        }

        return (aIndex === -1 ? Infinity : aIndex) - (bIndex === -1 ? Infinity : bIndex)
    }

    const words = data.sort(compare).map(element => {
        return <LevotinWordCard key={element.id} morpheme={element.morpheme} meaning={element.meaning} type={element.type} />
    })

    const gridColsClass = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3"
    }[gridCols] || "grid-cols-1"

    return (
        <>
            <Navbar gridEnabled={true} searchEnabled={true} filterEnabled={false} search={search} setSearch={setSearch} gridCols={gridCols} setGridCols={setGridCols} />
            <div className="text-xl my-2 text-center">Λωττυχ: {data.length}/{maxCount}</div>
            <ul className={`grid ${gridColsClass} items-stretch mt-2 gap-2 mx-auto max-w-11/12 md:max-w-[min(90vw,1200px)]`}>
                {loading ? Array(6).fill(0).map((_, i) => <LevotinWordCardSkeleton key={i} />) : words}
            </ul>
        </>
    )
}