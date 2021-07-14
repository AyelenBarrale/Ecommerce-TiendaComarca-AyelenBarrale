import React from 'react';
import './../Talleres/Talleres.css';

import bordado from '../Talleres/img/bordado-mex.png';
import macrame from '../Talleres/img/macrame.png';
import molderia from '../Talleres/img/molderia.png';
import mosaiquismo from '../Talleres/img/mosaiquismo.png';
import pintura from '../Talleres/img/pintura.png';
import sublimacion from '../Talleres/img/sublimacion.png';

const Talleres = () => {
    return (
        <div className="talleres-container">
            <h2>Aprendé con nosotros</h2>
            <p className="talleres-txt">Contactanos vía whatsapp para consultar disponibilidad y cupo.</p>
            <div className="talleres-img-box">
                <img className="talleres-img" src={bordado} alt="taller de bordado" />
                <img className="talleres-img" src={macrame} alt="taller de macrame" />
                <img className="talleres-img" src={molderia} alt="taler de molderia" />
                <img className="talleres-img" src={mosaiquismo} alt="taller de mosaiquismo" />
                <img className="talleres-img" src={pintura} alt="taller de pintura" />
                <img className="talleres-img" src={sublimacion} alt="taller e sublimacion" />
            </div>
        </div>
    )
}

export default Talleres;
