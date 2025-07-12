import { customRound } from "@/lib/constants/customRound";

export default function RatingBtn({ rating, id }: { rating: number, id: number }) {
    const rate = customRound(rating)
    // const isChecked = (value: number) => rate === value

    const ratingValues = Array.from({length:10}, (_, i)=> (i+1)*0.5)

    return (
        <div className="rating rating-lg rating-half">
            <input type="radio" name={`rating-${id}`} className="rating-hidden"  readOnly />
            {ratingValues.map((value)=>(
                <input 
                key={value}
                 type="radio"
                  name={`rating-${id}`}
                   className={`mask mask-star-2 ${
                     value%1 !== 0 ? "mask-half-1" : "mask-half-2"
                   } bg-[#4CA771]`}
                   aria-label={`${value} star`}
                   checked={rate === value}
                   readOnly
                   />
            ))}
        </div>
    );
}