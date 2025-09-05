import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"

export default function SignIn() {
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Lötinäç · Sign In"
    })

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usernameExistsWarning, setUsernameExistsWarning] = useState(false)
    const [wrongPasswordWarning, setWrongPasswordWarning] = useState(false)

    async function loginUser(username, password) {
        try {
            const response = await fetch("https://lutinexapi.onrender.com/auth/login", {
               method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json()

            if (!response.ok) {
                if (data.error === "Invalid username") {
                    setUsernameExistsWarning(true)
                    setWrongPasswordWarning(false)
                } else if (data.error === "Invalid password") {
                    setWrongPasswordWarning(true)
                    setUsernameExistsWarning(false)
                }
            } else {
                localStorage.setItem("token", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                navigate(`/Lutinex/users/${data.user.username}`)
            }
        } catch (err) {
            console.error("Network error:", err)
        }
    }

    const handleLogin = () => {
        loginUser(username, password)
    }

    return (
        <div className="relative mx-auto p-0 flex flex-col min-h-dvh">
            <Navbar gridEnabled={false} searchEnabled={false} filterEnabled={false} />
            <div className="flex flex-col items-stretch mt-2 mb-2 gap-2 mx-auto min-w-3/12 md:max-w-[min(60vw,1500px)]">
                <div className="*:w-57 shadow-sm flex-1 flex flex-wrap flex-col justify-center ring-2 gap-2 ring-cardborder bg-cardbg rounded-md duration-100 p-10">
                    <h1 className="text-2xl font-bold mx-auto text-center">Sign In</h1>
                    <span className="mx-auto w-full">Username</span>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="User name" className="w-full md:w-auto focus:ring-2 placeholder:text-neutral-400 self-center px-3 py-1.5 align-middle rounded-md ring-1 ring-cardborderlight bg-cardbglight text-lg" />
                    {usernameExistsWarning ? <span className="mx-auto w-full text-red-500">This username doesn't exist!</span> : null}
                    <span className="mx-auto w-full mt-2">Password</span>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full md:w-auto focus:ring-2 placeholder:text-neutral-400 self-center px-3 py-1.5 align-middle rounded-md ring-1 ring-cardborderlight bg-cardbglight text-lg" />
                    {wrongPasswordWarning ? <span className="mx-auto w-full text-red-500">Wrong password!</span> : null}
                    <button onClick={handleLogin} className="font-[600] mt-4 mx-auto w-full px-3 py-1.5 rounded-md ring-1 ring-cardborderlight bg-cardbglight items-center transition-colors hover:bg-cardbgslight hover:cursor-pointer">
                        Sign in
                    </button>
                    <span className="text-center mx-auto w-full">
                        New to Lutinex? <Link to="/Lutinex/signup" className="text-blue-500 hover:underline">Sign Up</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}