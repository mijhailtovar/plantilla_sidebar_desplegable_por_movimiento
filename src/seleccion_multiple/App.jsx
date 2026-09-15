import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.jsx';
import { useImmer } from 'use-immer';

export default function MailClient() {
  const [selectedId, setSelectedId] = useState(null); // marca el id de la carta seleccionada
  //importante, es la banderilla para pasar del estado NoSelected al estada isSelected
  const [isSelected, updateIsSelected] = useImmer(null);
  // ponemos las cartas en un objeto que podemos manejar con react
  //y modificarlo a nuestro antojo
  const [cartas, updateCartas] = useImmer(letters);

  // Calcular el total antes de renderizar, es una constante que cambia con cada render
  const totalStarred = cartas.filter(carta => carta.isStarred).length;

  //funcion que se pasa a el componente letter como un prop, esta a su vez trae el padre el 
  //id de la carta seleccionada
  function handleToggle(toggledId) {
    //se le añadira al selectedID el id de la carta seleccionada
    setSelectedId(toggledId);
    /**pasamos al estado isSelected, se ejecutara el if de abajo (despues de esta funcion), 
     * pero, justo despues de terminar ese if,
     * debemos  volver a poner esto a
     * false o se ejecutaran bucles infinitos
     */
    updateIsSelected(draft => draft = true);
  }
  
  /**
   * si estamos en el estado isSelected
   * se actualizaran las cartas
   */
  if (isSelected) {
      updateCartas(draft => {
        // se usa la funcion find para entontrar la C (carta) que tenga el id igual a la carta
        //seleccionada
      const carta_seleccionada = draft.find(C => C.id === selectedId);
      //si se encuentra cambiara la banderilla interna de la carta de valor opuesto
      //si estaba seleccionada ya no lo esta, pero si no lo estaba ahora lo esta
      if (carta_seleccionada) {
        carta_seleccionada.isStarred = !carta_seleccionada.isStarred;
      }
    });

    //lo ponemos a false para evitar bubles infinitos
    updateIsSelected(draft => draft = false);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {cartas.map(carta => (
          <Letter
            key={carta.id}
            letter={carta}
            
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            Tus cartas seleccionadas: <br></br> {totalStarred}  Cartas
          </b>
        </p>
      </ul>
    </>
  );
}
