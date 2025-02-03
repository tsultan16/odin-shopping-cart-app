import "../App.css";


export default function ProductCard({ product }) {

    return (
        <div className="card">
            <h3>{product.title}</h3>
            <img src={product.image} alt=""/>
            <p>${product.price}</p>
            <p>Rating - {product.rating.rate}</p>
        </div>

    );


}

