"use client"
import ProductsPage from "@/components/pages/products";
import { useProducts } from "@/lib/hooks/products";
import { useEffect, useState } from "react";

export default function Clothings() {
    const [electronicProducts, setElectronicProducts] = useState([]);
      const { data, error, isLoading } = useProducts()
      useEffect(() => {
        if (data) {
          const filtered = data?.filter((product: { category: string | string[]; }) => product.category.includes("electronics"));
          setElectronicProducts(filtered);
        }
      }, [data]);

    
    return (
        <div>
            <ProductsPage data={electronicProducts} error={error} isLoading={isLoading} />
        </div>

    );
}