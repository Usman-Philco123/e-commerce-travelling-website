import { IoMdStar } from "react-icons/io";

interface RatingProps{
    rate: number;
}

export function Rating({rate}: RatingProps) {
    return(
    <div className="flex gap-2">
        {Array(5).fill(0).map((_, index) =>{
            return <IoMdStar key={index} size={16} className={`${
                rate > index?  "fill-yellow-400 stroke-yellow-600" : "stroke-slate-400"
                }`}/>;
        })}
    </div>
    )
}