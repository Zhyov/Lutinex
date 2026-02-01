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
                            <tr><td>β</td><td>/β/</td><td>/v/ and /b/ are an allophones</td><td>b or v</td></tr>
                            <tr><td>γ</td><td>/ɣ/</td><td>/g/ is an allophone</td><td>g</td></tr>
                            <tr><td>δ</td><td>/ð/</td><td>/d/ is an allophone</td><td>d</td></tr>
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
                            <tr><td>τ</td><td>/t/</td><td>specifically /t̪/</td><td>t</td></tr>
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
                            <tr><td>β m p ɸ</td><td>ð l n ɾ s t</td><td>ɣ k x</td></tr>
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
                        <li>Perfective aspect is zero-marked by default</li>
                        <li>Dual and plural are overtly marked</li>
                    </ul>
                    <h1 className="text-2xl font-[600]">Nominal Morphology</h1>
                    <span>
                        Nouns carry minimal morphology. Grammatical relations are not marked on nouns but on the verb, apart from the genitive marker <WordBox word={"μεκ"} />.
                    </span>
                    <h1 className="text-xl font-[600]">Nominal Template</h1>
                    <span className="font-mono font-[600] text-sm">
                        Root<br />
                        (Number)<br />
                        (Genitive)<br />
                        (Quantifier)
                    </span>
                    <span>
                        Nouns appear before the verbal complex when overt but may be omitted entirely.
                    </span>
                    <div className="overflow-x-auto">
                        <table className="min-w-max border-collapse border-cardborder border-2 text-[16px] **:border-2 **:border-cardborder **:px-2">
                            <tr>
                                <th>Suffix</th>
                                <th>Function</th>
                            </tr>
                            <tr><td>φυλ</td><td>dual</td></tr>
                            <tr><td>τυχ</td><td>plural</td></tr>
                            <tr><td>μεκ</td><td>genitive</td></tr>
                            <tr><td>κκις</td><td>universal quantifier ("every")</td></tr>
                        </table>
                    </div>
                    <h1 className="text-2xl font-[600]">Verbal Morphology</h1>
                    <span>
                        The verb is the grammatical center of the clause. All argument indexing, valency changes, aspect, modality, polarity, tense, and mood are expressed within a single phonological word.
                    </span>
                    <span>
                        Each verbal complex follows a fixed morphological order. Every slot has exactly one grammatical function.
                    </span>
                    <h1 className="text-xl font-[600]">Canonical Verbal Template</h1>
                    <span className="font-mono font-[600] text-sm">
                        (Incorporated Nominal)<br />
                        (Valency)<br />
                        (Object Slot)<br />
                        Verb Root<br />
                        (Aspect)<br />
                        (Modal)<br />
                        (Negator)<br />
                        Tense<br />
                        Subject/Mood Slot
                    </span>
                    <span>
                        Not all slots are required. Optional slots are indicated in parentheses. The focused nominal slot is used for topicalization and focus constructions.
                    </span>
                    <h1 className="text-xl font-[600]">Slot Descriptions</h1>
                    <h1 className="text-lg font-[600]">Incorporated Nominal</h1>
                    <span>
                        Lexical objects may be phonologically incorporated before the verb. These behave as part of the verbal word. <WordBox word={"βυς"} /> may attach after the lexical object to mark focus.
                    </span>
                    <h1 className="text-lg font-[600]">Valency</h1>
                    <span>
                        Changes argument structure or promotes an oblique participant (recipient, instrument, beneficiary, etc.) to object status with the applicative marker <WordBox word={"λα"} />. Valency markers occur before the object slot, because they determine which participant becomes the indexed object.
                    </span>
                    <h1 className="text-lg font-[600]">Object Slot</h1>
                    <span>
                        This slot may contain a pronominal marker, the anaphoric marker, or an incorporated lexical noun. These elements behave as bound arguments and form part of the same phonological word as the verb.
                    </span>
                    <span>
                        Representative pronominal forms:
                    </span>
                    <ul className="list-disc list-inside font-normal text-[16px]">
                        <li>1st person: <WordBox word={"μηχ"} /></li>
                        <li>2nd person: <WordBox word={"βαπ"} /></li>
                        <li>3rd person masculine: <WordBox word={"χιγ"} /></li>
                        <li>3rd person feminine: <WordBox word={"ννητ"} /></li>
                        <li>3rd person neuter: <WordBox word={"χας"} /></li>
                    </ul>
                    <h1 className="text-lg font-[600]">Verb Root</h1>
                    <span>
                        Lexical predicate, which is required.
                    </span>
                    <h1 className="text-lg font-[600]">Aspect</h1>
                    <span>
                        Internal temporal structure. <WordBox word={"καυ"} /> marks imperfective/ongoing aspect.
                    </span>
                    <h1 className="text-lg font-[600]">Modality</h1>
                    <span>
                        Ability or potentiality. <WordBox word={"ωπ"} /> marks potential/ability modality.
                    </span>
                    <h1 className="text-lg font-[600]">Negator</h1>
                    <span>
                        Verbal polarity. <WordBox word={"υν"} /> negates the verb.
                    </span>
                    <h1 className="text-lg font-[600]">Tense</h1>
                    <span>
                        Absolute time reference. Levotin has four tenses:
                    </span>
                    <div className="overflow-x-auto">
                        <table className="min-w-max border-collapse border-cardborder border-2 text-[16px] **:border-2 **:border-cardborder **:px-2">
                            <tr>
                                <th>Morpheme</th>
                                <th>Tense</th>
                            </tr>
                            <tr><td>ος</td><td>infinitive</td></tr>
                            <tr><td>ης</td><td>present</td></tr>
                            <tr><td>ις</td><td>past</td></tr>
                            <tr><td>ως</td><td>future</td></tr>
                        </table>
                    </div>
                    <h1 className="text-lg font-[600]">Subject/Mood Slot</h1>
                    <span>
                        This slot may contain: a pronominal marker, a question (σ-pronoun) form, the anaphoric marker, a lexical noun used as an overt subject, or an imperative marker.
                    </span>
                    <span>
                        Representative pronominal forms:
                    </span>
                    <ul className="list-disc list-inside font-normal text-[16px]">
                        <li>1st person: <WordBox word={"λοφ"} /></li>
                        <li>2nd person: <WordBox word={"λεφ"} /></li>
                        <li>3rd person masculine: <WordBox word={"λινυφ"} /></li>
                        <li>3rd person feminine: <WordBox word={"λιναφ"} /></li>
                        <li>3rd person neuter: <WordBox word={"λινηφ"} /></li>
                    </ul>
                    <h1 className="text-lg font-[600]">Ordering Principle</h1>
                    <span>
                        Outer morphology introduces participants and argument structure, the root expresses the event, and inner suffixes modify how the event unfolds (aspect, modality, negation, tense). The final position anchors the clause with mood or agreement.
                    </span>
                    <h1 className="text-xl font-[600]">Examples</h1>
                    <span className="text-lg font-[600]">
                        Example 1: Simple
                    </span>
                    <span>
                        <strong>Levotin:</strong> <WordBox word={"Πυιςλοφ"} />
                    </span>
                    <span>
                        <strong>Latin:</strong> <WordBox word={"Pu-is-lof"} />
                    </span>
                    <span>
                        <strong>Gloss:</strong> <WordBox word={"see-PST-1SG.N"} />
                    </span>
                    <span>
                        Translation: "I saw"
                    </span>
                    <span className="text-lg font-[600]">
                        Example 2: With object
                    </span>
                    <span>
                        <strong>Levotin:</strong> <WordBox word={"Χιγπυιςλοφ"} />
                    </span>
                    <span>
                        <strong>Latin:</strong> <WordBox word={"Hig-pu-is-lof"} />
                    </span>
                    <span>
                        <strong>Gloss:</strong> <WordBox word={"3SG.M-see-PST-1SG.N"} />
                    </span>
                    <span>
                        Translation: "I saw him"
                    </span>
                    <span className="text-lg font-[600]">
                        Example 3: With applicative
                    </span>
                    <span>
                        <strong>Levotin:</strong> <WordBox word={"Ννητλαχασδωνισλοφ"} />
                    </span>
                    <span>
                        <strong>Latin:</strong> <WordBox word={"Nneet-la-has-doo-(n)is-lof"} />
                    </span>
                    <span>
                        <strong>Gloss:</strong> <WordBox word={"3SG.F-APL-3SG.N-give-PST-1SG.N"} />
                    </span>
                    <span>
                        Translation: "I gave it to her"
                    </span>
                    <span className="text-lg font-[600]">
                        Example 4: With multiple morphology
                    </span>
                    <span>
                        <strong>Levotin:</strong> <WordBox word={"Χιγλαταγικκαυνωπυνησλοφ"} />
                    </span>
                    <span>
                        <strong>Latin:</strong> <WordBox word={"Hig-la-ta-gik-kau-(n)oop-un-ees-lof"} />
                    </span>
                    <span>
                        <strong>Gloss:</strong> <WordBox word={"3SG.M-APL-DIST-talk-NPFV-ABIL-NEG-PRS-1SG.N"} />
                    </span>
                    <span>
                        Translation: "I cannot be talking to him about that"
                    </span>
                    <span className="text-lg font-[600]">
                        Example 5: Imperative
                    </span>
                    <span>
                        <strong>Levotin:</strong> <WordBox word={"Πυνησραγ"} />
                    </span>
                    <span>
                        <strong>Latin:</strong> <WordBox word={"Pu-(n)ees-rag"} />
                    </span>
                    <span>
                        <strong>Gloss:</strong> <WordBox word={"look-PRS-IMP.2SG"} />
                    </span>
                    <span>
                        Translation: "Look!"
                    </span>
                    <h1 className="text-2xl font-[600]">Anaphoric Reference</h1>
                    <span>
                        Levotin uses a general anaphoric element <WordBox word={"σο"} /> to avoid repeating previously mentioned arguments. This marker does not encode person, number, or grammatical role. Instead, it refers to a previously established argument. Its interpretation is determined by the slot it occupies and typically resolves to the nearest compatible antecedent.
                    </span>
                    <span className="text-lg font-[600]">
                        Example
                    </span>
                    <span>
                        <strong>Levotin:</strong> <WordBox word={"Μηχλιμησλοφταρπινησσο"} />
                    </span>
                    <span>
                        <strong>Latin:</strong> <WordBox word={"Meeh-lim-ees-lof-tar-pin-ees-so"} />
                    </span>
                    <span>
                        <strong>Gloss:</strong> <WordBox word={"1SG.N-like-PRS-1SG.N-because-beautiful-PRS-ANA"} />
                    </span>
                    <span>
                        Translation: "I like myself because (I) am beautiful"
                    </span>
                    <h1 className="text-3xl font-[600]">Syntax</h1>
                    <span>
                        Levotin syntax is built around a fixed-order verbal assembly, comparable to a sequence of morphological blocks. Each block has a defined grammatical role, and together they form a single phonological and morphological word. There is no phrase-level case syntax; argument structure is expressed entirely through bound morphology on the verb.
                    </span>
                    <h1 className="text-2xl font-[600]">Clause Linking</h1>
                    <span>
                        Because each clause is already a complete verbal word, conjunctions attach inline between two verbal complexes rather than forming separate particles. Clause linking therefore behaves morphologically rather than syntactically free.
                    </span>
                    <span className="font-mono font-[600] text-sm">
                        [Clause]-CONJ-[Clause]
                    </span>
                    <h1 className="text-xl font-[600]">Coordinating</h1>
                    <ul className="list-disc list-inside font-normal text-[16px]">
                        <li><WordBox word={"κα"} />: and</li>
                        <li><WordBox word={"ερ"} />: or</li>
                        <li><WordBox word={"ρα"} />: but</li>
                    </ul>
                    <h1 className="text-xl font-[600]">Subordinating</h1>
                    <ul className="list-disc list-inside font-normal text-[16px]">
                        <li><WordBox word={"ταρ"} />: because</li>
                        <li><WordBox word={"συλ"} />: if/when</li>
                        <li><WordBox word={"τοκ"} />: so that/therefore</li>
                        <li><WordBox word={"μεν"} />: while/during</li>
                    </ul>
                </div>
            </div>
        </>
    )
}