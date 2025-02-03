import Navbar from  './Navbar';
import Products from './Products';


export default function Shop() {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <div>
                <h1>Shop</h1>
            </div>
            <Products />
        </>
    );
}