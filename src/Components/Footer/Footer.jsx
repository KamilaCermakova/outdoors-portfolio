import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <h2 className="footer__logo">WanderTrails</h2>
            </div>
            <p className="footer__copyright">
                Built by <a href="#" className="footer__link">Kamila Čermáková</a> for the portfolio purpose only.<br />
            </p>
        </footer>
    );
}
