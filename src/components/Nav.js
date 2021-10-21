import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"


const Nav = () => {

    const [click, setClick] = useState(false);

    const clickHandler = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    HowardCo.
                </Link>
                <div className="menu-icon" onClick={clickHandler}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={click ? "nav-menu active": "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/service" className="nav-links" onClick={closeMobileMenu}>
                            Service
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <a href="https://www.youtube.com/watch?v=I2UBjN5ER4s&ab_channel=BrianDesign"> Youtube </a>
            </div>

        </nav>
    )
}

export default Nav