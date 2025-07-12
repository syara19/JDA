"use client"
import ProductsPage from "@/components/pages/products";
import { useProducts } from "@/lib/hooks/products";
import { useEffect, useState } from "react";

export default function Clothings() {
    const [electronicProducts, setElectronicProducts] = useState([]);
      const { data, error, isLoading } = useProducts()
      useEffect(() => {
        if (data) {
          // Filter data setelah di-fetch dan di-cache oleh SWR
          const filtered = data?.filter(product => product.category.includes("clothing"));
          setElectronicProducts(filtered);
        }
      }, [data]);

    
    return (
        <div>
            <ProductsPage data={electronicProducts} error={error} isLoading={isLoading} />
        </div>

    );
}