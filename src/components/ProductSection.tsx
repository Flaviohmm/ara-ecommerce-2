import React, { useState } from "react";
import "./ProductSection.css";

const image1 = require('../images/image1.png');
const image2 = require('../images/image2.png');
const image3 = require('../images/image3.png');
const image4 = require('../images/image4.png');
const image5 = require('../images/image5.png');
const image6 = require('../images/image6.png');
const image7 = require('../images/image7.png');
const image8 = require('../images/image8.png');

const products = [
    { id: 1, title: 'Legal Books', price: '$15', imageUrl: image1 },
    { id: 2, title: 'Legal Books', price: '$31', imageUrl: image2 },
    { id: 3, title: 'Legal Books', price: '$12', imageUrl: image3 },
    { id: 4, title: 'Legal Books', price: '$12', imageUrl: image4 },
    { id: 5, title: 'Legal Books', price: '$10', imageUrl: image4 },
    { id: 6, title: 'Legal Books', price: '$10', imageUrl: image5 },
    { id: 7, title: 'Legal Books', price: '$12', imageUrl: image6 },
    { id: 8, title: 'Legal Books', price: '$17', imageUrl: image7 },
    { id: 9, title: 'Legal Books', price: '$10', imageUrl: image8 },
];

const ProductSection: React.FC = () => {
    const [isPublisherOpen, setPublisherOpen] = useState(false);

    const togglePublisher = () => {
        setPublisherOpen(!isPublisherOpen);
    }

    return (
        <div className="product-section">
            <aside className="filter-section">
                <h3>Filter</h3>
                <ul>
                    <li>Product type</li>
                    <li>Category</li>
                    <li>Author</li>
                    <li onClick={togglePublisher}>
                        <span>Publisher</span>
                        <span className={`arrow ${isPublisherOpen ? 'rotate' : ''}`}>▼</span>
                    </li>
                    {isPublisherOpen && (
                        <ul className="subsection">
                            <li>
                                <label className="custom-checkbox">
                                    <input type="checkbox" />
                                    <span className="checkbox-label">
                                        <svg className="checkmark" viewBox="0 0 24 24">
                                            <path d="M7 14l2 2 5-5m0 0l5-5M7 14l-5-5" fill="none" stroke="white" strokeWidth="6"/>
                                        </svg>
                                    </span>
                                    <span className="checkbox-text">Education</span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-checkbox">
                                    <input type="checkbox" />
                                    <span className="checkbox-label">
                                        <svg className="checkmark" viewBox="0 0 24 24">
                                            <path d="M7 14l2 2 5-5m0 0l5-5M7 14l-5-5" fill="none" stroke="white" strokeWidth="6"/>
                                        </svg>
                                    </span>
                                    <span className="checkbox-text">Fictional</span>
                                </label>
                            </li>
                        </ul>
                    )}
                    <li>Edition</li>
                </ul>
            </aside>
            <div className="button-container">
                <button className="filter-button">Books</button>
                <button className="filter-button">Shirts</button>
                <button className="filter-button">Mugs</button>
                <button className="filter-button">Hats</button>
                <div className="products-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.imageUrl} alt={product.title} className="product-image" />
                            <div className="product-info">
                                <h4>{product.title}</h4>
                                <p className="product-price">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
