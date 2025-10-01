import { useEffect } from "react"
import WordBox from "./WordBox"
import Navbar from "./Navbar"

export default function About() {
    useEffect(() => {
        document.title = "Äšakap · About"
    })

    return (
        <>
            <Navbar gridEnabled={false} searchEnabled={false} filterEnabled={false} />
            <div className="flex flex-col items-stretch mt-2 mb-2 gap-2 mx-auto w-full max-w-[min(95vw,1500px)] md:max-w-[min(68vw,1500px)]">
                <div className="shadow-sm flex-1 flex flex-wrap border-0 md:border-2 gap-4 md:border-cardborder bg-dark md:bg-cardbg rounded-md duration-100 p-4 *:w-full">
                    <h1 className="text-2xl font-[600]">Alphabet and Phonetics</h1>
                    <span>
                        Äšakap uses a phonetic alphabet with direct correspondence between letters and sounds. Each letter always corresponds to its phoneme, there are no allophones or silent letters.
                    </span>
                    <span className="text-xl font-[600]">
                        Alphabet:
                        <br/>
                        <span className="font-normal text-[16px]">
                            Aa, Ää, Ąą, Pp, Bb, Ƀƀ, Ff, Vv, Ww, Kk, Gg, Tt, Dd, Đđ, Zz, Žž, Ii, Įį, Hh, Jj, Ɉɉ, Ll, Łł, Mm, Nn, Ňň, Oo, Öö, Rr, Ss, Šš, Cc, Čč, Çç
                        </span>
                    </span>
                    <div className="text-xl font-[600]">
                        Grapheme to phoneme correspondence
                        <br/>
                        <div className="overflow-x-auto">
                        <table className="min-w-max border-collapse border-cardborder border-2 text-[16px] **:border-2 **:border-cardborder **:px-2">
                            <tr>
                                <th>Grapheme</th>
                                <th>Phoneme</th>
                            </tr>
                            <tr><td>a</td><td>[a]</td></tr>
                            <tr><td>ä</td><td>[e]</td></tr>
                            <tr><td>ą</td><td>[ø]</td></tr>
                            <tr><td>p</td><td>[p]</td></tr>
                            <tr><td>b</td><td>[b]</td></tr>
                            <tr><td>ƀ</td><td>[ps]</td></tr>
                            <tr><td>f</td><td>[f]</td></tr>
                            <tr><td>v</td><td>[v]</td></tr>
                            <tr><td>w</td><td>[w]</td></tr>
                            <tr><td>k</td><td>[k]</td></tr>
                            <tr><td>g</td><td>[g]</td></tr>
                            <tr><td>t</td><td>[t]</td></tr>
                            <tr><td>d</td><td>[d]</td></tr>
                            <tr><td>đ</td><td>[d͡ʐ]</td></tr>
                            <tr><td>z</td><td>[z]</td></tr>
                            <tr><td>ž</td><td>[ʐ]</td></tr>
                            <tr><td>i</td><td>[i]</td></tr>
                            <tr><td>į</td><td>[y]</td></tr>
                            <tr><td>h</td><td>[x]</td></tr>
                            <tr><td>j</td><td>[j]</td></tr>
                            <tr><td>ɉ</td><td>[ɮ]</td></tr>
                            <tr><td>l</td><td>[l]</td></tr>
                            <tr><td>ł</td><td>[ɬ]</td></tr>
                            <tr><td>m</td><td>[m]</td></tr>
                            <tr><td>n</td><td>[n]</td></tr>
                            <tr><td>ň</td><td>[ɲ]</td></tr>
                            <tr><td>o</td><td>[o]</td></tr>
                            <tr><td>ö</td><td>[u]</td></tr>
                            <tr><td>r</td><td>[r]</td></tr>
                            <tr><td>s</td><td>[s]</td></tr>
                            <tr><td>š</td><td>[ʂ]</td></tr>
                            <tr><td>c</td><td>[ts]</td></tr>
                            <tr><td>č</td><td>[t͡ʂ]</td></tr>
                            <tr><td>ç</td><td>[ks]</td></tr>
                        </table>
                        </div>
                    </div>
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
                            <li>Example: <WordBox word={"zašaf'fä"} /> [ˈzaʂafːe] differs from <WordBox word={"zašafä"} /> [ˈzaʂafe]. The geminate /fː/ signals the start of the suffix "fä" merging with the "f" at the end of "zašaf." Mispronouncing it can lead to misinterpretation.</li>
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
                        Derivatives:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li>To create a new lexical unit from two independent stems, a hyphen links both words. The most common usage is with the word <WordBox word={"čom"} link={true} wordLink={"čom"} /></li>
                            <li>Example: <WordBox word={"tįk-čom"} /> "everything" (every-thing)</li>
                            <li>The hyphen is only orthographic, not phonological. Functions as just one prosodic word, they decline like single words.</li>
                        </ul>
                    </span>
                    <div className="text-xl font-[600]">
                        Pronouns
                        <br/>
                        <div className="overflow-x-auto">
                        <table className="min-w-max border-collapse border-cardborder border-2 text-[16px] **:border-2 **:border-cardborder **:px-2">
                            <tr>
                                <th colSpan={2}>Pronoun</th>
                                <th>Singular</th>
                                <th>Plural</th>
                            </tr>
                            <tr>
                                <th colSpan={2}>1st</th>
                                <td>ja</td>
                                <td>jaj</td>
                            </tr>
                            <tr>
                                <th colSpan={2}>2nd</th>
                                <td>ti</td>
                                <td>tij</td>
                            </tr>
                            <tr>
                                <th rowSpan={3}>3rd</th>
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
                                <th>Neuter</th>
                                <td>ono</td>
                                <td>onoj</td>
                            </tr>
                        </table>
                        </div>
                    </div>
                    <div className="text-xl font-[600]">
                        Agreement rules:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li>Adjectives agree with their nouns in case and number. (See example below for <WordBox word={"afisąn"} /> "person" + <WordBox word={"igädosa"} /> "good")</li>
                            <li>Adjective agreement is the only one present.</li>
                        </ul>
                        <div className="overflow-x-auto">
                        <table className="min-w-max border-collapse border-cardborder border-2 text-[16px] **:border-2 **:border-cardborder **:px-2">
                            <tr>
                                <th colSpan={2}>Case</th>
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
                                <th rowSpan={2}>Genitive</th>
                                <th>Possessor</th>
                                <td>afisąn'sö igädosa'sö</td>
                                <td>afisąn'söj igädosa'söj</td>
                            </tr>
                            <tr>
                                <th>Possessed</th>
                                <td>afisąn'lö igädosa'lö</td>
                                <td>afisąn'löj igädosa'löj</td>
                            </tr>
                            <tr>
                                <th colSpan={2}>Instrumental</th>
                                <td>afisąn'ła igädosa'ła</td>
                                <td>afisąn'łaj igädosa'łaj</td>
                            </tr>
                            <tr>
                                <th colSpan={2}>Locative</th>
                                <td>afisąn'ca igädosa'ca</td>
                                <td>afisąn'caj igädosa'caj</td>
                            </tr>
                            <tr>
                                <th colSpan={2}>Vocative</th>
                                <td>afisąn'hä igädosa'hä</td>
                                <td>afisąn'häj igädosa'häj</td>
                            </tr>
                        </table>
                        </div>
                    </div>
                    <span>
                        For verbs, Äšakap marks tense and aspect with modifiers, while mood is expressed through suffixes. Together these produce a full Tense-Aspect-Mood system. (See examples below for the verb <WordBox word={"cžš"} /> "to write")
                    </span>
                    <div className="text-xl font-[600]">
                        Present tense
                        <br/>
                        <div className="overflow-x-auto">
                        <table className="min-w-max border-collapse border-cardborder border-2 text-[16px] **:border-2 **:border-cardborder **:px-2">
                            <tr>
                                <th rowSpan={2} colSpan={2}>Aspect</th>
                                <th rowSpan={2} colSpan={2}>Imperative</th>
                                <th rowSpan={2} colSpan={2}>Conditional</th>
                                <th colSpan={2}>Optative</th>
                                <th rowSpan={2} colSpan={2}>Jussive</th>
                                <th rowSpan={2} colSpan={2}>Potential</th>
                            </tr>
                            <tr>
                                <th>Narrow</th>
                                <th>Broad</th>
                            </tr>
                            <tr>
                                <th colSpan={2}>Imperfective</th>
                                <td colSpan={2}>acąžaš'hö</td>
                                <td colSpan={2}>acąžaš'sä</td>
                                <td>acąžaš'fä</td>
                                <td>acąžaš'vä</td>
                                <td colSpan={2}>acąžaš'ra</td>
                                <td colSpan={2}>acąžaš'ga</td>
                            </tr>
                            <tr>
                                <th colSpan={2}>Perfective</th>
                                <td colSpan={2}>ocižašä'hö</td>
                                <td colSpan={2}>ocižašä'sä</td>
                                <td>ocižašä'fä</td>
                                <td>ocižašä'vä</td>
                                <td colSpan={2}>ocižašä'ra</td>
                                <td colSpan={2}>ocižašä'ga</td>
                            </tr>
                        </table>
                        </div>
                    </div>
                    <span className="text-[18px] font-[600]">
                        Examples:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li><WordBox word={"Ja acąžaš'ga (fa) açihąk'cäta."} /> "I can write in the house."</li>
                            <li><WordBox word={"(Ti) acąžaš'hö!"} /> "Write!"</li>
                        </ul>
                    </span>
                    <div className="text-xl font-[600]">
                        Past tense
                        <br/>
                        <div className="overflow-x-auto">
                        <table className="min-w-max border-collapse border-cardborder border-2 text-[16px] **:border-2 **:border-cardborder **:px-2">
                            <tr>
                                <th rowSpan={2} colSpan={2}>Aspect</th>
                                <th rowSpan={2} colSpan={2}>Imperative</th>
                                <th rowSpan={2} colSpan={2}>Conditional</th>
                                <th colSpan={2}>Optative</th>
                                <th rowSpan={2} colSpan={2}>Jussive</th>
                                <th rowSpan={2} colSpan={2}>Potential</th>
                            </tr>
                            <tr>
                                <th>Narrow</th>
                                <th>Broad</th>
                            </tr>
                            <tr>
                                <th colSpan={2}>Imperfective</th>
                                <td colSpan={2}>äcäžišo'hö</td>
                                <td colSpan={2}>äcäžišo'sä</td>
                                <td>äcäžišo'fä</td>
                                <td>äcäžišo'vä</td>
                                <td colSpan={2}>äcäžišo'ra</td>
                                <td colSpan={2}>äcäžišo'ga</td>
                            </tr>
                            <tr>
                                <th colSpan={2}>Perfective</th>
                                <td colSpan={2}>ocažöš'hö</td>
                                <td colSpan={2}>ocažöš'sä</td>
                                <td>ocažöš'fä</td>
                                <td>ocažöš'vä</td>
                                <td colSpan={2}>ocažöš'ra</td>
                                <td colSpan={2}>ocažöš'ga</td>
                            </tr>
                        </table>
                        </div>
                    </div>
                    <span className="text-[18px] font-[600]">
                        Examples:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li><WordBox word={"On äcäžišo'ga äta'ma."} /> "He was able to write this."</li>
                            <li><WordBox word={"Ja ocažöš'sä na ti'ma."} /> "I would have written about you."</li>
                        </ul>
                    </span>
                    <div className="text-xl font-[600]">
                        Future tense
                        <br/>
                        <div className="overflow-x-auto">
                        <table className="min-w-max border-collapse border-cardborder border-2 text-[16px] **:border-2 **:border-cardborder **:px-2">
                            <tr>
                                <th rowSpan={2} colSpan={2}>Aspect</th>
                                <th rowSpan={2} colSpan={2}>Imperative</th>
                                <th rowSpan={2} colSpan={2}>Conditional</th>
                                <th colSpan={2}>Optative</th>
                                <th rowSpan={2} colSpan={2}>Jussive</th>
                                <th rowSpan={2} colSpan={2}>Potential</th>
                            </tr>
                            <tr>
                                <th>Narrow</th>
                                <th>Broad</th>
                            </tr>
                            <tr>
                                <th colSpan={2}>Imperfective</th>
                                <td colSpan={2}>icąžäši'hö</td>
                                <td colSpan={2}>icąžäši'sä</td>
                                <td>icąžäši'fä</td>
                                <td>icąžäši'vä</td>
                                <td colSpan={2}>icąžäši'ra</td>
                                <td colSpan={2}>icąžäši'ga</td>
                            </tr>
                            <tr>
                                <th colSpan={2}>Perfective</th>
                                <td colSpan={2}>cįžoš'hö</td>
                                <td colSpan={2}>cįžoš'sä</td>
                                <td>cįžoš'fä</td>
                                <td>cįžoš'vä</td>
                                <td colSpan={2}>cįžoš'ra</td>
                                <td colSpan={2}>cįžoš'ga</td>
                            </tr>
                        </table>
                        </div>
                    </div>
                    <span className="text-[18px] font-[600]">
                        Examples:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li><WordBox word={"Onoj icąžäši'fä (fa) acäžiši'cäka."} /> "They should be writing in a book (later)."</li>
                            <li><WordBox word={"Ona cįžoš'ra."} /> "Let her write (later)."</li>
                        </ul>
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
                        Modifiers are four-vowel patterns inserted into replaceable or combination word roots. Empty slots are retained and the vowels are shifted accordingly. They define the word's specific function or meaning. The schematic for a modifier is as follows, where C = consonant and V = vowel: V<sub>1</sub> C<sub>1</sub> V<sub>2</sub> C<sub>2</sub> V<sub>3</sub> C<sub>3</sub> V<sub>4</sub>. For example, if we take the replaceable root <WordBox word={"fsn"} /> (C<sub>1</sub> = f, C<sub>2</sub> = s, C<sub>3</sub> = n) and apply the modifier <WordBox word={"aią-"} /> (V<sub>1</sub> = a, V<sub>2</sub> = i, V<sub>3</sub> = ą, V<sub>4</sub> = -), it will result in the stem <WordBox word={"afisąn"} />, meaning "person." The hyphen represents an empty slot.
                    </span>
                    <span className="text-xl font-[600]">
                        All modifiers:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li>Concrete noun: <WordBox word={"aią-"} /> (<WordBox word={"fsn"} link={true} wordLink={"fsn"}/> + <WordBox word={"aią-"} /> → <WordBox word={"afisąn"} />, "person")</li>
                            <li>Abstract noun: <WordBox word={"äaa-"} /> (<WordBox word={"jdn"} link={true} wordLink={"jdn"}/> + <WordBox word={"äaa-"} /> → <WordBox word={"äjadan"} />, "existance")</li>
                            <li>Locative nominalization: <WordBox word={"-öoa"} /> (<WordBox word={"dtg"} link={true} wordLink={"dtg"}/> + <WordBox word={"-öoa"} /> → <WordBox word={"dötoga"} />, "trail")</li>
                            <li>Result nominalization: <WordBox word={"aäii"} /> (<WordBox word={"cžš"} link={true} wordLink={"cžš"}/> + <WordBox word={"aäii"} /> → <WordBox word={"acäžiši"} />, "book")</li>
                            <li>Adjective derivation: <WordBox word={"iäoa"} /> (<WordBox word={"gds"} link={true} wordLink={"gds"}/> + <WordBox word={"iäoa"} /> → <WordBox word={"igädosa"} />, "good")</li>
                            <li>Color adjective derivation: <WordBox word={"-äoą"} /> (<WordBox word={"blr"} link={true} wordLink={"blr"}/> + <WordBox word={"-äoą"} /> → <WordBox word={"bälorą"} />, "white")</li>
                            <li>Infinitive verb: <WordBox word={"-aa-"} /> (<WordBox word={"kmr"} link={true} wordLink={"kmr"}/> + <WordBox word={"-aa-"} /> → <WordBox word={"kamar"} />, "to digest")</li>
                            <li>Infinitive imperfective verb: <WordBox word={"-äi-"} /> (<WordBox word={"đčj"} link={true} wordLink={"đčj"}/> + <WordBox word={"-äi-"} /> → <WordBox word={"đäčij"} />, "to be isolating," no exact English translation as it doesn't exist)</li>
                            <li>Present tense verb: <WordBox word={"oiaä"} /> (<WordBox word={"klt"} link={true} wordLink={"klt"}/> + <WordBox word={"oiaä"} /> → <WordBox word={"okilatä"} />, "want")</li>
                            <li>Present imperfective tense verb: <WordBox word={"aąa-"} /> (<WordBox word={"lfd"} link={true} wordLink={"lfd"}/> + <WordBox word={"aąa-"} /> → <WordBox word={"aląfad"} />, "flying")</li>
                            <li>Past tense verb: <WordBox word={"oaö-"} /> (<WordBox word={"ghv"} link={true} wordLink={"ghv"}/> + <WordBox word={"oaö-"} /> → <WordBox word={"ogahöv"} />, "made")</li>
                            <li>Past imperfective tense verb: <WordBox word={"ääio"} /> (<WordBox word={"vtr"} link={true} wordLink={"vtr"}/> + <WordBox word={"ääio"} /> → <WordBox word={"ävätiro"} />, "was seeing")</li>
                            <li>Future tense verb: <WordBox word={"-įo-"} /> (<WordBox word={"mkr"} link={true} wordLink={"mkr"}/> + <WordBox word={"-įo-"} /> → <WordBox word={"mįkor"} />, "will enjoy")</li>
                            <li>Future imperfective tense verb: <WordBox word={"iąäi"} /> (<WordBox word={"cgž"} link={true} wordLink={"cgž"}/> + <WordBox word={"iąäi"} /> → <WordBox word={"icągäži"} />, "will be uniting")</li>
                            <li>Verb nominalization: <WordBox word={"äao-"} /> (<WordBox word={"klt"} link={true} wordLink={"klt"}/> + <WordBox word={"äao-"} /> → <WordBox word={"äkalot"} />, "requirement")</li>
                            <li>Verb-to-adverb derivation: <WordBox word={"äöä-"} /> (<WordBox word={"çnz"} link={true} wordLink={"çnz"}/> + <WordBox word={"äöä-"} /> → <WordBox word={"äçönäz"} />, "lightly")</li>
                        </ul>
                    </span>
                    <span>
                        Modifiers take precedence over affixes when deriving meaning.
                    </span>
                    <h1 className="text-2xl font-[600]">Affixes</h1>
                    <span>
                        Affixes attach to stems using an apostrophe. Multiple suffixes follow a fixed order: Case → Mood → Modifier → Size → Article → Number. Prefixes follow placement from top to bottom closest to the stem. (<WordBox word={"ąšal'gahav"} />, "destroyer," lit. "one who does the opposite of to build")
                    </span>
                    <span className="text-xl font-[600]">
                        Suffixes:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <span className="font-[600] ml-5.5">By case (noun, adjective, or particle)</span>
                            <li>Accusative: <WordBox word={"ma"} /></li>
                            <li>Dative: <WordBox word={"ja"} /></li>
                            <li>Possessor Genitive: <WordBox word={"sö"} /></li>
                            <li>Possessed Genitive: <WordBox word={"lö"} /></li>
                            <li>Instrumental: <WordBox word={"ła"} /></li>
                            <li>Locative: <WordBox word={"cä"} /></li>
                            <li>Vocative: <WordBox word={"hä"} /></li>
                            <span className="font-[600] ml-5.5">By mood (verb)</span>
                            <li>Imperative: <WordBox word={"hö"} /></li>
                            <li>Conditional: <WordBox word={"sä"} /></li>
                            <li>Narrow Optative: <WordBox word={"fä"} /></li>
                            <li>Broad Optative: <WordBox word={"vä"} /></li>
                            <li>Jussive: <WordBox word={"ra"} /></li>
                            <li>Potential: <WordBox word={"ga"} /></li>
                            <span className="font-[600] ml-5.5">By modifier (any but particle)</span>
                            <li>Adjectivization: <WordBox word={"ha"} /></li>
                            <li>Demonymization: <WordBox word={"rä"} /></li>
                            <span className="font-[600] ml-5.5">By size (any but particle)</span>
                            <li>Diminutive: <WordBox word={"dä"} /></li>
                            <li>Augmentative: <WordBox word={"gä"} /></li>
                            <span className="font-[600] ml-5.5">By article (noun)</span>
                            <li>Definite: <WordBox word={"ta"} /></li>
                            <li>Indefinite: <WordBox word={"ka"} /></li>
                            <span className="font-[600] ml-5.5">By number (noun or adjective)</span>
                            <li>Plural: <WordBox word={"j"} /> (exempt from apostrophe rule)</li>
                        </ul>
                    </span>
                    <span className="text-xl font-[600]">
                        Prefixes:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li>Antonymization: <WordBox word={"al"} /> (produces the opposite meaning)</li>
                            <li>Agentive derivation: <WordBox word={"ąš"} /></li>
                            <li>Proper noun indicator particle: <WordBox word={"ök"} link={true} wordLink={"ök"} /> (optional usage)</li>
                        </ul>
                    </span>
                    <span className="text-[18px] font-[600]">
                        Notes on suffixes:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li>The nominative case is zero-marked.</li>
                            <li>The indicative mood is zero-marked.</li>
                            <li>The singular number is zero-marked.</li>
                            <li>Only one apostrophe is used to separate the affix list from the stem. (<WordBox word={"zav'söta"} /> for "the dog's" instead of <WordBox word={"zav'sö'ta"} />.)</li>
                        </ul>
                    </span>
                    <h1 className="text-2xl font-[600]">Syntax</h1>
                    <ul className="list-disc list-inside">
                        <li>Sentences mainly follow subject-verb-object order but can change to place emphasis on other words.</li>
                        <li>Example: <WordBox word={"Ök'Ljam'ma ja ovatör"} /> meaning "I saw Liam" makes emphasis on seeing Liam specifically by altering SVO to be OSV.</li>
                        <li>Prepositions precede the object: Subject Verb Preposition Object.</li>
                        <li>Adverbs can precede or follow verbs.</li>
                        <li>Preceded words are used for emphasis.</li>
                        <li>Interrogative sentences are formed by using the particle <WordBox word={"čo"} link={true} wordLink={"čo"} /> after what is interrogated. (<WordBox word={"Ti omikarä čo'ma?"} /> means "What do you want?" However, we can change the placement to this <WordBox word={"Ti omikarä čo äta'ma?"} />, which means "Do you <span className="font-[600]">want</span> this?" or change it to <WordBox word={"Ti čo omikarä äta'ma?"} />, which means "Do <span className="font-[600]">you</span> want this?")</li>
                    </ul>
                    <span className="text-xl font-[600]">
                        Relative clauses:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li>Introduced by the particle <WordBox word={"na-čo"} /></li>
                            <li>The relative clause follows the noun it modifies.</li>
                            <li>Agreement is mantained.</li>
                            <li>There is no separate marker for defining and non-defining relative clauses. The distinction is made only by intonation in speech and by commas in writting.</li>
                            <li>Example of defining: <WordBox word={"Afisąn'ta na-čo igädosa ňįkog'ga mi'ma."} /> "The person who is good should help me."</li>
                            <li>Example of non-defining: <WordBox word={"Afisąn'ta, na-čo ovibadä ňäkig ƀan'maj, ňįkog'ga mi'ma."} /> "The person, who likes helping others, should help me."</li>
                        </ul>
                    </span>
                    <span className="text-xl font-[600]">
                        Complementary clauses:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li>Introduced by the particle <WordBox word={"çą"} link={true} wordLink={"çą"} /></li>
                            <li>Example: <WordBox word={"Ja ošinatä çą ja ovibadä'gä ätat'ma."} /> "I know that I really like that."</li>
                        </ul>
                    </span>
                    <span className="text-xl font-[600]">
                        Adverbial clauses:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li>Introduced by all adverbial clause particles like <WordBox word={"ho"} link={true} wordLink={"ho"} /> and <WordBox word={"gät"} link={true} wordLink={"gät"} /></li>
                            <li>Example: <WordBox word={"Ja nä ošinatä ho ja okilatä o nä äta'ma."} /> "I don't know if I want this or not."</li>
                        </ul>
                    </span>
                    <span className="text-xl font-[600]">
                        Negation:
                        <br/>
                        <ul className="list-disc list-inside font-normal text-[16px]">
                            <li>Word-level negation: prefix <WordBox word={"al"} /> creates antonyms.</li>
                            <li>Clause-level negation: particle <WordBox word={"nä"} link={true} wordLink={"nä"} /> expresses "not" or "no."</li>
                            <li>Double negation by using both types is used for emphasis.</li>
                            <li>Example: <WordBox word={"Ja nä ošinatä al'tįk-čom'ma."} /> "I don't know anything" (lit. "I not know nothing")</li>
                        </ul>
                    </span>
                    <h1 className="text-2xl font-[600]">Word Formation</h1>
                    <ul className="list-disc list-inside">
                        <li>Two roots: Take the first consonant of the first root, the third consonant of the second root, and choose the second consonant from your root of choice. (For <WordBox word={"çhb"} link={true} wordLink={"çhb"} />, C<sub>1</sub> → ç and C<sub>2</sub> → h. For <WordBox word={"ňjk"} link={true} wordLink={"ňjk"} />, C<sub>3</sub> → k. With that information we know that <WordBox word={"çhb"} /> + <WordBox word={"ňjk"} /> = <WordBox word={"çhk"} link={true} wordLink={"çhk"} />, "house, nostalgic place")</li>
                        <li>Three roots: Take the respective consonant from each root in sequence.</li>
                        <li>Combination words appear in the dictionary with a modifier applied. This doesn't mean the only available conjugation for that combination is the one presented. Combination words still function as roots.</li>
                    </ul>
                    <h1 className="text-2xl font-[600]">Writing and Script</h1>
                    <ul className="list-disc list-inside">
                        <li>Stress is assumed and not marked in writing.</li>
                        <li>Punctuation follows Latin conventions: . , ? ! - : ; "…"</li>
                        <li>The apostrophe <WordBox word={"'"} /> marks the boundaries between the stem and the affixes and it's mandatory in writing.</li>
                        <li>Äšakap has its own script but is primarily written in Latin. It can be observed through the dictionary.</li>
                    </ul>
                    <h1 className="text-2xl font-[600]">Pragmatics and Usage</h1>
                    <ul className="list-disc list-inside">
                        <li>Only informal "you" exists.</li>
                        <li>Pronouns may be omitted when the verb carries the imperative or jussive mood modifier. (Assumes 2nd person singular for imperative, 3rd person neuter singular for jussive)</li>
                    </ul>
                    <h1 className="text-2xl font-[600]">Examples</h1>
                    <ul className="list-disc list-inside">
                        <li><WordBox word={"afisąn'mata"} /> = <WordBox word={"fsn"} link={true} wordLink={"fsn"} /> + <WordBox word={"aią-"} /> + accusative + definite → "the person (object)"</li>
                        <li><WordBox word={"al'omikarä"} /> = <WordBox word={"mkr"} link={true} wordLink={"mkr"} /> + <WordBox word={"oiaä"} /> + antonymization → "boring" (lit. "non-fun")</li>
                    </ul>
                    <span className="font-[600]">
                        Äšakap:
                        <br/>
                        <span className="font-normal">
                            <WordBox word={"Ök'Arhäntin'rä ägavam'ta ičävopa ojidanä äfalar'ma ifädora'ma sa fät'ła äbaran'łaj isäpora'łaj: älagas, äçacat i äjadag."} />
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