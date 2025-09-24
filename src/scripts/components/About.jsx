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
                        Äšakap uses a phonetic alphabet with direct correspondence between letters and sounds. Each symbol represents exactly one sound, and there are no exceptions. Long vowels are prohibited, while consonant gemination can occur but does not change meaning; it only produces a slight phonetic pause similar to Italian double consonants.
                    </span>
                    <span className="font-[600]">
                        Alphabet:
                        <br/>
                        <span className="font-normal">
                            Aa, Ää, Ąą, Pp, Bb, Ff, Vv, Ww, Kk, Gg, Tt, Dd, Đđ, Zz, Žž, Ii, Įį, Hh, Jj, Ll, Mm, Nn, Ňň, Oo, Öö, Rr, Ss, Šš, Cc, Čč, Çç
                        </span>
                    </span>
                    <span className="font-[600]">
                        Phonetic representation:
                        <br/>
                        <span className="font-normal">
                            /a/, /e/, /ø/, /p/, /b/, /f/, /v/, /w/, /k/, /g/, /t/, /d/, /dʐ/, /z/, /ʐ/, /i/, /y/, /x/, /j/, /l/, /m/, /n/, /ɲ/, /o/, /u/, /r/, /s/, /ʂ/, /ts/, /tʂ/, /ks/
                        </span>
                    </span>
                    <h1 className="text-2xl font-[600]">Morphology and Word Types</h1>
                    <span>
                        Äšakap combines nonconcatenative morphology with concatenative elements. Words are built from roots called replaceable words and modified by patterns called modifiers.
                    </span>
                    <span className="text-xl font-[600]">
                        Word types:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li><span className="font-[600]">General words</span>: Fixed meaning, stressed on the first syllable, used for pronouns, conjunctions, and basic particles.</li>
                            <li><span className="font-[600]">Special words</span>: Fixed meaning for concrete nouns such as animals or proper concepts. Stressed on the first syllable.</li>
                            <li><span className="font-[600]">Replaceable words</span>: Tri-consonantal roots with polysemic meanings. Obligatory to use modifiers to express specific meanings. Stress placement follows rules based on the final consonant or vowel of the stem.</li>
                            <li><span className="font-[600]">Combination words</span>: Formed by combining two or three replaceable words to create new, compositional meanings. Commonly appear with a modifier already in place, but not obligatory to use.</li>
                        </ul>
                    </span>
                    <h1 className="text-2xl font-[600]">Stress Rules</h1>
                    <ul className="list-disc list-inside">
                        <li>For stems ending with a consonant, stress is placed on the penultimate syllable.</li>
                        <li>For stems ending with a vowel, stress is placed on the third-last syllable.</li>
                        <li>General words and special words are always stressed on the first syllable.</li>
                        <li>Proper nouns are stressed naturally.</li>
                        <li>Affixes do not affect stress placement.</li>
                    </ul>
                    <h1 className="text-2xl font-[600]">Modifiers (Patterns)</h1>
                    <span>
                        Modifiers are four-vowel patterns inserted into replaceable word roots. Empty slots in modifiers are maintained without removal, and vowel placement shifts according to the sequence.
                    </span>
                    <span className="text-xl font-[600]">
                        All modifiers:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li>Concrete noun: <span className="bg-cardborder px-1 rounded-md">aią-</span></li>
                            <li>Abstract noun: <span className="bg-cardborder px-1 rounded-md">äaa-</span></li>
                            <li>Locative nominalization: <span className="bg-cardborder px-1 rounded-md">-öoa</span></li>
                            <li>Adjective derivation: <span className="bg-cardborder px-1 rounded-md">iäoa</span></li>
                            <li>Color adjective derivation: <span className="bg-cardborder px-1 rounded-md">-äoą</span></li>
                            <li>Infinitive verb: <span className="bg-cardborder px-1 rounded-md">-aa-</span></li>
                            <li>Present tense verb: <span className="bg-cardborder px-1 rounded-md">oiaä</span></li>
                            <li>Present imperfective tense verb: <span className="bg-cardborder px-1 rounded-md">aąa-</span></li>
                            <li>Past tense verb: <span className="bg-cardborder px-1 rounded-md">oaö-</span></li>
                            <li>Future tense verb: <span className="bg-cardborder px-1 rounded-md">-įo-</span></li>
                            <li>Verb nominalization: <span className="bg-cardborder px-1 rounded-md">äao-</span></li>
                            <li>Verb-to-adverb derivation: <span className="bg-cardborder px-1 rounded-md">äöä-</span></li>
                            <li>Process nominalization: <span className="bg-cardborder px-1 rounded-md">öiä-</span></li>
                        </ul>
                    </span>
                    <span>
                        Modifiers take precedence over affixes when deriving specific meanings from replaceable words.
                    </span>
                    <h1 className="text-2xl font-[600]">Affixes</h1>
                    <span>
                        Affixes are attached to stems with an apostrophe separating prefixes or suffixes from the main stem. Multiple suffixes are ordered according to grammatical function.
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
                            <li>Proper noun indicator: <span className="bg-cardborder px-1 rounded-md">ök</span> (optional usage)</li>
                            <li>Agentive derivation: <span className="bg-cardborder px-1 rounded-md">ąš</span></li>
                        </ul>
                    </span>
                    <span>
                        Suffixes are applied in the used fixed order for clarity: Case → Modifier → Size → Article → Number.
                    </span>
                    <h1 className="text-2xl font-[600]">Sentence Structure</h1>
                    <ul className="list-disc list-inside">
                        <li>Sentences mainly follow subject-verb-object order but can change to place emphasis on other words.</li>
                        <li>Prepositions precede the object: Subject Verb Preposition Object.</li>
                        <li>Adjectives can go before or after the noun they modify and take its case and number.</li>
                        <li>Adverbs can go before or after the verb they modify.</li>
                    </ul>
                    <h1 className="text-2xl font-[600]">Word Formation</h1>
                    <ul className="list-disc list-inside">
                        <li>Two roots: Take the first consonant of the first root, the third consonant of the second root, and choose a second consonant to combine.</li>
                        <li>Three roots: Take the respective consonant from each root in sequence.</li>
                        <li>Apply a new modifier to the combined stem to create a distinct meaning.</li>
                    </ul>
                    <h1 className="text-2xl font-[600]">Examples</h1>
                    <ul className="list-disc list-inside">
                        <li><span className="bg-cardborder px-1 rounded-md">afisąn'mata</span> is made up of root <span className="bg-cardborder px-1 rounded-md"><WordLink word={"fsn"} wordLink={"fsn"} /></span>, modifier <span className="bg-cardborder px-1 rounded-md">aią-</span>, and the accusative and definite article suffixes. The meaning is "the people (object)"</li>
                        <li><span className="bg-cardborder px-1 rounded-md">al'omikarä</span> is made up of root <span className="bg-cardborder px-1 rounded-md"><WordLink word={"mkr"} wordLink={"mkr"} /></span>, modifier <span className="bg-cardborder px-1 rounded-md">oiaä</span>, and the antonymization prefix. The meaning is "boring" (lit. "non-fun")</li>
                    </ul>
                    <span className="font-[600]">
                        An example sentence:
                        <br/>
                        <span className="font-normal">
                            <span className="bg-cardborder px-1 rounded-md">Ök'Arhäntin'sörä ägavam'ta ičävopa ojidanä äfalar'ma ifädora'ma sa fät äbaranj isäporaj: älagas, äçacat i äjadag.</span>
                        </span>
                    </span>
                    <span>
                        Which translates to: "The Argentinian national government is a federal republic with three separate branches: legislative, executive and judicial."
                    </span>
                </div>
            </div>
        </>
    )
}