import './Nav.css'
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav>
            <ul>
                <li><button className='button'><Link to="/">Home</Link></button></li>
                <li><button className='button'><Link to="/vehicles">Vehicles</Link></button></li>
                <li><button className='button'><Link to="/about">About</Link></button></li>
                <li><button className='button'><Link to="/contact">Contact</Link></button></li>
            </ul>
        </nav>
    )
}

export default NavBar;