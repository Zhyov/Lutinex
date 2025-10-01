import WordLink from "./WordLink"

export default function WordBox ({ word, link = false, wordLink = null }) {
    const content = link ? <WordLink word={word} wordLink={wordLink} /> : word

    return (
        <span className="bg-cardborder px-1 rounded-md">{content}</span>
    )
}