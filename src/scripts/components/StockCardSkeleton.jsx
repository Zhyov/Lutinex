export default function StockCardSkeleton() {
    return (
      <div className="shadow-sm flex-1 flex flex-nowrap flex-col gap-2 border-2 border-cardborder bg-cardbg rounded-md duration-100">
            <span className="text-2xl font-[600] px-4 py-2 mt-2">Ifäsota Aziwąk (ISA)</span>
            <span className="bg-cardborder h-0.5 w-full"></span>
            <span className="text-2xl font-[700] px-4">$0.00 <span className="text-xl text-neutral-500">+0.00 (+0.00%)</span></span>
            <div className="flex flex-col w-auto gap-2 px-4">
                <div className="flex flex-row gap-2 items-stretch">
                    <button className="w-full border-2 rounded-sm p-1.5 cursor-pointer text-sm transition-colors bg-cardbglight border-cardborderlight hover:bg-cardbgslight hover:border-cardborderslight">
                        Share Price
                    </button>
                    <button className="w-full border-2 rounded-sm p-1.5 cursor-pointer text-sm transition-colors bg-cardbglight border-cardborderlight hover:bg-cardbgslight hover:border-cardborderslight">
                        Shares
                    </button>
                </div>
                <div className="w-full h-64 flex align-middle justify-center py-2">
                    <span className="animate-pulse w-full h-full rounded-md bg-neutral-700"></span>
                </div>
            </div>
        </div>  
    )
}