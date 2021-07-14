import React from 'react';
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-left">
                <i className="fas fa-map-marker-alt"></i>
                <p className="txt-footer">Lima 742 - Barrio General Paz <br></br> 
                Córdoba, Argentina</p>
            </div>
            <div className="footer-center">
                <p className="txt-footer">Barrale Web Development <br></br> Copyright © 2021</p>
            </div>
            <div className="footer-right">
                <div className="footer-right-1">
                    <p className="txt-footer right">Seguinos en </p>
                    <a href="https://www.instagram.com/comarcadecreadores/" target="_blank"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="footer-right-2">
                    <p className="txt-footer right">Contactanos </p>
                    <a href="https://api.whatsapp.com/send?phone=543515430203" target="_blank"><i className="fab fa-whatsapp"></i></a>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;
