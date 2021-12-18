import { useSelector } from "react-redux";
import CartItem from "../CartItem";
import { selectCartItems } from "../../redux/cart/cart.slice";

const OrderSummary = () => {
    const cartItems = useSelector(selectCartItems);

    return (
        <div>
            <span className="text-gray-800 font-semibold">Order summary</span>
            <div className="bg-white shadow shadow-gray-200 mt-4 rounded-md flex flex-col">
                {
                    cartItems.map(item => <CartItem item={item} key={item.id} />)
                }

                <div className="flex justify-between pt-4 pb-1 px-4">
                    <span>Subtotal</span>
                    <span>$20</span>
                </div>

                <div className="flex justify-between py-2 px-4">
                    <span>Shipping</span>
                    <span>$20</span>
                </div>

                <div className="flex justify-between py-2 px-4">
                    <span>Tax</span>
                    <span>$20</span>
                </div>

                <div className="flex justify-between py-4 border-t border-gray-300 mx-4">
                    <span>Total</span>
                    <span>$200</span>
                </div>

                <div className="flex justify-between py-4 border-t border-gray-300 mx-4">
                    <button className="btn btn-primary w-full py-3 font-medium">Confirm Order</button>
                </div>

            </div>
        </div>
    );
}

export default OrderSummary;