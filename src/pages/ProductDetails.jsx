import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { fetchProduct, selectProductsState } from "../redux/product/product.slice";

const ProductDetails = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const productsState = useSelector(selectProductsState);

    useEffect(() => {
        console.log('here')
        dispatch(fetchProduct(params.product))
    }, []);


    const renderProductDetails = () => {
        const { product } = productsState;

        return (
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <img src={product.image} alt={product.title} />
                </div>
                {productsState.product.title}
            </div>
        )
    }

    
    return (
        <div>
            {
                productsState.loading ? (<div className="flex justify-center h-screen">
                <Loading className="text-gray-800 w-8 h-8" />
            </div>) : renderProductDetails()
            }
        </div>
    );
}

export default ProductDetails;