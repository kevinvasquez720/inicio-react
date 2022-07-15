import React from "react";

const seleccionarProducto = id =>{
    console.log("comprando ",id)
    }
const Producto = ({producto})=>{
    const {nombre, precio, id} = producto;
    return(
        <div>
            <h3>{nombre}</h3>
            <p>{precio}</p>
            <button type="button" 
            onClick={()=>seleccionarProducto(id)}>
                Agregar
            </button>
        </div>
    )
}
export default Producto;