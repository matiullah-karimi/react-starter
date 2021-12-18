import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems, selectCartItemsPrice, toggleCartDropdownHidden } from "../redux/cart/cart.slice";
import useOutsideClickDetector from "../utils/outside-click-detector";
import CartItem from "./CartItem";
import CloseIcon from "./icons/CloseIcon";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const cartItemsPrice = useSelector(selectCartItemsPrice);

    const dispatch = useDispatch();
    const wrapperRef = useRef(null);
    const navigate = useNavigate();

    useOutsideClickDetector(wrapperRef, () => {
        dispatch(toggleCartDropdownHidden());
    });

    const goToPage = (page) => {
        dispatch(toggleCartDropdownHidden());
        navigate(page);
    }

    return (
        <div ref={wrapperRef} className="absolute flex flex-col px-4 py-2 bg-white w-4/12 border border-gray-200 rounded-md right-8 top-12">
            <header className="flex justify-between border-b border-gray-200 pb-4">
                <h2>Shopping Cart</h2>
                <a onClick={() => dispatch(toggleCartDropdownHidden())} className="cursor-pointer font-semibold">
                    <CloseIcon />
                </a>
            </header>

            <div className="flex flex-col bg-white h-72 overflow-y-scroll text-base">
                {
                    cartItems.length == 0 && <span className="text-center mt-4">Cart is empty</span>
                }
                {
                    cartItems.map(item => <CartItem item={item} key={item.id} />)
                }
            </div>

            <footer className="border-t border-gray-200 py-2 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${cartItemsPrice}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                    <a className="btn btn-primary w-full cursor-pointer" onClick={() => goToPage('/checkout')}>Checkout</a>
                </div>
            </footer>
        </div>
    );
}

export default CartDropdown;