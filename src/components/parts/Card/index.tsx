import RatingBtn from "@/components/elements/RatingBtn";
import Image from "next/image";

export default function Card({ title, price, category, imageUrl, rating, id }: { title: string, price: number, category: string, imageUrl: string, rating: number, id: number }) {
    return (
        <div className="card bg-white w-96 h-[460px] shadow-md">
            <figure className="">
                <Image className="h-72 w-full rounded-md object-fill" src={imageUrl} alt="thumbnail" width={600} height={400} />
            </figure>
            <div className="card-title mx-6 mt-1">
                <h2 className="card-title line-clamp-3 ">
                    {title}
                </h2>
            </div>
            <div className="card-body">
                <div className="absolute bottom-5 left-5">
                    <p className="ms-2 mb-2 text-gray-500">Price: ${price}</p>
                    <RatingBtn rating={rating} id={id} />
                </div>
                <div className="absolute bottom-13 right-5 ">
                    <div className="badge bg-[#EAF9E7] badge-outline">{category}</div>
                </div>
            </div>
        </div>
    );
}