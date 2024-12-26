import React from "react";
import "./ImageSection.css"; // Certifique-se de que o CSS está em um arquivo separado

const book = require('../images/book2.png');

const ImageSection: React.FC = () => {
    return (
        <div className="image-section">
            <div className="image-overlay">
                <h1>Legal Books Collection</h1>
                <img src={book} alt="Bookshelf" className="right-image" /> {/* Imagem à direita */}
            </div>
        </div>
    );
};

export default ImageSection;