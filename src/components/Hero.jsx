import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero.png';

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1 className="hero-title">Equipa tu<br />Aventura</h1>
                <p className="hero-subtitle">CORREAS TÁCTICAS Y DE CUERO PARA LOS MÁS EXIGENTES</p>
                <a href="#shop" className="btn btn-primary">Ver Colección</a>
            </div>

            
        </section>
    );
};

export default Hero;
