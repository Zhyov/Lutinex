import { useEffect } from "react"
import { Link } from "react-router-dom"
import WordBox from "./WordBox"
import Navbar from "./Navbar"

export default function LevotinAbout() {
    useEffect(() => {
        document.title = "Ληβοτιν · About"
    })

    return (
        <>
            <Navbar gridEnabled={false} searchEnabled={false} filterEnabled={false} />
            <div className="flex flex-col items-stretch mt-2 mb-2 gap-2 mx-auto w-full max-w-[min(95vw,1500px)] md:max-w-[min(68vw,1500px)]">
                <div className="shadow-sm flex-1 flex flex-wrap border-0 md:border-2 gap-4 md:border-cardborder bg-dark md:bg-cardbg rounded-md duration-100 p-4 *:w-full">
                    <h1 className="text-4xl font-[600]">Ληβοτιν</h1>
                    <span>
                        Levotin, or Lēbotin, is a head-marking, agglutinative, polysynthetic constructed language designed with a strong separation between phonology, morphology, and a formalized morphophonological change system (MCS). It uses a Greek-based script and allows extensive word formation through affix chaining and phonological interaction.
                    </span>
                    <span>
                        This page serves as a technical overview of the language. Detailed morphophonological rules are specified on a separate <Link to="/Lutinex/language/about/levotin/mcs" className="text-blue-500 hover:underline">MCS page</Link>.
                    </span>
                    <h1 className="text-3xl font-[600]">Script & Alphabet</h1>
                    <span>
                        Levotin is written using a Greek-based script. Each character has a stable phonemic value and a fixed Latin transcription.
                    </span>
                    <div className="overflow-x-auto">
                        <table className="min-w-max border-collapse border-cardborder border-2 text-[16px] **:border-2 **:border-cardborder **:px-2">
                            <tr>
                                <th>Grapheme</th>
                                <th>Phoneme</th>
                                <th>Notes</th>
                                <th>Transcription</th>
                            </tr>
                            <tr><td>α</td><td>/a/</td><td>specifically /ä/</td><td>a</td></tr>
                            <tr><td>β</td><td>/β/</td><td>/v/ is an allophone</td><td>b or v</td></tr>
                            <tr><td>γ</td><td>/ɣ/</td><td></td><td>g</td></tr>
                            <tr><td>δ</td><td>/ð/</td><td></td><td>d</td></tr>
                            <tr><td>ε</td><td>/e/</td><td>specifically /e̞/</td><td>e</td></tr>
                            <tr><td>η</td><td>/eː/</td><td>long vowel, specifically /e̞ː/</td><td>ee or ē</td></tr>
                            <tr><td>ι</td><td>/i/</td><td></td><td>i</td></tr>
                            <tr><td>κ</td><td>/k/</td><td></td><td>k</td></tr>
                            <tr><td>λ</td><td>/l/</td><td></td><td>l</td></tr>
                            <tr><td>μ</td><td>/m/</td><td></td><td>m</td></tr>
                            <tr><td>ν</td><td>/n/</td><td></td><td>n</td></tr>
                            <tr><td>ο</td><td>/o/</td><td>specifically /o̞/</td><td>o</td></tr>
                            <tr><td>π</td><td>/p/</td><td></td><td>p</td></tr>
                            <tr><td>ρ</td><td>/ɾ ~ r/</td><td>flap singleton, trill when geminate</td><td>r</td></tr>
                            <tr><td>σ</td><td>/s/</td><td>becomes ς word-finally*</td><td>s</td></tr>
                            <tr><td>τ</td><td>/t/</td><td></td><td>t</td></tr>
                            <tr><td>υ</td><td>/u/</td><td></td><td>u</td></tr>
                            <tr><td>φ</td><td>/ɸ/</td><td>/f/ is an allophone</td><td>f</td></tr>
                            <tr><td>χ</td><td>/x/</td><td>/h/ and /ç/ are allophones</td><td>x or h</td></tr>
                            <tr><td>ω</td><td>/oː/</td><td>long vowel, specifically /o̞ː/</td><td>oo or ō</td></tr>
                        </table>
                    </div>
                    <span>
                        * Final ς is used only at the end of a word, not at morpheme boundaries.
                    </span>
                    <h1 className="text-3xl font-[600]">Phonology</h1>
                    <h1 className="text-2xl font-[600]">Vowel System</h1>
                    <span>
                        Levotin distinguishes vowel length phonemically. Long vowels may be represented either as single long phonemes or as doubled short vowels; both are phonetically identical but remain morphologically visible for rule application.
                    </span>
                    <h1 className="text-2xl font-[600]">Consonant System</h1>
                    <span>
                        The consonant inventory favors fricatives and allows full phonemic gemination. Geminate consonants function as single timing units.
                    </span>
                    <div className="overflow-x-auto">
                        <table className="min-w-max border-collapse border-cardborder border-2 text-[16px] **:border-2 **:border-cardborder **:px-2">
                            <tr>
                                <th>Labial</th>
                                <th>Coronal</th>
                                <th>Velar</th>
                            </tr>
                            <tr><td>p β ɸ m</td><td>t d s n l ɾ</td><td>k ɣ x</td></tr>
                        </table>
                    </div>
                    <h1 className="text-2xl font-[600]">Phonotactics</h1>
                    <ul className="list-disc list-inside font-normal text-[16px]">
                        <li>Maximum syllable structure: (C)(C)V(V)(C)</li>
                        <li>All syllables must contain a nucleus</li>
                        <li>Short vowel clusters are permitted; long vowel clusters are not</li>
                        <li>Geminate consonants are permitted and preferred over equivalent onset-coda splits</li>
                        <li>CC onsets may be geminate or mixed</li>
                        <li>VV nuclei may be mixed or geminate</li>
                    </ul>
                    <span>
                        Phonetic equivalence example:
                    </span>
                    <ul className="list-disc list-inside font-normal text-[16px]">
                        <li>/ee/ ≡ /eː/</li>
                        <li>/oo/ ≡ /oː/</li>
                    </ul>
                    <h1 className="text-3xl font-[600]">Grammar</h1>
                    <h1 className="text-2xl font-[600]">Morphological Typology</h1>
                    <span>
                        Levotin is head-marking, agglutinative, and polysynthetic. Grammatical relations are encoded primarily on the verbal head rather than on noun phrases.
                    </span>
                    <ul className="list-disc list-inside font-normal text-[16px]">
                        <li>Nominative and accusative cases are zero-marked</li>
                        <li>Singular number is zero-marked</li>
                        <li>Dual and plural are overtly marked</li>
                    </ul>
                    <h1 className="text-2xl font-[600]">Nominal Morphology</h1>
                    <span>
                        Nouns may take number and genitive markers. Case is determined structurally rather than by overt marking.
                    </span>
                    <div className="overflow-x-auto">
                        <table className="min-w-max border-collapse border-cardborder border-2 text-[16px] **:border-2 **:border-cardborder **:px-2">
                            <tr>
                                <th>Suffix</th>
                                <th>Function</th>
                            </tr>
                            <tr><td><WordBox word={"φυλ"} /></td><td>dual</td></tr>
                            <tr><td><WordBox word={"τυχ"} /></td><td>plural</td></tr>
                            <tr><td><WordBox word={"μεκ"} /></td><td>genitive</td></tr>
                            <tr><td><WordBox word={"κκις"} /></td><td>universal quantifier ("every")</td></tr>
                        </table>
                    </div>
                    <h1 className="text-2xl font-[600]">Pronominal System</h1>
                    <span>
                        Levotin distinguishes between accusative object pronouns, which are verb-bound prefixes, and nominative subject pronouns, which are verb-bound suffixes.
                    </span>
                    <h1 className="text-xl font-[600]">Accusative Object Pronouns</h1>
                    <span>
                        Accusative pronouns are verb-bound object prefixes. They attach to the beginning of the verbal complex and mark the object argument. They do not occur independently.
                    </span>
                    <span>
                        Representative stems include:
                    </span>
                    <ul className="list-disc list-inside font-normal text-[16px]">
                        <li>1st person: <WordBox word={"μηχ"} /></li>
                        <li>2nd person: <WordBox word={"βαπ"} /></li>
                        <li>3rd person masculine: <WordBox word={"χιγ"} /></li>
                        <li>3rd person feminine: <WordBox word={"ννητ"} /></li>
                        <li>3rd person neuter: <WordBox word={"χας"} /></li>
                    </ul>
                    <h1 className="text-xl font-[600]">Nominative Subject Pronouns</h1>
                    <span>
                        Nominative pronouns are verb-bound subject suffixes. They attach to the end of the verbal complex and index the subject.
                    </span>
                    <span>
                        Representative agreement affixes:
                    </span>
                    <ul className="list-disc list-inside font-normal text-[16px]">
                        <li>1st person: <WordBox word={"λοφ"} /></li>
                        <li>2nd person: <WordBox word={"λεφ"} /></li>
                        <li>3rd person masculine: <WordBox word={"λινυφ"} /></li>
                        <li>3rd person feminine: <WordBox word={"λιναφ"} /></li>
                        <li>3rd person neuter: <WordBox word={"λινηφ"} /></li>
                    </ul>
                    <h1 className="text-2xl font-[600]">Verbal Morphology</h1>
                    <span>
                        Verbs are the grammatical core of the clause and host most inflectional material.
                    </span>
                    <div className="overflow-x-auto">
                        <table className="min-w-max border-collapse border-cardborder border-2 text-[16px] **:border-2 **:border-cardborder **:px-2">
                            <tr>
                                <th>Suffix</th>
                                <th>Function</th>
                            </tr>
                            <tr><td><WordBox word={"ος"} /></td><td>infinitive</td></tr>
                            <tr><td><WordBox word={"ης"} /></td><td>present</td></tr>
                            <tr><td><WordBox word={"ις"} /></td><td>past</td></tr>
                            <tr><td><WordBox word={"ως"} /></td><td>future</td></tr>
                            <tr><td><WordBox word={"υν"} /></td><td>negator</td></tr>
                        </table>
                    </div>
                    <h1 className="text-3xl font-[600]">Syntax</h1>
                    <span>
                        Levotin syntax is built around a fixed-order verbal assembly, comparable to a sequence of morphological blocks. Each block has a defined grammatical role, and together they form a single phonological and morphological word. There is no phrase-level case syntax; argument structure is expressed entirely through bound morphology on the verb.
                    </span>
                    <h1 className="text-2xl font-[600]">Verbal Assembly Structure</h1>
                    <span>
                        A Levotin clause is centered on the verbal complex, which follows this canonical order:
                    </span>
                    <span className="font-mono font-[600]">
                        [Object Index] - Verb Root - (Modifiers) - (Negator) - Tense - Subject Index
                    </span>
                    <span>
                        All components above are concatenated into one word.
                    </span>
                    <h1 className="text-xl font-[600]">Block Functions</h1>
                    <ul className="list-disc list-inside font-normal text-[16px]">
                        <li><strong>Object Index:</strong> Accusative pronoun prefix. Marks the object directly on the verb. Optional.</li>
                        <li><strong>Verb Root:</strong> Lexical core of the predicate (e.g. <WordBox word={"γικ"} /> “talk”, <WordBox word={"πυ"} /> “see”). Required.</li>
                        <li><strong>Modifiers:</strong> Optional derivational or descriptive material (e.g. amplifiers, incorporated elements).</li>
                        <li><strong>Negator:</strong> Optional verbal negation affix (<WordBox word={"υν"} />).</li>
                        <li><strong>Tense:</strong> Temporal marking (<WordBox word={"ης"} /> present, <WordBox word={"ις"} /> past, <WordBox word={"ως"} /> future).</li>
                        <li><strong>Subject Index:</strong> Mandatory nominative agreement suffix indexing the subject.</li>
                    </ul>
                    <h1 className="text-2xl font-[600]">Nominal Material</h1>
                    <span>
                        Lexical nouns are not required for grammatical completeness. When present, they appear before the verbal complex and serve discourse or clarification purposes only.
                    </span>
                    <span>
                        Typical surface order:
                    </span>
                    <span className="font-mono font-[600]">
                        (Adjective) - (Noun / Object) - (Number) | Verbal Complex
                    </span>
                    <ul className="list-disc list-inside font-normal text-[16px]">
                        <li>Adjectives precede the nouns they modify</li>
                        <li>Nouns do not carry case marking</li>
                        <li>Objects may be expressed lexically, pronominally, or omitted entirely</li>
                        <li>Subjects are normally expressed only via the subject index</li>
                    </ul>
                    <h1 className="text-2xl font-[600]">Worked Examples</h1>
                    <span className="font-[600]">
                        Example 1: Lexical Object, Overt Subject
                    </span>
                    <span>
                        <strong>Levotin:</strong> <WordBox word={"Τεο πινδυσιτγικωσλινυφ."} />
                    </span>
                    <span>
                        <strong>Latin:</strong> <WordBox word={"Teo pin-dusit-gik-oos-linuf"} />
                    </span>
                    <span>
                        <strong>Gloss:</strong> <WordBox word={"Teo beautiful-woman-talk-FUT-3SG.M"} />
                    </span>
                    <span>
                        Translation: "Teo will talk to the beautiful woman."
                    </span>
                    <span className="font-[600]">
                        Example 2: No Lexical Arguments
                    </span>
                    <span>
                        <strong>Levotin:</strong> <WordBox word={"Γικωσλινυφ."} />
                    </span>
                    <span>
                        <strong>Latin:</strong> <WordBox word={"Gik-oos-linuf"} />
                    </span>
                    <span>
                        <strong>Gloss:</strong> <WordBox word={"talk-FUT-3SG.M"} />
                    </span>
                    <span>
                        Translation: "He will talk."
                    </span>
                </div>
            </div>
        </>
    )
}