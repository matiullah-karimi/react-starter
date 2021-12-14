import React from 'react';
import { getProducts } from '../services/products.service';
import ProductPreview from './ProductPreview';

export default class TrendingProducts extends React.Component {
    constructor() {
        super();

        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        const products = await getProducts();
        
        this.setState({ products: products.slice(0, 4) });
    }

    render() {
        return (
            <ProductPreview title="Trending Products" products={this.state.products}/>
        )
    }
}