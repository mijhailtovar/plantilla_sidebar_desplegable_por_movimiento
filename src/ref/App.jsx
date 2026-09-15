import { useRef, useState } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  // let timeoutID = null
  /**
   * el ref es como un bolsillo secreto que react no rastrea, no es un state ni actua como
   * una variable comun, util para variables intermedias como esta, almacena el id del timeout
   * necesario para detenerlo en un futuro, si usas una variable comun, no funciona, porque
   * react fuerza a actualizarla en cada render con el valor null o el de iniciacion,
   * tendrias que hacer un state y aun haci es complicado porque seria para cada render
   * (resultado inesperado usando setTimeout)
   */
  const timeoutID = useRef(null);

  /**
   * funcion que cuando haces click en el elemento o boton, cambia al estado 'enviando'
   * luego guarda el id de un timeout, mostrara un mensaje de envio en 3 segundos, a no ser
   * que se cancele con la otra funcion de abajo (handleUndo)
   */
  function handleSend() {
    setIsSending(true);
    timeoutID.current = setTimeout(() => {
      alert('¡Enviado!');
      setIsSending(false);
    }, 3000);
  }

  /**
   * usa el id del timeout pasado con una referencia 'ref' para parar el timeout declarado en la
   * funcion handleSend
   */
  function handleUndo() {
    console.log(timeoutID);
    setIsSending(false);
    clearTimeout(timeoutID.current);
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? 'Enviando...' : 'Enviar'}
      </button>
      {isSending &&
        <button onClick={handleUndo}>
          Deshacer
        </button>
      }
    </>
  );
}
