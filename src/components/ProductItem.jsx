import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cart/cart.slice";
import { toggleLiked } from "../redux/product/product.slice";
import { toggleWishlistItem } from "../redux/wishlist/wishlist.slice";
import LikeIcon from "./LikeIcon";

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    const likeProduct = (product) => {
        dispatch(toggleWishlistItem(product));
        dispatch(toggleLiked(product));
    }
    
    return (
        <div key={product.id} className="relative shadow-sm rounded shadow-gray-200 p-4">
            <div className="group relative w-full min-h-80 bg-gray-200 aspect-square rounded-md overflow-hidden lg:h-80 lg:aspect-none">
                <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />

                <div className="absolute bottom-2 flex justify-center gap-x-4 w-full opacity-0 group-hover:opacity-100 transition delay-200 duration-300">
                    <button className="btn btn-primary px-4 py-2 text-sm" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                    <div onClick={() => likeProduct(product)} className="flex justify-center items-center bg-gray-100 px-4 rounded-md cursor-pointer">
                        <LikeIcon liked={product.liked} />
                    </div>
                </div>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link to={`products/${product.id}`}>
                            {product.title}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
        </div>
    );
}

export default ProductItem;