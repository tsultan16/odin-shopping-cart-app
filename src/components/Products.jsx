import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "../App.css";

// search API
const API = "https://fakestoreapi.com/products";



export default function Products() {
    // const [queryInput, setQueryInput] = useState("");
    // const [query, setQuery] = useState(DEFAULT_QUERY);
    
    const { data, isLoading, isError } = useQuery();
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setQuery(queryInput);
    //     setQueryInput("");
    //     console.log("Submitted new query: ", queryInput);
    //   };
    
    //   const handleChange = (e) => {
    //     setQueryInput(e.target.value);
    //   };
    

    return (
      <div>
        {/* <form onSubmit={handleSubmit}>
          <label>
            Enter Search Query: 
            <input type="text" name="search" id="search" onChange={handleChange} value={queryInput} />
          </label>
          <button type="submit">Submit</button>
        </form> */}
  
        {isError ? (<div>Oops... something went wrong.</div>):
          ( <>
            <ul className="products-list">
              {isLoading? (<div>Loading...</div>):
              (data.map( (item) => 
                (<li key={item.id}>
                  <ProductCard product={item} />
                </li>)
              ))}
            </ul>
            
            </>)}
      </div>
    );

}




function useQuery() {

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
  