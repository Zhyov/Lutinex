import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Dictionary from "./components/Dictionary"
import LevotinDictionary from "./components/LevotinDictionary"
import LevotinAbout from "./components/LevotinAbout"
import LevotinWordPage from "./components/LevotinWordPage"
import About from "./components/About"
import WordPage from "./components/WordPage"
import StocksPage from "./components/StocksPage"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import UserPage from "./components/UserPage"
import CompanyPage from "./components/CompanyPage"
import UserSearch from "./components/UserSearch"


export default function App() {
    return (
        <Routes>
            <Route path="/Lutinex/" element={<Home />} />
            <Route path="/Lutinex/language/dictionary" element={<Dictionary />} />
            <Route path="/Lutinex/language/dictionary/levotin" element={<LevotinDictionary />} />
            <Route path="/Lutinex/language/about" element={<About />} />
            <Route path="/Lutinex/language/about/levotin" element={<LevotinAbout />} />
            <Route path="/Lutinex/country/stocks" element={<StocksPage />} />
            <Route path="/Lutinex/language/words/:word" element={<WordPage />} />
            <Route path="/Lutinex/language/words/levotin/:word" element={<LevotinWordPage />} />
            <Route path="/Lutinex/signup" element={<SignUp />} />
            <Route path="/Lutinex/signin" element={<SignIn />} />
            <Route path="/Lutinex/users/:username" element={<UserPage />} />
            <Route path="/Lutinex/companies/:company" element={<CompanyPage />} />
            <Route path="/Lutinex/users" element={<UserSearch />} />
        </Routes>
    )
}