"use client"
import Card from "@/components/parts/Card";
import { useProducts } from "@/lib/hooks/products";
import { Product } from "@/lib/types/product";
import Link from "next/link";

export default function Home() {
  const { data, error, isLoading } = useProducts()

  return (
    <div className="flex justify-center container my-12 mx-auto ">
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4grid-flow-row gap-8">
        {data?.map((product: Product) => (
          <div key={product.id}>
            <Link href={`/products/${product.id}`}>
              <Card id={product.id} title={product.title} price={product.price} rating={product.rating.rate} category={product.category} imageUrl={product.image} />
            </Link>
          </div>
        ))}
      </div>
        {error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
    {!error && !isLoading && data?.length === 0 && <p>No products found.</p>}
    </div>
  );
}
