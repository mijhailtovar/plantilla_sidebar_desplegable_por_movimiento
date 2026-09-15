import { useState } from 'react';
import { useImmer } from 'use-immer';

/**son dos formularios que al ser editado un oel otro tambien sufre elmismo
 * cambio, estan en sincronia, la idea es que comparten la misma variable
 * de estado 'texto' controlada desde el componente padre
 * este sera el 'Single Source of Truth (SSoT)' o unica fuente de la verdad
 * que administrara el texto para compartirlo con el otro
 * 'input hermano'
 */

export default function SyncedInputs() {
    //almacenara el texto de ambos controladores
    const [texto, updateTexto] = useImmer('');

    /**
     la siguiente funcion obtendra el atributo e (que identifica el input y es util para obtener el valor)
     * actualizara la variable de estado al valor que introdusca el usuario en tiempo real (evento onchange)
     * la forma de la funcion const X = function X(){}
     * es por legibilidad es equivalente a simplemente poner function handleChange(e)...
     * este codigo es un ejemplo de elevar el estado y de como sincronizar multiples componentes
     * incluso se puede modificar la funcion que se le pasa por prob para que actue diferente
     * @param {event} evento 
     * @return {null}
     * 
     * @example
     * manejadorCambio(e)
     * retorna nada, pero actualiza el texto
     * 
     */
    const manejadorCambio = function handleChange(e) {
        updateTexto(e.target.value);
    }

    manejadorCambio()

  return (
    <>
        {/**se pasa a el componente input los 3 atributos, el mensaje del label, el texto o valor
         * que se cambiara dinamicamente y el otro es afectado y la funcion que se ejecutara al ser
         * alterado uno de los dos
         */}
      <Input label="First input" text={texto} handleChange={manejadorCambio} />
      <br />
      <Input label="Second input" text={texto} handleChange={manejadorCambio} />
    </>
  );
}

function Input({ label, text, handleChange }) {
  //const [text, setText] = useState('');

  return (
    <label>
      {label}
      {' '}
      {/**nota como es llamada la funcion anonima de onChange se le pasa el atributo e (del objeto)
       * y este a su vez se le pasa a la funcion que es un prob, que a su vez lo 'eleva al componente padre'
       * esto se llama 'lifting state' o levantar el estado
       */}
      <input
        value={text}
        onChange={function(e){
            handleChange(e)
        }}
      />
    </label>
  );
}
