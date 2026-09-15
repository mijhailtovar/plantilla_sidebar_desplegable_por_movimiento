import React from "react";
//contexto
import { useContext } from "react";
//aqui esta el create context o el contexto creado que guarda el tema
import { ThemeContext } from "../context/ThemeContext";

/**aqui se veran todos los mensajes enviados por el ussuario 
 * y por la ia, incluso algunos mensajes de error
 * 
 * @param
 * @returns -contenido principal, donde se ven los mensajes-
 * 
 */
export default function Chat(){
    //variable de contexto
    const colorsheme = useContext(ThemeContext);
    const class_name = 'panel-' + colorsheme;
    
    return(
        <main className={class_name}>CONTENIDO PRINCIPAL <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum</p></main>
    );
}