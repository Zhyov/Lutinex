import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import UserCard from "./UserCard"
import UserCardSkeleton from "./UserCardSkeleton"

export default function UserSearch() {
    const [usersData, setUsersData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.title = "Lötinäç · User Search"

        fetch(`https://lutinexapi.onrender.com/users`)
            .then(res => res.json())
            .then(obj => {
                setUsersData(obj)
                setLoading(false)
            })
            .catch(err => console.error("Failed to fetch data:", err))
    })

    const users = usersData.sort((a, b) => (b.balance + b.in_shares) - (a.balance + a.in_shares)).map(user => {
        return <UserCard key={user.id} username={user.username} displayname={user.name} networth={user.balance + user.in_shares} />
    })

    return (
        <>
            <Navbar gridEnabled={false} searchEnabled={false} filterEnabled={false} />
            <ul className="flex flex-col items-stretch my-2 gap-2 mx-auto max-w-11/12 md:max-w-[min(90vw,1200px)]">
                {loading ? Array(6).fill(0).map((_, i) => <UserCardSkeleton key={i} />) : users}
            </ul>
        </>
    )
}