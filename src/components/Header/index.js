import React, { useState } from "react";
import styles from "./Header.module.css";
import papai from "../../Images/the best.jpg";

function Header() {
    return (
    <header className="bg-light border-bottom">
        {/* Navegação */}
        <nav className="container py-3">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a href="#home" className="nav-link fw-bold text-dark">HOME</a>
                </li>
                <li className="nav-item">
                    <a href="#mensagem" className="nav-link fw-bold text-dark">MENSAGEM</a>
                </li>
                <li className="nav-item">
                    <a href="#presente" className="nav-link fw-bold text-dark">PRESENTE</a>
                </li>
            </ul>
        </nav>

        {/* Banner */}
<div className="position-relative text-center">
    <img
        src={papai}
        alt="Papai"
        className="w-100"
        style={{ maxHeight: "500px", objectFit: "cover" }}
    />

    <div
        className="position-absolute top-50 start-50 translate-middle text-white"
        style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.7)" }}
    >
        <h1 className={styles.bannerH1}>Nosso Herói</h1>
        <p className={styles.bannerP}>Pai, exemplo de vida e amor!</p>
    </div>
</div>

    </header>
);

}

export default Header;