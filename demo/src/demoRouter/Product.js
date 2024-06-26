import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const API = 'http://localhost:4000/products';

/* toDo: indiquer dans l'interface que le produit
est introuvable lorsque l'id demandé ne correspond à rien côté API */

export default function Product() {
    const { id } = useParams()
    const [ product, setProduct ] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        // requête ajax
        fetch(API + '/' + id)
            .then(res => res.json())
            .then(product => setProduct(product))
            
    }, [])

    return (
        <div>
            <h3>
                Product {id}: 
                { product && <span>{product.name}</span> }
            </h3>
            <button onClick={ () => navigate('/list') }>Retour à la liste</button>
        </div>
    )
    
}