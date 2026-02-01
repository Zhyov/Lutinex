import { Link } from "react-router-dom"

export default function LevotinWordCard({morpheme, meaning, type}) {    
    const meanings = meaning.map((element, index) => {
        return (
            meaning.length - 1 === index
            ? element
            : element + ", "
        )
    })

    const lexical = ["noun", "verb", "adjective"]
    const nominal = ["number suffix", "case suffix", "derivational suffix", "information suffix", "nominal deixis", "nominal suffix"]
    const verbal = ["valency marker", "subject marker", "object marker", "mood marker", "tense marker", "aspect marker", "modal marker", "polarity marker", "anaphoric index"]
    const clause = ["conjunction", "particle"]

    const leftColorClass = lexical.includes(type) ? "border-l-lexical has-[a:hover]:border-lexical" : nominal.includes(type) ? "border-l-nominal has-[a:hover]:border-nominal" : verbal.includes(type) ? "border-l-verbal has-[a:hover]:border-verbal" : clause.includes(type) ? "border-l-clause has-[a:hover]:border-clause" : "border-l-white has-[a:hover]:border-white"

    return (
        <li>
            <div className={`shadow-sm flex-1 flex flex-wrap flex-col border-2 gap-1 bg-cardbg border-cardborder border-l-4 has-[a:hover]:border-l-8 w-auto rounded-md duration-100 ${leftColorClass}`}>
                <Link to={`/Lutinex/language/words/levotin/${morpheme}`} className="flex-1">
                    <div className="flex flex-col space-y-1 p-4 pl-6">
                        <div className="flex flex-row w-full mb-1">
                            <span className="text-2xl">-{morpheme}-</span>
                        </div>
                        <span className="w-full text-[16px]">{meanings}</span>
                        <span className="w-full text-[14px] text-neutral-400">{type}</span>
                    </div>
                </Link>
            </div>
        </li>
    )
}