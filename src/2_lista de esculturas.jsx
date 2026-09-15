import { useState } from 'react'
import { sculptureList } from './data.js';

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//import './App.css'

export default function Gallery() {
  const [indice, setIndice] = useState(0);
  const [mostrarMas, setMostrarMas] = useState(false);

  function manejador_click_siguiente(){
    //si no se alcanzo el final del array de esculturas avanzamos
    if(indice < sculptureList.length -1){
      setIndice(indice + 1);
    } else {
      // si no volvemos a la primera escultura
      setIndice(0);
    }
  }

  function manejar_mas_click(){
    setMostrarMas(!mostrarMas); //cambia el valor de la bandera
  }

  let sculpture = sculptureList[indice];
  return(
    <>
      <button onClick={manejador_click_siguiente}>
        Siguiente
      </button>
      <h2>
        <i> {sculpture.name} </i>
        por: {sculpture.artist}
      </h2>
      <h3>
        ({indice +1} de {sculpture.length})
      </h3>
      <button onClick={manejar_mas_click}>
        {mostrarMas ? 'Ocultar' : 'Mostrar'} detalles
      </button>
      {mostrarMas && 
        <p> {sculpture.description} </p>
      }
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  )

}
