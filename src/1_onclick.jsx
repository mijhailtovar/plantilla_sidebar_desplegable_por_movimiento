import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//import './App.css'

function App() {
/**devuelve el componente Toolbar que acepta 2 parametros que son funciones anomimas para mostrar
 * un mensaje en pantalla cada una
 */
  return (
    <Toolbar
      onPlayMovie={function(){ alert('REPRODUCIENDO') }}
      onUploadImage={function(){ alert('SUBIENDO')}}
    />
  );
}

/**
 * el componente toolbar devuelve la pagina en si, 
 */
function Toolbar({ onPlayMovie, onUploadImage}){
  return(
    <div className='bg-gray-800 font-bold text-white'>
      <button onClick={onPlayMovie}>
        Reproduce pellicula
      </button>
      <button onClick={onUploadImage}>
        subir imagen
      </button>
    </div>
  );
}

export default App
