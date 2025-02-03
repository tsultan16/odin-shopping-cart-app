import { useState, useEffect, useRef } from "react";
import "../App.css";


export default function ProductCard({ product, addToCartHandler }) {

    const [ quantity, setQuantity ] = useState(0);

    const handleChange = (e) => {
        const newQuantity = parseInt(e.target.value); 
        if (newQuantity >= 0) setQuantity(parseInt(e.target.value));
    };


    return (
        <div className="card">
            <p><strong>{product.title}</strong></p>
            <img src={product.image} alt=""/>
            <p>${product.price}</p>
            <p>Rating - {product.rating.rate}</p>

            <div>
                <label>
                    Quantity 
                    <input type="number" value={quantity} onChange={handleChange} />
                </label>
                <button type="button" onClick={(e) => {addToCartHandler(quantity)}}>Add to cart</button>
            </div>

        </div>

    );


}

