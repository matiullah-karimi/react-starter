import React from "react";
import ProductPreview from "../components/ProductPreview";
import { getProducts } from "../services/products.service";

export default class Shop extends React.Component {
    constructor() {
        super();

        this.state = {
            products: [],
            loading: false
        }
    }

    async componentDidMount() {
        this.setState({loading: true});

        const products = await getProducts();

        this.setState({ products, loading: false });
    }

    render() {
        return (
            <div className="flex flex-col">
                {
                    this.state.loading && <h2>Loading...</h2>
                }

                {
                    this.state.products.length > 0 && <ProductPreview title="Shop   " products={this.state.products}/>
                }
            </div>
        );
    }
}