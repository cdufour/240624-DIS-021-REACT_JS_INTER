import StockLevel from '../exos/StockLevel';
import './ProductItem.css';
export default function ProductItem({product}) {

    const { name, price, stock, online } = product;
    const onlineTxt = online ? 'Disponible en ligne uniquement' : 'Indisponible en ligne';
    const style1 = { fontSize: '7pt' };

    return (
        <article>
            <h3>{name}</h3>
            <p className='product-price'>Prix: {price} EUR</p>
            <p>Stock: {stock} unités - <span style={style1}>{onlineTxt}</span></p>
            <StockLevel stock={stock} />
            <hr />
        </article>
    )
}