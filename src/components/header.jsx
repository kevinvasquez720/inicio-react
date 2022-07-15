import React from 'react'

function Header(props){   
    /* const edad = 24;
    let mensaje;
    if(edad >=18){
        mensaje = "Eres mayor de edad";
    }
    else{
        mensaje = "Eres menor de edad";
    } */
    return(
        <header className='Encabezado' id='Encabezado'>
            <h1>{props.titulo}</h1>
        </header>
    )
}
export default Header;