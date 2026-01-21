import { useEffect } from "react"
import WordBox from "./WordBox"
import Navbar from "./Navbar"

export default function LevotinMCS() {
    useEffect(() => {
        document.title = "Ληβοτιν · MCS"
    })

    return (
        <>
            <Navbar gridEnabled={false} searchEnabled={false} filterEnabled={false} />
            <div className="flex flex-col items-stretch mt-2 mb-2 gap-2 mx-auto w-full max-w-[min(95vw,1500px)] md:max-w-[min(68vw,1500px)]">
                <div className="shadow-sm flex-1 flex flex-wrap border-0 md:border-2 gap-4 md:border-cardborder bg-dark md:bg-cardbg rounded-md duration-100 p-4 *:w-full">
                    <h1 className="text-4xl font-[600]">Morphophonological Change System (MCS)</h1>
                    <span>
                        Levotin uses a rule-based morphophonological change system (MCS) to model phonological alternations triggered by morpheme interaction. These changes are defined as patterns, which apply iteratively to morphemes explicitly tagged with them.
                    </span>
                    <span>
                        Patterns are not global: only morphemes marked with a given pattern participate in its application. There is only one exception, talked about later.
                    </span>
                    <h1 className="text-3xl font-[600]">Pattern Notation</h1>
                    <span>
                        Patterns are written in the form:
                    </span>
                    <span className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                        X → Y ? Z
                    </span>
                    <span>
                        <strong>Definition:</strong> X turns into Y when condition Z is met.
                    </span>
                    <span>
                        These rules operate on phonemic strings at morpheme boundaries.
                    </span>
                    <h1 className="text-2xl font-[600]">Special Symbols</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-max border-collapse border-cardborder border-2 text-[16px] **:border-2 **:border-cardborder **:px-2">
                            <tr>
                                <th>Symbol</th>
                                <th>Meaning</th>
                            </tr>
                            <tr><td>#</td><td>Morpheme boundary</td></tr>
                            <tr><td>_</td><td>Location of X (the segment being replaced)</td></tr>
                            <tr><td>@</td><td>Null segment (epenthesis / insertion)</td></tr>
                        </table>
                    </div>
                    <h1 className="text-2xl font-[600]">Basic Examples</h1>
                    <h1 className="text-xl font-[600]">Unconditional change</h1>
                    <span className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                        t → d
                    </span>
                    <span>
                        <WordBox word={"t"} /> becomes <WordBox word={"d"} />.
                    </span>
                    <h1 className="text-xl font-[600]">Final position</h1>
                    <span className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                        t → d ? t#
                    </span>
                    <span>
                        Final <WordBox word={"t"} /> becomes <WordBox word={"d"} />.
                    </span>
                    <h1 className="text-xl font-[600]">Following segment</h1>
                    <span className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                        t → d ? _e
                    </span>
                    <span>
                        <WordBox word={"t"} /> becomes <WordBox word={"d"} /> when followed by <WordBox word={"e"} />.
                    </span>
                    <h1 className="text-xl font-[600]">Across morpheme boundary</h1>
                    <span className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                        t → d ? e#_
                    </span>
                    <span>
                        <WordBox word={"t"} /> becomes <WordBox word={"d"} /> when the previous morphemee ends in <WordBox word={"e"} />.
                    </span>
                    <h1 className="text-2xl font-[600]">Logical Grouping</h1>
                    <h1 className="text-xl font-[600]">Lists (OR conditions)</h1>
                    <span>
                        Lists are written as <WordBox word={"(A,B,C)"} /> and mean A or B or C.
                    </span>
                    <span className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                        t → d ? _(e,i)
                    </span>
                    <span>
                        <WordBox word={"t"} /> becomes <WordBox word={"d"} /> before <WordBox word={"e"} /> or <WordBox word={"i"} />.
                    </span>
                    <span className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                        t → d ? (_e#, #_i)
                    </span>
                    <span>
                        <WordBox word={"t"} /> becomes <WordBox word={"d"} /> when:
                        <ul className="list-disc list-inside">
                            <li>followed by <WordBox word={"e"} /> at morpheme end, or</li>
                            <li>starting a morpheme and followed by <WordBox word={"i"} />.</li>
                        </ul>
                    </span>
                    <h1 className="text-2xl font-[600]">Parallel Substitutions</h1>
                    <span>
                        Parallel lists apply corresponding substitutions:
                    </span>
                    <span className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                        (t,k,p) → (d,g,b) ? _(e,i)
                    </span>
                    <div className="overflow-x-auto">
                        <table className="min-w-max border-collapse border-cardborder border-2 text-[16px] **:border-2 **:border-cardborder **:px-2">
                            <tr>
                                <th>Input</th>
                                <th>Output</th>
                            </tr>
                            <tr><td>t</td><td>d</td></tr>
                            <tr><td>k</td><td>g</td></tr>
                            <tr><td>p</td><td>b</td></tr>
                        </table>
                    </div>
                    <span>
                        Applied when followed by <WordBox word={"e"} /> or <WordBox word={"i"} />.
                    </span>
                    <h1 className="text-2xl font-[600]">Context-Sensitive Mapping</h1>
                    <span>
                        Parallelism can also apply between Y and Z:
                    </span>
                    <span className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                        a → (e,i) ? (t,k)_
                    </span>
                    <ul className="list-disc list-inside">
                        <li><WordBox word={"a → e"} /> when preceded by <WordBox word={"t"} /></li>
                        <li><WordBox word={"a → i"} /> when preceded by <WordBox word={"k"} /></li>
                    </ul>
                    <h1 className="text-2xl font-[600]">Variables</h1>
                    <span>
                        Capital letters (<WordBox word={"A"} />, <WordBox word={"B"} />, etc.) act as local placeholders.
                    </span>
                    <span className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                        t → A ? A#_
                    </span>
                    <span>
                        <WordBox word={"t"} /> becomes whatever phoneme ended the previous morpheme.
                    </span>
                    <span className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                        A → d ? _#
                    </span>
                    <span>
                        Any final phoneme becomes <WordBox word={"d"} />.
                    </span>
                    <h1 className="text-2xl font-[600]">Predefined Variable Sets</h1>
                    <span>
                        Levotin defines the following built-in phoneme classes:
                    </span>
                    <div className="overflow-x-auto">
                        <table className="min-w-max border-collapse border-cardborder border-2 text-[16px] **:border-2 **:border-cardborder **:px-2">
                            <tr>
                                <th>Variable</th>
                                <th>Meaning</th>
                            </tr>
                            <tr><td>$C</td><td>Single consonants</td></tr>
                            <tr><td>$G</td><td>Geminate consonants</td></tr>
                            <tr><td>$V</td><td>All vowels</td></tr>
                            <tr><td>$S</td><td>Single vowels</td></tr>
                            <tr><td>$J</td><td>Geminate vowels</td></tr>
                            <tr><td>$L</td><td>Diphthongs and $J</td></tr>
                        </table>
                    </div>
                    <span>
                        Example:
                    </span>
                    <span className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                        $L → $S ? _
                    </span>
                    <span>
                        Long vowels shorten in all contexts. (Diphtongs would map to the first vowel of the pair.)
                    </span>
                    <h1 className="text-2xl font-[600]">Variable Scope Restriction</h1>
                    <span>
                        Variables may be constrained using:
                    </span>
                    <span className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                        A{"<$S>"}
                    </span>
                    <span>
                        Meaning: A may only range over $S.
                    </span>
                    <span>
                        Example:
                    </span>
                    <span className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                        A{"<$S>"} → $J ? (b,g,d)_
                    </span>
                    <span>
                        Any short vowel becomes geminate before <WordBox word={"b"} />, <WordBox word={"g"} />, or <WordBox word={"d"} />.
                    </span>
                    <h1 className="text-2xl font-[600]">Null segment (@)</h1>
                    <span>
                        The null symbol represents epenthesis.
                    </span>
                    <span className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                        @ → d ? e_i
                    </span>
                    <span>
                        Insert <WordBox word={"d"} /> between <WordBox word={"e"} /> and <WordBox word={"i"} />.
                    </span>
                    <h1 className="text-3xl font-[600]">Pattern Application Rules</h1>
                    <ul className="list-disc list-inside">
                        <li>Patterns apply only to morphemes tagged with them in the dictionary, except a certain category.</li>
                        <li>Patterns are applied iteratively, until no further changes are possible.</li>
                        <li>Pattern order is controlled by priority indices.</li>
                    </ul>
                    <h1 className="text-2xl font-[600]">Pattern Priority System</h1>
                    <span>
                        Patterns are labeled as: <WordBox word={"X/Y"} />
                        <ul className="list-disc list-inside">
                            <li>X: priority tier (higher = earlier)</li>
                            <li>Y: order within the same tier</li>
                        </ul>
                    </span>
                    <span>
                        Rules:
                    </span>
                    <ul className="list-disc list-inside">
                        <li>3/1 would apply before 2/1, which applies before 1/1</li>
                        <li>Patterns with the same X may co-apply</li>
                        <li>If two same-priority patterns conflict, the earlier-tagged pattern applies first</li>
                        <li><strong>If a pattern's X is a G, it is applied to all morphemes, having the highest priority</strong></li>
                    </ul>
                    <h1 className="text-3xl font-[600]" id="pattern">Levotin MCS Patterns</h1>
                    <h1 className="text-2xl font-[600]">Priority 1</h1>
                    <span className="flex flex-col gap-y-2">
                        <code className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                            A{"<$C>"} → B{"<$C>"} ? _#B (1/1)
                        </code>
                        <code className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                            A{"<$C>"} → B{"<$C>"} ? B#_ (1/2)
                        </code>
                    </span>
                    <h1 className="text-2xl font-[600]">Priority 2</h1>
                    <span className="flex flex-col gap-y-2">
                        <code className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                            A{"<$C>"} → (τ,δ) ? (τ,δ)#_ (2/1)
                        </code>
                    </span>
                    <h1 className="text-2xl font-[600]">Priority G</h1>
                    <span className="flex flex-col gap-y-2">
                        <code className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                            @ → ν ? ($S_#$L, $L#_$S) (G/1)
                        </code>
                        <code className="bg-dark/50 rounded-md px-2 py-1 font-mono max-w-fit">
                            @ → ι ? $C_#$G (G/2)
                        </code>
                    </span>
                </div>
            </div>
        </>
    )
}