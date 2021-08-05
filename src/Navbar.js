import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

export const Navbar = () => {
    let navbarStyle = {
        position: "top",
        color: "Black",
        background: "White",
    }
    return (
        <div className="changeFont">
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={navbarStyle}>
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li>
                                   <div className="app-name">
                                   <h1 className="app-font">PICASSOHUB </h1>
                                   </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-font " aria-current="page" href="home">  Home | </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-font" aria-current="page" href="about"> About |</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-font" aria-current="page" href="contact">Contact Us |</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/shop" className="nav-font" aria-current="page" href="cart">Shop |</Link>
                                </li>
                                <NavDropdown className="nav-font" title="Gallery" id="basic-nav-dropdown" >
                                    <NavDropdown.Item href="wallgallery">Wall Gallery</NavDropdown.Item>
                                    <NavDropdown.Item href="abstract">Abstract Paintings</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="frames">Frames</NavDropdown.Item>
                                </NavDropdown>
                            </ul>
                            <form className="search-div">
                                <input className="search-field" type="search" placeholder="...Find art here"/>
                                <button className="search-btn" type="submit">Search</button>
                            </form>
                            <li className="nav-item">
                                    <Link to="/login" className="nav-login" aria-current="page">Login/Register</Link>
                                </li>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
