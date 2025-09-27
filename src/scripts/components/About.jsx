import { useEffect } from "react"
import WordLink from "./WordLink"
import Navbar from "./Navbar"

export default function About() {
    useEffect(() => {
        document.title = "Äšakap · About"
    })

    return (
        <>
            <Navbar gridEnabled={false} searchEnabled={false} filterEnabled={false} />
            <div className="flex flex-col items-stretch mt-2 mb-2 gap-2 mx-auto min-w-6/12 md:max-w-[min(68vw,1500px)]">
                <div className="shadow-sm flex-1 flex flex-wrap flex-col border-0 md:border-2 gap-4 md:border-cardborder bg-dark md:bg-cardbg rounded-md duration-100 p-4">
                    <h1 className="text-2xl font-[600]">Alphabet and Phonetics</h1>
                    <span>
                        Äšakap uses a phonetic alphabet with direct correspondence between letters and sounds. Each letter always corresponds to its phoneme, there are no allophones or silent letters.
                    </span>
                    <span className="text-xl font-[600]">
                        Alphabet:
                        <br/>
                        <span className="font-normal text-[16px]">
                            Aa, Ää, Ąą, Pp, Bb, Ff, Vv, Ww, Kk, Gg, Tt, Dd, Đđ, Zz, Žž, Ii, Įį, Hh, Jj, Ll, Mm, Nn, Ňň, Oo, Öö, Rr, Ss, Šš, Cc, Čč, Çç
                        </span>
                    </span>
                    <span className="text-xl font-[600]">
                        Phonetic representation:
                        <br/>
                        <span className="font-normal text-[16px]">
                            /a/, /e/, /ø/, /p/, /b/, /f/, /v/, /w/, /k/, /g/, /t/, /d/, /dʐ/, /z/, /ʐ/, /i/, /y/, /x/, /j/, /l/, /m/, /n/, /ɲ/, /o/, /u/, /r/, /s/, /ʂ/, /ts/, /tʂ/, /ks/
                        </span>
                    </span>
                    <span className="text-xl font-[600]">
                        Phonotactics:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li>Vowel clusters are prohibited.</li>
                            <li>Consonant gemination and clusters are allowed.</li>
                            <li>Maximum syllable structure is CCVCC.</li>
                            <li>All syllables must have a nucleus.</li>
                        </ul>
                    </span>
                    <span className="text-[18px] font-[600]">
                        Notes on gemination:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li>Doubling a consonant can indicate the presence of a suffix or modifier boundary.</li>
                            <li>Example: <span className="bg-cardborder px-1 rounded-md">zašaf'fä</span> [ˈzaʂafːe] differs from <span className="bg-cardborder px-1 rounded-md">zašafä</span> [ˈzaʂafe]. The geminate /fː/ signals the start of the suffix "fä" merging with the "f" at the end of "zašaf." Mispronouncing it can lead to misinterpretation.</li>
                            <li>Gemination is mandatory for meaning distinctions, mainly seen where an apostrophe is present.</li>
                        </ul>
                    </span>
                    <h1 className="text-2xl font-[600]">Morphology and Word Types</h1>
                    <span>
                        Äšakap combines nonconcatenative morphology with concatenative elements. Words are built from roots called replaceables or combinations and modified by patterns called modifiers. The combination of a root and a pattern is called a stem. A stem with added affixes (or not) is a word. Replaceable and combination words must always be tri-consonantal on their base form. General and special words may have any amount of consonants but three to avoid confusion with roots.
                    </span>
                    <span className="text-xl font-[600]">
                        Word types:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li><span className="font-[600]">General words</span>: Fixed meaning, stressed on the first syllable, used for pronouns, conjunctions, and basic particles.</li>
                            <li><span className="font-[600]">Special words</span>: Fixed meaning for concrete nouns such as animals or proper concepts.</li>
                            <li><span className="font-[600]">Replaceable words</span>: Tri-consonantal roots with polysemic meanings. Mandatory to use modifiers to express specific meanings.</li>
                            <li><span className="font-[600]">Combination words</span>: Roots formed by combining two or three replaceable words to create new, compositional meanings.</li>
                        </ul>
                    </span>
                    <span className="text-xl font-[600]">
                        Pronouns
                        <br/>
                        <table className="border-cardborder border-2 text-[16px] **:border-2 **:border-cardborder **:px-2">
                            <tr>
                                <td colSpan={2}></td>
                                <th>Singular</th>
                                <th>Plural</th>
                            </tr>
                            <tr>
                                <th colSpan={2}>1st Person</th>
                                <td>ja</td>
                                <td>jaj</td>
                            </tr>
                            <tr>
                                <th colSpan={2}>2nd Person</th>
                                <td>ti</td>
                                <td>tij</td>
                            </tr>
                            <tr>
                                <th rowSpan={3}>3rd Person</th>
                                <th>Masculine</th>
                                <td>on</td>
                                <td>onj</td>
                            </tr>
                            <tr>
                                <th>Feminine</th>
                                <td>ona</td>
                                <td>onaj</td>
                            </tr>
                            <tr>
                                <th>Neutral</th>
                                <td>ono</td>
                                <td>onoj</td>
                            </tr>
                        </table>
                    </span>
                    <span className="text-xl font-[600]">
                        Agreement rules:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li>Adjectives agree with their nouns in case and number. (See example below for <span className="bg-cardborder px-1 rounded-md">afisąn</span> "person" + <span className="bg-cardborder px-1 rounded-md">igädosa</span> "good")</li>
                        </ul>
                        <table className="border-cardborder border-2 text-[16px] **:border-2 **:border-cardborder **:px-2">
                            <tr>
                                <td colSpan={2}></td>
                                <th>Singular</th>
                                <th>Plural</th>
                            </tr>
                            <tr>
                                <th colSpan={2}>Nominative</th>
                                <td>afisąn igädosa</td>
                                <td>afisąnj igädosaj</td>
                            </tr>
                            <tr>
                                <th colSpan={2}>Accusative</th>
                                <td>afisąn'ma igädosa'ma</td>
                                <td>afisąn'maj igädosa'maj</td>
                            </tr>
                            <tr>
                                <th colSpan={2}>Dative</th>
                                <td>afisąn'ja igädosa'ja</td>
                                <td>afisąn'jaj igädosa'jaj</td>
                            </tr>
                            <tr>
                                <th rowSpan={3}>Genitive</th>
                                <th>Possessor</th>
                                <td>afisąn'sö igädosa'sö</td>
                                <td>afisąn'söj igädosa'söj</td>
                            </tr>
                            <tr>
                                <th>Possessed</th>
                                <td>afisąn'lö igädosa'lö</td>
                                <td>afisąn'löj igädosa'löj</td>
                            </tr>
                        </table>
                    </span>
                    <h1 className="text-2xl font-[600]">Stress Rules</h1>
                    <ul className="list-disc list-inside">
                        <li>Stems ending in a consonant → stress on the penultimate syllable.</li>
                        <li>Stems ending in a vowel → stress on the third-last syllable.</li>
                        <li>General words and special words → stress on the first syllable.</li>
                        <li>Proper nouns are stressed naturally.</li>
                        <li>Affixes do not affect stress.</li>
                    </ul>
                    <h1 className="text-2xl font-[600]">Modifiers (Patterns)</h1>
                    <span>
                        Modifiers are four-vowel patterns inserted into replaceable or combination word roots. Empty slots are retained and the vowels are shifted accordingly. They define the word's specific function or meaning.
                    </span>
                    <span className="text-xl font-[600]">
                        All modifiers:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li>Concrete noun: <span className="bg-cardborder px-1 rounded-md">aią-</span> (<span className="bg-cardborder px-1 rounded-md"><WordLink word={"fsn"} wordLink={"fsn"} /></span> + <span className="bg-cardborder px-1 rounded-md">aią-</span> → afisąn, "person")</li>
                            <li>Abstract noun: <span className="bg-cardborder px-1 rounded-md">äaa-</span> (<span className="bg-cardborder px-1 rounded-md"><WordLink word={"jdn"} wordLink={"jdn"} /></span> + <span className="bg-cardborder px-1 rounded-md">äaa-</span> → äjadan, "existance")</li>
                            <li>Locative nominalization: <span className="bg-cardborder px-1 rounded-md">-öoa</span> (<span className="bg-cardborder px-1 rounded-md"><WordLink word={"dtg"} wordLink={"dtg"} /></span> + <span className="bg-cardborder px-1 rounded-md">-öoa</span>→ dötoga, "trail")</li>
                            <li>Result nominalization: <span className="bg-cardborder px-1 rounded-md">aäii</span> (<span className="bg-cardborder px-1 rounded-md"><WordLink word={"cžš"} wordLink={"cžš"} /></span> + <span className="bg-cardborder px-1 rounded-md">aäii</span>→ acäžiši, "book")</li>
                            <li>Adjective derivation: <span className="bg-cardborder px-1 rounded-md">iäoa</span> (<span className="bg-cardborder px-1 rounded-md"><WordLink word={"gds"} wordLink={"gds"} /></span> + <span className="bg-cardborder px-1 rounded-md">iäoa</span> → igädosa, "good")</li>
                            <li>Color adjective derivation: <span className="bg-cardborder px-1 rounded-md">-äoą</span> (<span className="bg-cardborder px-1 rounded-md"><WordLink word={"blr"} wordLink={"blr"} /></span> + <span className="bg-cardborder px-1 rounded-md">-äoą</span> → bälorą, "white")</li>
                            <li>Infinitive verb: <span className="bg-cardborder px-1 rounded-md">-aa-</span> (<span className="bg-cardborder px-1 rounded-md"><WordLink word={"kmr"} wordLink={"kmr"} /></span> + <span className="bg-cardborder px-1 rounded-md">-aa-</span> → kamar, "to digest")</li>
                            <li>Infinitive imperfective verb: <span className="bg-cardborder px-1 rounded-md">-äi-</span> (<span className="bg-cardborder px-1 rounded-md"><WordLink word={"đčj"} wordLink={"đčj"} /></span> + <span className="bg-cardborder px-1 rounded-md">-äi-</span> → đäčij, "to be isolating," no exact English translation as it doesn't exist)</li>
                            <li>Present tense verb: <span className="bg-cardborder px-1 rounded-md">oiaä</span> (<span className="bg-cardborder px-1 rounded-md"><WordLink word={"klt"} wordLink={"klt"} /></span> + <span className="bg-cardborder px-1 rounded-md">oiaä</span> → okilatä, "want")</li>
                            <li>Present imperfective tense verb: <span className="bg-cardborder px-1 rounded-md">aąa-</span> (<span className="bg-cardborder px-1 rounded-md"><WordLink word={"lfd"} wordLink={"lfd"} /></span> + <span className="bg-cardborder px-1 rounded-md">aąa-</span> → aląfad, "flying")</li>
                            <li>Past tense verb: <span className="bg-cardborder px-1 rounded-md">oaö-</span> (<span className="bg-cardborder px-1 rounded-md"><WordLink word={"ghv"} wordLink={"ghv"} /></span> + <span className="bg-cardborder px-1 rounded-md">oaö-</span> → ogahöv, "made")</li>
                            <li>Past imperfective tense verb: <span className="bg-cardborder px-1 rounded-md">ääio</span> (<span className="bg-cardborder px-1 rounded-md"><WordLink word={"vtr"} wordLink={"vtr"} /></span> + <span className="bg-cardborder px-1 rounded-md">ääio</span> → ävätiro, "was seeing")</li>
                            <li>Future tense verb: <span className="bg-cardborder px-1 rounded-md">-įo-</span> (<span className="bg-cardborder px-1 rounded-md"><WordLink word={"mkr"} wordLink={"mkr"} /></span> + <span className="bg-cardborder px-1 rounded-md">-įo-</span> → mįkor, "will enjoy")</li>
                            <li>Future imperfective tense verb: <span className="bg-cardborder px-1 rounded-md">iąäi</span> (<span className="bg-cardborder px-1 rounded-md"><WordLink word={"cgž"} wordLink={"cgž"} /></span> + <span className="bg-cardborder px-1 rounded-md">iąäi</span> → icągäži, "will be uniting")</li>
                            <li>Verb nominalization: <span className="bg-cardborder px-1 rounded-md">äao-</span> (<span className="bg-cardborder px-1 rounded-md"><WordLink word={"klt"} wordLink={"klt"} /></span> + <span className="bg-cardborder px-1 rounded-md">äao-</span> → äkalot, "requirement")</li>
                            <li>Verb-to-adverb derivation: <span className="bg-cardborder px-1 rounded-md">äöä-</span> (<span className="bg-cardborder px-1 rounded-md"><WordLink word={"çnz"} wordLink={"çnz"} /></span> + <span className="bg-cardborder px-1 rounded-md">äöä-</span> → äçönäz, "lightly")</li>
                        </ul>
                    </span>
                    <span>
                        Modifiers take precedence over affixes when deriving meaning.
                    </span>
                    <h1 className="text-2xl font-[600]">Affixes</h1>
                    <span>
                        Affixes attach to stems using an apostrophe. Multiple suffixes follow a fixed order: Case → Mood → Modifier → Size → Article → Number. Prefixes follow placement from top to bottom closest to the stem. (ąšal'gahav, "destroyer," lit. "one who does the opposite of to build")
                    </span>
                    <span className="text-xl font-[600]">
                        Suffixes:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <span className="font-[600] ml-5.5">By case (noun, adjective, or particle)</span>
                            <li>Accusative: <span className="bg-cardborder px-1 rounded-md">ma</span></li>
                            <li>Dative: <span className="bg-cardborder px-1 rounded-md">ja</span></li>
                            <li>Possessor Genitive: <span className="bg-cardborder px-1 rounded-md">sö</span></li>
                            <li>Possessed Genitive: <span className="bg-cardborder px-1 rounded-md">lö</span></li>
                            <span className="font-[600] ml-5.5">By mood (verb)</span>
                            <li>Imperative: <span className="bg-cardborder px-1 rounded-md">hö</span></li>
                            <li>Conditional: <span className="bg-cardborder px-1 rounded-md">sä</span></li>
                            <li>Narrow Optative: <span className="bg-cardborder px-1 rounded-md">fä</span></li>
                            <li>Broad Optative: <span className="bg-cardborder px-1 rounded-md">vä</span></li>
                            <li>Jussive: <span className="bg-cardborder px-1 rounded-md">ra</span></li>
                            <li>Potential: <span className="bg-cardborder px-1 rounded-md">ga</span></li>
                            <span className="font-[600] ml-5.5">By modifier (any but particle)</span>
                            <li>Adjectivization: <span className="bg-cardborder px-1 rounded-md">ha</span></li>
                            <li>Demonymization: <span className="bg-cardborder px-1 rounded-md">rä</span></li>
                            <span className="font-[600] ml-5.5">By size (any but particle)</span>
                            <li>Diminutive: <span className="bg-cardborder px-1 rounded-md">dä</span></li>
                            <li>Augmentative: <span className="bg-cardborder px-1 rounded-md">gä</span></li>
                            <span className="font-[600] ml-5.5">By article (noun)</span>
                            <li>Definite: <span className="bg-cardborder px-1 rounded-md">ta</span></li>
                            <li>Indefinite: <span className="bg-cardborder px-1 rounded-md">ka</span></li>
                            <span className="font-[600] ml-5.5">By number (noun or adjective)</span>
                            <li>Plural: <span className="bg-cardborder px-1 rounded-md">j</span> (exempt from apostrophe rule)</li>
                        </ul>
                    </span>
                    <span className="text-xl font-[600]">
                        Prefixes:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li>Antonymization: <span className="bg-cardborder px-1 rounded-md">al</span> (produces the opposite meaning)</li>
                            <li>Agentive derivation: <span className="bg-cardborder px-1 rounded-md">ąš</span></li>
                            <li>Proper noun indicator particle: <span className="bg-cardborder px-1 rounded-md">ök</span> (optional usage)</li>
                        </ul>
                    </span>
                    <h1 className="text-2xl font-[600]">Sentence Structure</h1>
                    <ul className="list-disc list-inside">
                        <li>Sentences mainly follow subject-verb-object order but can change to place emphasis on other words.</li>
                        <li>Prepositions precede the object: Subject Verb Preposition Object.</li>
                        <li>Adverbs can precede or follow verbs.</li>
                        <li>Preceded words are used for emphasis.</li>
                        <li>Interrogative sentences are formed by using the particle <span className="bg-cardborder px-1 rounded-md"><WordLink word={"čo"} wordLink={"čo"} /></span> after what is interrogated. (<span className="bg-cardborder px-1 rounded-md">Ti omikarä čo'ma?</span> means "What do you want?" However, we can change the placement to this <span className="bg-cardborder px-1 rounded-md">Ti omikarä čo äta'ma?</span>, which means "Do you <span className="font-[600]">want</span> this?" or change it to <span className="bg-cardborder px-1 rounded-md">Ti čo omikarä äta'ma?</span>, which means "Do <span className="font-[600]">you</span> want this?")</li>
                    </ul>
                    <span className="text-xl font-[600]">
                        Negation:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li>Word-level negation: prefix <span className="bg-cardborder px-1 rounded-md">al</span> creates antonyms.</li>
                            <li>Clause-level negation: particle <span className="bg-cardborder px-1 rounded-md"><WordLink word={"nä"} wordLink={"nä"} /></span> expresses "not" or "no."</li>
                            <li>Both may co-occur for emphasis.</li>
                        </ul>
                    </span>
                    <h1 className="text-2xl font-[600]">Word Formation</h1>
                    <ul className="list-disc list-inside">
                        <li>Two roots: Take the first consonant of the first root, the third consonant of the second root, and choose the second consonant from your root of choice. (For <span className="bg-cardborder px-1 rounded-md">çhb</span>, c<sub>1</sub> → ç and c<sub>2</sub> → h. For <span className="bg-cardborder px-1 rounded-md">ňjk</span>, c<sub>3</sub> → k. With that information we know that <span className="bg-cardborder px-1 rounded-md">çhb</span> + <span className="bg-cardborder px-1 rounded-md">ňjk</span> = <span className="bg-cardborder px-1 rounded-md">çhk</span>, "house, nostalgic place")</li>
                        <li>Three roots: Take the respective consonant from each root in sequence.</li>
                        <li>Combination words appear in the dictionary with a modifier applied. This doesn't mean the only available conjugation for that combination is the one presented. Combination words still function as roots.</li>
                    </ul>
                    <h1 className="text-2xl font-[600]">Writing and Script</h1>
                    <ul className="list-disc list-inside">
                        <li>Stress is assumed and not marked in writing.</li>
                        <li>Punctuation follows Latin conventions: . , ? ! - : ; "…"</li>
                        <li>The apostrophe <span className="bg-cardborder px-1 rounded-md">'</span> marks the boundaries between the stem and the affixes and it's mandatory in writing.</li>
                        <li>Äšakap has its own script but is primarily written in Latin.</li>
                    </ul>
                    <h1 className="text-2xl font-[600]">Pragmatics and Usage</h1>
                    <ul className="list-disc list-inside">
                        <li>Only informal "you" exists.</li>
                        <li>Pronouns may be omitted when the verb carries the imperative or jussive mood modifier.</li>
                    </ul>
                    <h1 className="text-2xl font-[600]">Examples</h1>
                    <ul className="list-disc list-inside">
                        <li><span className="bg-cardborder px-1 rounded-md">afisąn'mata</span> = <span className="bg-cardborder px-1 rounded-md"><WordLink word={"fsn"} wordLink={"fsn"} /></span> + <span className="bg-cardborder px-1 rounded-md">aią-</span> + accusative + definite → "the person (object)"</li>
                        <li><span className="bg-cardborder px-1 rounded-md">al'omikarä</span> = <span className="bg-cardborder px-1 rounded-md"><WordLink word={"mkr"} wordLink={"mkr"} /></span> + <span className="bg-cardborder px-1 rounded-md">oiaä</span> + antonymization → "boring" (lit. "non-fun")</li>
                    </ul>
                    <span className="font-[600]">
                        Äšakap:
                        <br/>
                        <span className="font-normal">
                            <span className="bg-cardborder px-1 rounded-md">Ök'Arhäntin'rä ägavam'ta ičävopa ojidanä äfalar'ma ifädora'ma sa fät'ja äbaran'jaj isäpora'jaj: älagas, äçacat i äjadag.</span>
                        </span>
                    </span>
                    <span className="font-[600]">
                        Translation:
                        <br/>
                        <span className="font-normal">
                            "The Argentinian national government is a federal republic with three separate branches: legislative, executive and judicial."
                        </span>
                    </span>
                </div>
            </div>
        </>
    )
}