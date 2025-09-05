import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import UserPageCard from "./UserPageCard"
import UserPageCardSkeleton from "./UserPageCardSkeleton"

export default function UserPage() {
    const { username: specifiedUsername } = useParams()
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.title = "Lötinäç · " + specifiedUsername

        fetch(`https://lutinexapi.onrender.com/user/${specifiedUsername}`)
            .then(res => res.json())
            .then(obj => {
                setUserData(obj)
                setLoading(false)
            })
            .catch(err => console.error("Failed to fetch data:", err))
    }, [specifiedUsername])

    return (
        <>
            <Navbar gridEnabled={false} searchEnabled={false} filterEnabled={false} />
            {loading ? <UserPageCardSkeleton /> : <UserPageCard userData={userData} specifiedUsername={specifiedUsername} />}
        </>
    )
}