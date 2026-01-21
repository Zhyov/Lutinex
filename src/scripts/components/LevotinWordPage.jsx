import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Navbar from "./Navbar"
import LevotinWordPageSkeleton from "./LevotinWordPageSkeleton"

export default function LevotinWordPage() {
    const { word: specifiedWord } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(true)
        setData([])
        setMorpheme("")
        setUnsortedMeanings([])
        setType("")
        setPhonetic("")
        setChanges([])
    }, [specifiedWord])

    useEffect(() => {
        document.title = "Ληβοτιν · " + specifiedWord
        fetch(`https://lutinexapi.onrender.com/word/morpheme?q=${specifiedWord}`)
            .then(res => res.json())
            .then(obj => setData(obj))
            .catch(err => console.error("Failed to fetch data:", err))
    }, [specifiedWord])


    const [morpheme, setMorpheme] = useState("")
    const [unsortedMeanings, setUnsortedMeanings] = useState([])
    const [type, setType] = useState("")
    const [phonetic, setPhonetic] = useState("")
    const [changes, setChanges] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        if (data.length > 0) {
            setMorpheme(data[0].morpheme)
            setUnsortedMeanings(data[0].meaning)
            setType(data[0].type)
            setPhonetic(data[0].phonetic)
            setChanges(data[0].changes)
            setLoading(false)
        }
    }, [data])

    const meanings = unsortedMeanings.map((element, index) => {
        return (
            unsortedMeanings.length - 1 === index
            ? element
            : element + ", "
        )
    })

    let changesElement
    if (changes) {
        changesElement = (
            <span key={crypto.randomUUID()}>
                {<Link to="/Lutinex/language/about/levotin/mcs#pattern" className="text-blue-500 hover:underline">{changes.join(", ")}</Link>}
            </span>
        )
    }

    return (
        <>
        {
            loading
            ? <LevotinWordPageSkeleton />
            : <>
            <Navbar gridEnabled={false} searchEnabled={false} filterEnabled={false} />
            <div className="flex flex-col items-stretch mt-2 gap-2 mx-auto max-w-11/12 md:max-w-[min(98vw,1500px)]">
                <div className="flex flex-row gap-2 mt-2">
                    <Link to="/Lutinex/language/dictionary/levotin">
                        <img src="https://zhyov.github.io/Lutinex/assets/icon/back.svg" alt="back" className="size-10 p-3 rounded-md invert transition-colors hover:bg-neutral-300" />
                    </Link>
                    <span className="text-4xl">-{morpheme}-</span>
                </div>
                <div className="shadow-sm flex-1 flex flex-wrap flex-col border-2 gap-1 border-cardborder bg-cardbg w-auto rounded-md duration-100">
                    <div className="flex flex-col space-y-1 py-4">
                        <span className="w-full text-xl px-4">
                            Pronunciation: <span className="w-full text-[18px] text-neutral-400">/{phonetic}/</span>
                        </span>
                        <span className="bg-cardborder h-0.5 w-full my-4"></span>
                        <span className="w-full text-2xl px-4">Broad Definition</span>
                        <span className="w-full text-[16px] px-4">{meanings}</span>
                        <span className="bg-cardborder h-0.5 w-full my-4"></span>
                        <span className="w-full text-xl px-4">Morpheme type: {type}</span>
                        { changes && <span className="w-full text-xl pt-4 px-4">Applies morphophonological changes: {changesElement}</span> }
                    </div>
                </div>
            </div>
            </>
        }
        </>
    )
}