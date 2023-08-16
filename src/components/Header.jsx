import React, { useContext } from "react";
import { Link } from "react-router-dom";

function daysUntilJune8th2024() {
    const today = new Date();
    const targetDate = new Date(2024, 5, 8);

    const timeDifference = targetDate - today;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference > 0) {
        return `FALTAN ${daysDifference} DÍAS`;
    } else if (daysDifference === 0) {
        return 'Hoy es el día!';
    } 
}

function Header() {
    return (
        <div>
            <div className="main-container">
                <div className="h1-container">
                    <h1>Ana & Alex</h1>
                </div>
                <div className="subtext-container">
                    <p>8 DE JUNIO DE 2023 - CIUDAD DE MÉXICO</p>
                    <p>{daysUntilJune8th2024()}</p>
                </div>
                <div className="main-links">
                    <Link to="/" className="link-item">Inicio</Link>
                    <Link to="/boda" className="link-item">Boda</Link>
                    <Link to="/fotos" className="link-item">Fotos</Link>
                    <Link to="/regalos" className="link-item">Mesa de Regalos</Link>
                    <Link to="/faq" className="link-item">Q&A</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;