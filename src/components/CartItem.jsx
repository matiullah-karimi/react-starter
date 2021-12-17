import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cart/cart.slice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return(
        <div className="grid grid-cols-10 gap-4 border-b border-gray-200 py-4">
            <div className="col-span-2 flex justify-center">
                <img className="h-24 rounded" src={item.image} alt={item.title} />
            </div>
            <div className="col-span-8 flex flex-col w-full px-2">
                <div className="flex justify-between font-medium text-base gap-2">
                    <h4 className="w-64 truncate font-semibold">{ item.title }</h4>
                    <h4>${ item.price }</h4>
                </div>
                <div>
                    <span className="text-gray-400">{ item.category }</span>
                </div>
                <div className="flex justify-between mt-4">
                    <span className="text-gray-400">Qty: { item.quantity }</span>
                    <a onClick={() => dispatch(removeFromCart(item))} className="text-indigo-800 font-semibold text-sm cursor-pointer">Remove</a>
                </div>
            </div>
        </div>
    );
}

export default CartItem;