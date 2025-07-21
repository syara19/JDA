import Button from "@/components/elements/Button";
import { CartItem } from "@/lib/types/cart";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

export default function CartBody({ cartItems, handleRemoveItem, handleUpdateQuantity, totalPrice }: { cartItems: CartItem[], handleRemoveItem: (id: number) => void, handleUpdateQuantity: (id: number, quantity: number) => void, totalPrice: number }) {
    return (
        <>
            <div className="max-h-64 w-full overflow-y-auto  space-y-3 mb-4 pr-2">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3  rounded-lg bg-gray-400 hover:bg-gray-500 transition-colors duration-200">
                        <div className="">
                            <h4 className="font-semibold line-clamp-2 text-gray-800 text-sm overflow-hidden" title={item.title}>
                                {item.title}
                            </h4>
                            <div className="flex items-center justify-between space-x-2 mt-2">
                                <div className="flex  items-center space-x-2">
                                    <Button
                                        className="btn btn-xs btn-circle btn-outline hover:btn-primary"
                                        onClick={() =>
                                            handleUpdateQuantity(item.id, item.quantity - 1)
                                        }
                                        disabled={item.quantity === 1}
                                    >
                                        <FaMinus size={10} />
                                    </Button>
                                    <span className="font-medium text-sm min-w-[1.5rem]  text-center">
                                        {item.quantity}
                                    </span>
                                    <Button
                                        className="btn btn-xs btn-circle btn-outline hover:btn-primary"
                                        onClick={() =>
                                            handleUpdateQuantity(item.id, item.quantity + 1)
                                        }
                                    >
                                        <FaPlus size={10} />
                                    </Button>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="font-bold text-sm text-blue-800">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </span>

                                </div>
                                <div className="flex items-center">
                                    <Button
                                        className=" btn btn-xs btn-circle btn-ghost hover:btn-error hover:text-white transition-all duration-200"
                                        onClick={() => handleRemoveItem(item.id)}
                                        title="Remove item"
                                    >
                                        <FaTrash size={10} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg  font-bold text-gray-800">Total:</span>
                    <span className="text-xl font-bold text-blue-800">
                        ${totalPrice.toFixed(2)}
                    </span>
                </div>

                <div className="flex space-x-2">
                    <Button  className="btn btn-ghost bg-[#014a52] btn-outline btn-sm flex-1">
                        View Cart
                    </Button>
                    <Button   className="btn btn-ghost bg-[#014a52] btn-sm flex-1">
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    );
}