import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ProductList from '../components/products/ProductList'
import Product from './Product'
import ProductForm from '../components/products/ProductForm'

export default function App(props) {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/list">List</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/form">Form</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/about" element={ <p>About</p> } />
                <Route path="/users" element={ <Users /> } />
                <Route path="/list" element={ <Products /> } />
                <Route path="/products" element={ <ProductList /> } />
                <Route path="/products/:id" element={ <Product /> } />
                <Route path="/form" element={ <ProductForm /> } />
            </Routes>
        </Router>
    )
}

function Users(props) {
    return <h3>Users</h3>
}

function Products(props) {
    const ids = [1,2,3,4];
    return (
        <ul>
            {
                ids.map(id => <li key={id}>
                    <Link to={'/products/' + id}>Product {id}</Link>
                </li>)
            }
        </ul>
    )
}