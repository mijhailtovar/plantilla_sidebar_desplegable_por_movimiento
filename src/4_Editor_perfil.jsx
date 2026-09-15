import { useState } from "react";
//el immer lo tienes que instalar con 'npm install use-immer'
import { useImmer } from "use-immer";//use immer necesario para usar la sintraxis immer, mas comoda el actualizar

export default function EditProfile() {
// banderilla de edit para cambiar los estilos, usando una mecanica de toogle con la clase hidden
  const [edit, setEdit] = useState(true);
  //tendra el valor del usuario actualizado en cada render
  const [usuario, updateUsuario] = useImmer({
    nombre: 'Jane',
    apellido: 'Jacobs',
  });

  let label_css = '';
  let input_css = '';
  let mensaje_boton = 'Edit profile';

  //se encarga de prevenir el estado de subida para que losinput actualicen las variables de usuario
  //y cambia la banderilla de edit para aplicar los estilos de la clase hidden (ver styles.css)
  //y mostrar-ocultar los campos label e input, cuando estamos en el estado
  //edit se miestran los input, en el estado show o vista se muestran los labels
  function handleSubmitForm(e) {
    e.preventDefault();
    (edit ? setEdit(false) : setEdit(true))

    console.log(edit + ' ' + input_css);
  }

  //cuando el input de nombre cambie se actualizara el valor del usuario.nombre
  //draft actua como usuario para actualizar el nombre si la sintaxis larga de useState de ...usuario
  //es la manera mas comoda y la unica de recoger datos de un input
  function handleNombreChange(e){
    updateUsuario(function(draft){
      draft.nombre = e.target.value;
    });
  }

  // la forma function(){} es equivalente a (draft) => {} tambien se puede siempre que solo tengamos
  // un atributo hacer 'draft => {}' ver funciones flecha en la documentaicon de js
  function handleApellidoChange(e){
    updateUsuario(draft => {
      draft.apellido = e.target.value;
    })
  }
  /** es necesario poner este if que cambia los estilos FUERA de las funciones
   * manejadoras de eventos para que se ejecute siempre que se recargue la pagina
   */
  if (edit) {
    input_css += 'hidden';
    mensaje_boton = 'Edit profile';
  } else {
    label_css += 'hidden';
    mensaje_boton = 'Show profile';
  }
  return (
    <form onSubmit={handleSubmitForm}>
      <label>
        First name:{' '}
        <b className={label_css}> {usuario.nombre} </b>
        <input name="f-name" className={input_css} onChange={handleNombreChange} />
      </label>
      <label>
        Last name:{' '}
        <b className={label_css} > {usuario.apellido} </b>
        <input name="l-name" className={input_css} onChange={handleApellidoChange} />
      </label>
      <button type="submit">
        {mensaje_boton}
      </button>
      <p><i>Hello, {usuario.nombre + ' ' + usuario.apellido}!</i></p>
    </form>
  );
}
