import './Nav.css'

function NavBar() {

    return (
        <nav>
            <a href="../HomePage.js"><button className="button">Home</button></a>
            <a href="../Vehicles.js"><button className="button">Vehicles</button></a>
            <a href="../AboutPage.js"><button className="button">About</button></a>
            <a href="../ContactPage.js"><button className="button">Contact</button></a>
        </nav>
    )
}

export default NavBar;