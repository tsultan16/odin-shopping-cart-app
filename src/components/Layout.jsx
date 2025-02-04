import { useState, useEffect } from 'react';
import { Link, Outlet} from 'react-router-dom';
import axios from "axios";
import ShopContext from './ShopContext';


export default function Layout() {
    const [ cartItems, setCartItems ] = useState([]);
    const { data, isLoading, isError } = useProducts();

    const addToCart = (product, quantity) => {
        setCartItems([...cartItems, {id: product.id, quantity: quantity}]);
        console.log(`Added to cart. product id: ${product.id}, qnty: ${quantity}`);
    };

    const cartSize = cartItems.reduce((totalQnty, product) => totalQnty+product.quantity, 0);

    return (
        <>
            <header>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li>Cart - {cartSize} items</li>
                    </ul>
                </nav>
            </header>

            <main>
                <ShopContext.Provider value={{ data, isLoading, isError, addToCart }}>
                    <Outlet />
                </ShopContext.Provider>
            </main>
        </>
    );

}


// search API
const API = "https://fakestoreapi.com/products";

// custom hook for data fetching 
function useProducts() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  
    // set up an effect to fetch data using the API on initial rendering of App component
    useEffect( () => {
      let didCancel = false;
  
      const fetchData = async () => {
        setIsLoading(true);
        setIsError(false);
  
        try {
          const result = await axios (API); 
          // store the data received from API call in component state
          if (!didCancel) setData(result.data);
          console.log("Received data: ", result.data)  
        } catch (error) {
          if (!didCancel) setIsError(true);
          console.log("API call failed. Error: ", error)  
        }
  
        // disable setLoading state after data received
        setIsLoading(false); 
      };
      
      fetchData();
  
      // return cleanup function
      return () => {
        didCancel = true;
      };
  
    }, []);
  

    return { data, isLoading, isError };
  
}

