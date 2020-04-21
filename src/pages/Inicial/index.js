import React from 'react';

import '../../global.css';
import './style.css';

import logoImg from '../../assets/NegaRaiz.svg';

export default function Inicial() {
    return (
        <div className="inicial-container">


            <div className="menu">
                <section>

                    <img src={logoImg} alt="NegaRaiz"/>
                    
                </section>

                <h1>Serviços</h1>
                <h1>Sobre</h1>
                <h1>Contato</h1>
            </div>


            <div className="content">

                <section>

                    <h1>Seu cabelo fala por você</h1>

                </section>


                <button className="button" type="submit">Depoimentos</button>

            </div>



        </div>
    );
}