import { Link } from "react-router-dom"

export default function WordLink({ word, wordLink }) {
    return (
        <Link to={`/Eshakap/language/words/${wordLink}`} className="text-blue-500 hover:underline">{word}</Link>
    )
}