import React from "react";
import "./TopProductsSection.css";

// Importe suas imagens aqui
const legalCodesImage = require('../images/legalCodes.png')
const legalJournalsImage = require('../images/legalJournals.png')

const TopProductsSection: React.FC = () => {
    return (
        <div className="top-products-section">
            <div className="content-container">
                <div className="text-column">
                    <h2 className="section-title">Explore our top</h2>
                    <p className="section-description">
                        Discover a wide range of law-related products inspired by ARA Família Legis. From essential legal texts to stylish merchandise,
                        find everything you need for you legal journey. Our products are meticulously curated for quality and relevance,
                        embodying the essence of legal excellence. Start exploring now!
                    </p>
                </div>
                <div className="products-column">
                    <div className="products-container">
                        <div className="product-card2">
                            <img src={legalCodesImage} alt="Legal Codes" className="product-image" />
                            <div className="product-info">
                                <span className="product-price">$9</span>
                                <h3 className="product-title">Legal Codes</h3>
                                <p className="product-description">Comprehensive legal references</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products-column">
                    <div className="products-container">
                        <div className="product-card2">
                            <img src={legalJournalsImage} alt="Legal Journals" className="product-image" />
                            <div className="product-info">
                                <span className="product-price">$9</span>
                                <h3 className="product-title">Latest Journals</h3>
                                <p className="product-description">Latest legal insights</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="view-more-button">
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/circled-chevron-right--v1.png" alt="circled-chevron-right--v1"/>
                </button>
            </div>
        </div>
    );
};

export default TopProductsSection;