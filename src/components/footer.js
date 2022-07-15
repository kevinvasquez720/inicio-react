import React from 'react';

const Footer = (props)=>{
    return(
        <footer className='footerApp' id='footerApp'>
            <p>{props.fecha} Todos los derechos reservados</p>
        </footer>
    )
}
export default Footer