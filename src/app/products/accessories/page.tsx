"use client"
import ProductsPage from "@/components/pages/products";
import { useProducts } from "@/lib/hooks/products";
import { useEffect, useState } from "react";

export default function Accessories() {
    const [electronicProducts, setElectronicProducts] = useState([]);
      const { data, error, isLoading } = useProducts()
      useEffect(() => {
        if (data) {
          // Filter data setelah di-fetch dan di-cache oleh SWR
          const filtered = data?.filter((product: { category: string; }) => product.category === "jewelery");
          setElectronicProducts(filtered);
        }
      }, [data]);

    
    return (
        <div>
            <ProductsPage data={electronicProducts} error={error} isLoading={isLoading} />
        </div>

    );
}