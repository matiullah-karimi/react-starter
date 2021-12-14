import { Link } from "react-router-dom";

const ProductItem = ({ product }) => (
    <div key={product.id} className="group relative shadow-sm rounded shadow-gray-200 p-4">
        <div className="w-full min-h-80 bg-gray-200 aspect-square rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none cursor-pointer">
            <img
                src={product.image}
                alt={product.imageAlt}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
        </div>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                    <Link to={`products/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                    </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.price}</p>
        </div>
    </div>
);

export default ProductItem;