import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cart/cart.slice";
import TrashIcon from "./icons/TrashIcon";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return(
        <div className="grid grid-cols-10 gap-4 border-b border-gray-200 py-4 px-2">
            <div className="col-span-2 flex justify-center">
                <img className="h-24 rounded" src={item.image} alt={item.title} />
            </div>
            <div className="col-span-8 flex flex-col w-full px-2 text-sm">
                <div className="flex justify-between font-medium gap-2">
                    <span className="w-64 truncate">{ item.title }</span>
                    <a onClick={() => dispatch(removeFromCart(item))} className="text-indigo-800 cursor-pointer">
                        <TrashIcon />
                    </a>
                </div>
                <div>
                    <span className="text-gray-400 capitalize">{ item.category }</span>
                </div>
                <div className="flex justify-between mt-4">
                    <span>${ item.price }</span>
                    <span className="text-gray-400">Qty: { item.quantity }</span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;