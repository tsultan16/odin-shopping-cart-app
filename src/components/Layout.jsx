import { useState } from 'react';
import { Link, Outlet} from 'react-router-dom';


export default function Layout() {
    const [ cartQuantity, setCartQuantity ] = useState(0);

    return (
        <>
            <header>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li>Cart - {cartQuantity} items</li>
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet context={{ cartQuantity, setCartQuantity }}/>
            </main>
        </>
    );

}


