import React from "react";
import "./ProductSection.css";

const image1 = require('../images/image1.png');
const image2 = require('../images/image2.png');
const image3 = require('../images/image3.png');
const image4 = require('../images/image4.png');

const products = [
    { id: 1, title: 'Legal Books', price: '$15', imageUrl: image1 },
    { id: 2, title: 'Legal Books', price: '$31', imageUrl: image2 },
    { id: 3, title: 'Legal Books', price: '$12', imageUrl: image3 },
    { id: 4, title: 'Legal Books', price: '$12', imageUrl: image4 },
];

const ProductSection: React.FC = () => {
    return (
        <div className="product-section">
            <aside className="filter-section">
                <h3>Filter</h3>
                <ul>
                    <li>Product type</li>
                    <li>Category</li>
                    <li>Author</li>
                    <li>Publisher</li>
                    <li>Edition</li>
                </ul>
                <div className="publisher-filter">
                    <span>Publisher</span>
                    <label>
                        <input type="checkbox" /> Educational
                    </label>
                    <label>
                        <input type="checkbox" /> Fictional
                    </label>
                </div>
            </aside>
            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.imageUrl} alt={product.title} className="product-image" />
                        <div className="product-info">
                            <h4>{product.title}</h4>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSection;
