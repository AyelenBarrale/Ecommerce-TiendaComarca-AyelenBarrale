/* eslint-disable max-len */
import React from 'react';
import './../Nosotros/Nosotros.css';
import fundadores from '../Nosotros/img/vero-pablo.png';
import espacio1 from '../Nosotros/img/espacio-1.jpg';
import espacio2 from '../Nosotros/img/espacio-2.jpeg';
import espacio3 from '../Nosotros/img/espacio-3.jpg';

const Nosotros = () => {
  return (
    <>
      <div className="page-nosotros-container">
        <div className="nosotros-descripcion">
          <h2>¿Qué es Comarca de Creadores?</h2>
          <p className="nosotros-txt">¡Hola, somos Vero y Pablo! En Comarca creamos un espacio, ubicado estrategicamente en Barrio General Paz, donde comercializamos elementos para la creación.</p>
          <p className="nosotros-txt">Creamos un mix entre una artística, mercería y taller de capacitaciones, par que cada persona que ingrese pueda encontrar todo lo que necesita para su proyecto de reciclaje, restauración o creación.<br></br>
                Todos nuestros productos atienden a las tendencias en auge del momento y contamos con modalidad de talleres libres, guiados por un emprendedor especialista en el tema.</p>
          <p className="nosotros-txt">Tenemos una amplia red de proveedores que nos permiten brindarte precio y calidad, sin necesidad de que te desplaces a la zona céntrica de Córdoba para encontrar aquello que buscás.</p>
          <p className="nosotros-txt">Además, contamos con toda la maquinaria necesaria para un pequeño taller de producción textil, y puedas utilizar este espacio para producir.</p>
          <p className="nosotros-txt">También, ofrecemos a artísticas y creadores un punto de venta donde pueden exhibir sus creaciones y comercializar las mismas, a través de la modalidad de consignación.</p>
        </div>
        <div className="fundadores-img">
          <img src={fundadores} alt="fundadores-comarca" />
        </div>
      </div>
      <div className="page-nosotros-container">
        <div className="espacio-img">
          <img
            className="img-item"
            src={espacio1}
            alt="nuestro espacio para talleres" />
          <img
            className="img-item"
            src={espacio2}
            alt="maquinaria para tu producción textil" />
          <img
            className="img-item"
            src={espacio3}
            alt="nuestro espacio de mercería" />
        </div>
      </div>
    </>
  );
};

export default Nosotros;
