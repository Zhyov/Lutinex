import { Link } from "react-router-dom"

export default function UserCardSkeleton() {
    return (
        <li>
            <div className={`shadow-sm flex-1 flex flex-wrap flex-col border-2 gap-1 bg-cardbg border-cardborder w-auto rounded-md duration-100`}>
                <Link className="flex-1">
                    <div className="flex flex-row justify-between space-y-1 p-2">
                        <span className="text-2xl rounded-full bg-neutral-700 animate-pulse w-64 h-8"></span>
                        <span className="text-2xl rounded-full bg-neutral-700 animate-pulse w-20 h-8"></span>
                    </div>
                </Link>
            </div>
        </li>
    )
}