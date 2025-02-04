import { useContext } from "react";
import ProductCard from "./ProductCard";
import ShopContext from './ShopContext';
import "../App.css";



export default function Products() {
    const { data, isLoading, isError, addToCart  } = useContext(ShopContext);

    return (
      <>
        <div>
    
          {isError ? (<div>Oops... something went wrong.</div>):
            ( <>
              <ul className="products-list">
                {isLoading? (<div>Loading...</div>):
                (data.map( (item) => 
                  (<li key={item.id}>
                    <ProductCard product={item} addToCartHandler={addToCart} />
                  </li>)
                ))}
              </ul>
              
              </>)}
        </div>
      </>
    );

}

