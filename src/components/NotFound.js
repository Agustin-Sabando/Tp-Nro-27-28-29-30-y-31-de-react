import React from 'react';
import meme1 from '../assets/images/memeProgramacion.webp'
import meme2 from '../assets/images/taPotenteAnonimus.jpg'

function NotFound(){
    return(
        <div className="text-center">
            <img src={meme1} alt="Digital House"/>
            <h1 >ERROR 404 - PAGINA NO ENCONTRADA</h1>
            <h3>SENTIMOS LAS MOLESTIAS GENERADAS, ESTAMOS TRABAJANDO PARA MEJORAR LA EXPERIENCIA DE USUARIO</h3>
            <img className="w-50" src={meme2} alt="Digital House"/>
        </div>
    )
}


export default NotFound;