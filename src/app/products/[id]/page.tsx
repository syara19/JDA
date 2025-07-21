
import Button from "@/components/elements/Button";
import RatingBtn from "@/components/elements/RatingBtn";
import CardCart from "@/components/parts/CardCart";
import ClientWrapper from "@/components/wrappers/clientWrapper";
import Image from "next/image";

export default async function Product({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params
    const data = await fetch(`https://fakestoreapi.com/products/${id}`)


    const { title, description, price, category, rating, image } = await data.json()

    let type: string = ""

    if (category === "jewelery") {
        type = "accessories"
    } else if (category === "electronics") {
        type = "electronics"
    } else {
        type = "clothings"
    }

    return (
        <div className="container my-12 w-8/12 min-h-d-screen grid lg:grid-cols-3  place-content-center mx-auto px-4 gap-5">
            <Image className="mx-auto" src={image} width={300} height={100} alt="image" />
            <div>
                <h1 className="text-3xl mx-2 font-bold">{title}</h1>
                <p className="mt-2 mx-2">{description}</p>
                <p className="mt-2 mx-2 text-gray-500">${price}</p>
                <div className="flex mt-2 justify-between">
                    <div>
                        <p className="mx-2 text-sm">{rating.count} reviews</p>
                        <RatingBtn id={+id} rating={rating.rate} />
                    </div>
                    <Button className="hover:cursor-pointer" href={`/products/${type}`}>
                        <div className="badge bg-[#EAF9E7] badge-outline">{category}</div>
                    </Button>
                </div>
            </div>
            <ClientWrapper>
                <CardCart title={title} price={price} id={id} />
            </ClientWrapper>
            <div>
            </div>
        </div>
    );
}