import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Dictionary from "./components/Dictionary"
import Documentation from "./components/Documentation"
import WordPage from "./components/WordPage"
import Stocks from "./components/Stocks"

export default function App() {
    return (
        <Routes>
            <Route path="/Lutinex/" element={<Home />} />
            <Route path="/Lutinex/language/dictionary" element={<Dictionary />} />
            <Route path="/Lutinex/language/about" element={<Documentation />} />
            <Route path="/Lutinex/country/stocks" element={<Stocks />} />
            <Route path="/Lutinex/language/words/:word" element={<WordPage />} />
        </Routes>
    )
}