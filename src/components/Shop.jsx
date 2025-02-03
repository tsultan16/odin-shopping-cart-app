import Navbar from  './Navbar';
import Products from './Products';


export default function Shop() {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <div>
                <h1>Shopping</h1>
                <p>This is the Shop page.</p>
            </div>
            <Products />
        </>
    );
}