import Image from "next/image";

export default async function Product({ params }: { params: Promise<{ id: string }> }) {
  
        const { id } = await params
        const data = await fetch(`https://fakestoreapi.com/products/${id}`)
         
        const { title, description, price, category, rating, image } = await data.json()
    return (
        <div className="container w-8/12 min-h-d-screen grid lg:grid-cols-2  place-content-center mx-auto px-4 gap-15">
            <Image src={image} width={600} height={400} alt="image"/>
            {/* <img src={image} alt="" /> */}
            <div>
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="mt-2">{description}</p>
                <p className="mt-2">{price}</p>
            </div>
            <div>
                <p>{category}</p>
                <p>{rating.rate}</p>
                <p>{rating.count}</p>
            </div>
        </div>
    );
}