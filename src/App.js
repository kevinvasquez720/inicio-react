import React, {Fragment, useState} from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Producto from "./components/Producto";
import Carrito from "./components/carrito";
function App() {
  //State listado de productos
  const[productos, guardarProductos] = useState([
    {id:1,nombre:"Camisa React", precio: 50},
    {id:2,nombre:"Camisa Express", precio: 40},
    {id:3,nombre:"Camisa Electron", precio: 35},
    {id:4,nombre:"Camisa Vue", precio: 25}
  ]);

  //STATES CARRITO
  const[carrito,agregarProducto] = useState([]);
  
    //FECHA ACTUAL
    const ano = new Date().getFullYear();

  return (
      <Fragment>
        <Header
        titulo="Tienda Virtual"
        />

        <h2>Lista de productos</h2>

        {productos.map(producto =>(
          <Producto 
          producto={producto}
          key = {producto.id}
          carrito = {carrito}
          agregarProducto = {agregarProducto}
          productos = {productos}
          />
        ))}

        <Carrito 
        carrito = {carrito}
        agregarProducto={agregarProducto}
        />
        
        <Footer
        //enviando una variable
        fecha={ano}
        />
      </Fragment>
    
  );
}

export default App;
