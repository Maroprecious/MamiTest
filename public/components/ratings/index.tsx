export const Ratings = ({ number, rating, percent }: {
    number: number,
    rating: number,
    percent: number
}) => {
    return (
        <div className="flex justify-between items-center mt-[12px] w-full">
            <p className="text-[#757575] text-[12px] font-light leading-[22.4px]">{number} stars</p>
            <div className="h-[5px] w-[70%] sm:w-[75%] lg:[75%] bg-[#0000001A] mx-[10px] rounded-[5px]">
                <div style={{ width: `${percent}%` }} className={`h-[5px] bg-primary rounded-[5px]`}></div>
            </div>
            <p className="text-[#757575] text-[12px] font-light leading-[22.4px]">{rating}</p>
        </div>
    )
}