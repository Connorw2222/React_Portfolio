import React from 'react';
// import { Link } from 'react-router-dom'

function Navbar({setPage,AboutMe,ContactForm}) {
    return (
        <div >
            <header>
                <h2 className="navbarH">
                    <a href="/">
                        <span></span> Connor Werth
                    </a>
                </h2>
                <nav className="navbar">
                    <ul className="navbarEl">
                        <li className="paddingR" onClick={()=>setPage(AboutMe)}>
                               About me
                        </li>
                        <li className="paddingR" onClick={()=>setPage(ContactForm)}>
                            <span >Contact</span>
                        </li>
                        <li className="paddingR">
                            <span>Portfolio</span>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;