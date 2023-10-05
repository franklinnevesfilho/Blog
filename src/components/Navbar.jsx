import React from 'react';

function Navbar(props) {
    return (
        <>
            <nav className="navbar">
                <h1 className={'logo'}>LOGO</h1>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;