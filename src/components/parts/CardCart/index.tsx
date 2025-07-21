"use client"

import Button from "@/components/elements/Button"
import { addToCart } from "@/lib/stores/cart"
import { useState } from "react"
import { FaCartPlus } from "react-icons/fa"
import { useDispatch } from "react-redux"

export default function CardCart({ title, price, id }: { title: string, price: number, id: string }) {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    if (quantity > 999) {
        setQuantity(999)
    }
    if (quantity < 1) {
        setQuantity(1)
    }
    const handleAddToCart = (): void => {
        dispatch(addToCart({ id: +id, title, price, quantity }))
    }
    return (
        <div className="card w-72 justify-center bg-white items-center mx-auto  h-fit p-5 card-md shadow-sm">
            <h4 className="font-bold text-xl" >{title}</h4>
            <p className="my-2 text-gray-500">Quantity</p>
            <div className="input-group input-bordered">
                <Button disabled={quantity === 1} type="button" onClick={() => setQuantity(quantity - 1)}>-</Button>
                <input className=" w-fit text-center" min={1} max={999} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} type="number" />
                <Button disabled={quantity === 999} onClick={() => setQuantity(quantity + 1)}>+</Button>
            </div>
            <Button className="mt-4  btn-ghost bg-[#023237] text-white" onClick={() => handleAddToCart()}>
                <span className="flex items-center gap-2">
                    Add to cart <FaCartPlus size={20} />
                </span>
            </Button>
        </div>
    )
}