import { useState } from 'react';
import { useImmer } from 'use-immer';
import { foods, filterItems } from './data.js';

/**esta funcion es un componente padre que tiene un cuadro de busqueda que encuentra filtrando
 * una lista de objetos ocn registros, y los muestra en tiempo real, usando el evento onChange
 * 
 * @returns DOM
 */

export default function FilterableList() {
  const [query, updateQuery] = useImmer('');
  //console.log(foods);
  //console.log(query);

  //usa la funcion filteritems para encontrar los articulos que coincidadn con query
  //al principio muestra todos, porque esta vacio, pero cuando el pusuario preciona una tecla como
  //'s' entonces la lista se actualiza
  const comida_encontrada = filterItems(foods, query);

  function handleChange(e) {
    updateQuery(e.target.value);
  }

  return (
    <>
      <SearchBar query={query} handleChange={handleChange} />
      <hr />
      <List items={comida_encontrada} />
    </>
  );
}

function SearchBar({query, handleChange}) {
  //const [query, setQuery] = useState('');

  return (
    <label>
      Search:{' '}
      {/**mira la fonma en que el evento Onchange llama a handleChange que es una prob pero tambien 
       * una funcion esta lo manda al componente padre
       */}
      <input
        value={query}
        onChange={
          function(e){
            handleChange(e);
          }
        }
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
