import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Loading from "../components/Loading";
import ProductPreview from "../components/ProductPreview";
import { fetchProducts, selectProductsState } from "../redux/product/product.slice";

const Shop = () => {
    const dispatch = useDispatch();
    const productsState = useSelector(selectProductsState);

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

    const { products, loading, error} = productsState;

    return (
        <div className="flex flex-col">
            {
                loading && <div className="flex justify-center h-screen">
                    <Loading className="text-gray-800 w-8 h-8" />
                </div>
            }

            {
                products.length > 0 && <ProductPreview title="Shop" products={products} />
            }
        </div>
    );
}

export default Shop;