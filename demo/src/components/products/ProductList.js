import React from 'react';
import ProductItem from './ProductItem';
import ProductSearch from './ProductSearch';

const API = 'http://localhost:4000/products';

export default class ProductList extends React.Component {

    // liste des produits initiale (après le retour de la requête fetch/ajax)
    originalProducts = [];

    constructor(props) {
        super();
        this.state = { products: [] };
    }

    componentDidMount() {
        // requête ajax
        fetch(API, { method: 'get' })
            .then(res => res.json())
            .then(products => {
                this.setState({products});
                this.originalProducts = products;
            })
    }

    onSearch(value) {
        if (value.length > 2) {
            // filtrer la liste
            let products = this.originalProducts
                .filter(p => p.name.indexOf(value) !== -1);
            this.setState({products});
        } else {
            // copie par valeur par utilisation du spread operator (ES6)
            this.setState({ products: [...this.originalProducts] })
        }
    }

    render() {
        console.log('render');
        return (
            <div>
                <h3>Products ({ this.state.products.length })</h3>
                <ProductSearch onSearch={ value => this.onSearch(value) } />
                <hr />
                {
                    this.state.products
                        .map(product => <ProductItem key={product.id} product={product} />)
                }
            </div>
        )
    }
}