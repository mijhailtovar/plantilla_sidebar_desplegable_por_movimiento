import { useState } from 'react'


import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//import './App.css'

export default function Chat(){
  const [para, setPara] = useState('Alice');
  const [mensaje, setMensaje] = useState('Hello');

  function manejo_subida(e){
    e.preventDefault();

    setTimeout(function(){
      alert('Tu dices "' + mensaje + '" para ' + para);
    }, 5000);
  }

  return(
    <form onSubmit={manejo_subida}>
      <label>
        Para:{' '} 
        <select
          value={para}
          onChange={e => setPara(e.target.value)}
        >
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>

        </select>
      </label>
      <textarea 
        placeholder='mensaje' 
        value={mensaje}
        onChange={e => setMensaje(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}