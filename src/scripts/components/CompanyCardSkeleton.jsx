export default function CompanyCardSkeleton() {
    return (
        <div className="flex flex-col items-stretch mt-2 mb-2 gap-2 mx-auto max-w-11/12 md:max-w-[min(98vw,1500px)]">
            <div className="shadow-sm flex-1 flex flex-wrap flex-col justify-center ring-2 ring-cardborder bg-cardbg rounded-md">
                <div className="flex flex-col p-4 pb-0">
                    <span className="rounded-full bg-neutral-700 animate-pulse w-80 h-8"></span>
                </div>
                <span className="bg-cardborder h-0.5 w-full my-4"></span>
                <div className="flex flex-col gap-2 min-w-full md:min-w-0 max-w-3/8 px-4">
                    <span className="text-xl font-bold text-neutral-500">Share price: <span className="inline-block rounded-full bg-neutral-700 animate-pulse w-16 h-6"></span></span>
                    <div className="flex flex-row gap-2 items-stretch">
                        <button className="w-full border-2 rounded-sm p-1.5 cursor-pointer text-sm transition-colors bg-cardbglight border-cardborderlight hover:bg-cardbgslight hover:border-cardborderslight">
                            Share Price
                        </button>
                        <button className="w-full border-2 rounded-sm p-1.5 cursor-pointer text-sm transition-colors bg-cardbglight border-cardborderlight hover:bg-cardbgslight hover:border-cardborderslight">
                            Shares
                        </button>
                    </div>
                    <div className="inline-block animate-pulse min-w-3/8 h-64 rounded-md bg-neutral-700"></div>
                </div>
                <span className="bg-cardborder h-0.5 w-full my-4"></span>
                <div className="p-4 pt-0">
                    <span className="text-xl font-bold text-neutral-500">Share Ownerships:</span>
                    <div>
                        <span className="inline-block rounded-full bg-neutral-700 animate-pulse w-80 sm:w-120 h-6"></span>
                    </div>
                </div>
            </div>
         </div>
    )
}