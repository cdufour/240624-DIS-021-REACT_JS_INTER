import React from 'react';
import ProductItem from './ProductItem';

const API = 'http://localhost:4000/products';

export default class ProductList extends React.Component {

    constructor(props) {
        super();
        this.state = { products: [] };
    }


    componentDidMount() {
        // requête ajax
        fetch(API, { method: 'get' })
            .then(res => res.json())
            .then(products => this.setState({products}))
    }

    render() {
        console.log('render');
        return (
            <div>
                <h3>Products ({ this.state.products.length })</h3>
                {
                    this.state.products
                        .map(product => <ProductItem key={product.id} product={product} />)
                }
            </div>
        )
    }
}