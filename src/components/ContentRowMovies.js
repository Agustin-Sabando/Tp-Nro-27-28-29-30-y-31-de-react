import React from 'react';

import SmallCard from './Tarjetas';

let peliculasDb = {
    color:   "primary",
    titulo: "Peliculas en Base De Datos",
    valor: 21,
    icono: "fas fa-film",
}

let premios ={
    color:   "success",
    titulo: "Premios Totales",
    valor: 79,
    icono: "fas fa-award",
}

let actores = {
    color:   "warning",
    titulo: "Totalidad de Actores",
    valor: 49,
    icono: "fas fa-user",
}

let props = [peliculasDb,premios,actores];


function ContentRowTop(){
    return (
        <React.Fragment>
        <div className="row">
            {
                props.map((descripcion, index)=>{
                    return <SmallCard  {...descripcion}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;