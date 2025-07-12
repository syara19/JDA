import Image from "next/image";

export default function Card({ title, price, category, imageUrl, rating }: { title: string, price: number, category: string, imageUrl: string, rating: number, }) {
    console.log(imageUrl)
    return (
        <div className="card bg-base-100  w-96 h-[480px] shadow-md">
            <figure className="">
                <Image className="h-72 w-full rounded-md object-fill" src={imageUrl} alt="thumbnail" width={600} height={400} />
            </figure>
            <div className="card-body">
                <h2 className="card-title line-clamp-3 ">
                    {title}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <div className="absolute bottom-5 left-5">
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                </div>
                <div className="absolute bottom-5 right-5 card-actions ">
                    <div className="badge badge-outline">{category}</div>
                  
                </div>
            </div>
        </div>
    );
}