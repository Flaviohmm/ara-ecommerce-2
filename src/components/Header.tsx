import React from 'react';
import './Header.css';

const icon = require('../images/icon-search.png');

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <span>ARA</span>
                <br />
                <span>Legis</span>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#shop">Shop</a></li>
                    <li><a href="#browse">Browse</a></li>
                    <li><a href="#information">Information</a></li>
                </ul>
            </nav>
            <div className="search-container">
                <input type="text" placeholder="Search products" />
                <button type="button" className="search-button"><img src={icon} alt="Search Icon" /></button>
            </div>
        </header>
    );
};

export default Header;