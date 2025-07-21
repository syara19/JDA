"use client"
import { store } from "@/lib/stores";
import { removeFromCart, updateQuantity } from "@/lib/stores/cart";
import { useDispatch, useSelector } from "react-redux";
import CartBody from "../CartBody";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart() {
    const dispatch = useDispatch()
    const cartItems = useSelector((state: ReturnType<typeof store.getState>) => state.cart.items)
    const totalitem = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const handleRemoveItem = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleUpdateQuantity = (id: number, quantity: number) => {
        dispatch(updateQuantity({ id, quantity }));
    };
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );


    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle indicator hover:bg-[#014a52] transition-colors duration-200"
            >
                <FaShoppingCart size={20} />
                {totalitem > 0 && (
                    <span className="badge badge-sm indicator-item bg-red-500 text-white border-none animate-pulse">
                        {totalitem > 99 ? '99+' : totalitem}
                    </span>
                )}
            </div>

            <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-80 bg-white shadow-xl border border-gray-200"
            >
                <div className="card-body">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg text-gray-800">
                            Shopping Cart
                        </h3>
                        <div className="badge badge-secondary">
                            {totalitem} {totalitem === 1 ? 'item' : 'items'}
                        </div>
                    </div>

                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center py-8 text-gray-500">
                            <FaShoppingCart size={48} className="mb-4 opacity-50" />
                            <p className="text-center font-medium">Your cart is empty</p>
                            <p className="text-sm text-center mt-1">Add some items to get started!</p>
                        </div>
                    ) : (
                        <CartBody cartItems={cartItems} handleRemoveItem={handleRemoveItem} handleUpdateQuantity={handleUpdateQuantity} totalPrice={totalPrice} />
                    )}
                </div>
            </div>
        </div>
    );
}