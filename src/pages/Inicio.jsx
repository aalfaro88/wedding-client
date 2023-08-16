import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";


function HomePage() {
    return (
        <div>
            <div className="image-section">                
                <div className="image-container">
                    <img src="/images/Portada2.jpeg" alt="Portada" />
               </div>
            </div>
            <div className="general-info">
                <div className="box1">
                    <p>JUNIO 8,</p>
                    <p>2024</p>
                </div>
                <div className="box2">
                    <p>ALTTO</p>
                    <p>SAN ANGEL</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
