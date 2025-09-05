export default function UserPageCardSkeleton() {
    return (
        <div className="flex flex-col items-stretch my-2 gap-2 mx-auto max-w-11/12 md:max-w-[min(98vw,1500px)]">
            <div className="shadow-sm flex-1 flex flex-wrap flex-col justify-center ring-2 ring-cardborder bg-cardbg rounded-md">
                <div className="flex flex-col gap-1 p-4 pb-0">
                    <span className="rounded-full bg-neutral-700 animate-pulse w-64 h-8"></span>
                    <span className="rounded-full bg-neutral-700 animate-pulse w-24 h-6"></span>
                    <span className="text-xl text-neutral-500 font-[600] mt-4">Investment management company: <span className="inline-block rounded-full bg-neutral-700 animate-pulse w-20 h-6"></span></span>
                </div>
                <span className="bg-cardborder h-0.5 w-full my-4"></span>
                <div className="px-4">
                    <span className="text-xl font-bold text-neutral-500">Balance: <span className="inline-block rounded-full bg-neutral-700 animate-pulse w-20 h-6"></span></span>
                    <ul className="list-disc list-inside gap-0 mt-0">
                        <li className="text-lg font-bold text-neutral-500">Savings: <span className="inline-block rounded-full bg-neutral-700 animate-pulse w-20 h-6"></span></li>
                        <li className="text-lg font-bold text-neutral-500">Stocks: <span className="inline-block rounded-full bg-neutral-700 animate-pulse w-20 h-6"></span></li>
                    </ul>
                </div>
                <span className="bg-cardborder h-0.5 w-full my-4"></span>
                <div className="p-4 pt-0">
                    <span className="text-xl font-bold text-neutral-500">Stock Holdings:</span>
                    <div>
                        <span className="inline-block rounded-full bg-neutral-700 animate-pulse w-70 h-6"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}