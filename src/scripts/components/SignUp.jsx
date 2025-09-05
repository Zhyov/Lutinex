import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"

export default function SignUp() {
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Lötinäç · Sign Up"
    })

    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordMatchWarning, setPasswordMatchWarning] = useState(false)
    const [usernameTakenWarning, setUsernameTakenWarning] = useState(false)
    const [usernameLengthWarning, setUsernameLengthWarning] = useState(false)
    const [passwordLengthWarning, setPasswordLengthWarning] = useState(false)

    async function registerUser(username, name, password) {
        try {
            const response = await fetch("https://lutinexapi.onrender.com/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, name, password })
            })

            const data = await response.json()

            if (!response.ok) {
                if (data.error === "Username already taken") {
                    setUsernameTakenWarning(true)
                    setPasswordLengthWarning(false)
                    setPasswordLengthWarning(false)
                    setUsernameLengthWarning(false)
                }
            } else {
                navigate(`/Lutinex/signin`)
            }
        } catch (err) {
            console.error("Network error:", err)
        }
    }

    const handleRegister = () => {
        if (username.length <= 0) {
            setUsernameLengthWarning(true)
            setPasswordLengthWarning(false)
            setPasswordMatchWarning(false)
            setUsernameTakenWarning(false)
            return
        }

        if (password.length <= 2) {
            setPasswordLengthWarning(true)
            setPasswordMatchWarning(false)
            setUsernameTakenWarning(false)
            setUsernameLengthWarning(false)
            return
        }

        if (password !== confirmPassword) {
            setPasswordMatchWarning(true)
            setPasswordLengthWarning(false)
            setUsernameTakenWarning(false)
            setUsernameLengthWarning(false)
            return
        }

        registerUser(username, name, password)
    }

    return (
        <div className="relative mx-auto p-0 flex flex-col min-h-dvh">
            <Navbar gridEnabled={false} searchEnabled={false} filterEnabled={false} />
            <div className="flex flex-col items-stretch mt-2 mb-2 gap-2 mx-auto min-w-3/12 md:max-w-[min(60vw,1500px)]">
                <div className="*:w-57 shadow-sm flex-1 flex flex-wrap flex-col justify-center ring-2 gap-2 ring-cardborder bg-cardbg rounded-md duration-100 p-10">
                    <h1 className="text-2xl font-bold mx-auto text-center">Sign Up</h1>
                    <span className="mx-auto w-full">Username</span>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="User name" className="w-full md:w-auto focus:ring-2 placeholder:text-neutral-400 self-center px-3 py-1.5 align-middle rounded-md ring-1 ring-cardborderlight bg-cardbglight text-lg" />
                    {usernameLengthWarning ? <span className="mx-auto w-full text-red-500">You must have a username!</span> : usernameTakenWarning ? <span className="mx-auto w-full text-red-500">This username is taken!</span> :null}
                    <span className="mx-auto w-full mt-2">Display name (Optional)</span>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Display name" className="w-full md:w-auto focus:ring-2 placeholder:text-neutral-400 self-center px-3 py-1.5 align-middle rounded-md ring-1 ring-cardborderlight bg-cardbglight text-lg" />
                    <span className="mx-auto w-full mt-2">Password</span>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full md:w-auto focus:ring-2 placeholder:text-neutral-400 self-center px-3 py-1.5 align-middle rounded-md ring-1 ring-cardborderlight bg-cardbglight text-lg" />
                    {passwordLengthWarning ? <span className="mx-auto w-full text-red-500">The password must be longer than 2 characters!</span> : null}
                    <span className="mx-auto w-full mt-2">Confirm password</span>
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" className="w-full md:w-auto focus:ring-2 placeholder:text-neutral-400 self-center px-3 py-1.5 align-middle rounded-md ring-1 ring-cardborderlight bg-cardbglight text-lg" />
                    {passwordMatchWarning ? <span className="mx-auto w-full text-red-500">Passwords don't match!</span> : null}
                    <button onClick={handleRegister} className="font-[600] mt-4 mx-auto w-full px-3 py-1.5 rounded-md ring-1 ring-cardborderlight bg-cardbglight items-center transition-colors hover:bg-cardbgslight hover:cursor-pointer">
                        Create account
                    </button>
                    <span className="text-center mx-auto w-full">
                        Already have an account? <Link to="/Lutinex/signin" className="text-blue-500 hover:underline">Sign In</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}