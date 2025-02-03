import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li>Cart</li>
            </ul>
        </nav>
    );

}


