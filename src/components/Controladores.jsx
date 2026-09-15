import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/**esta funcion contiene el footer, que contiene el textarea para añadir
 * texto e introducir la peticion, para preguntarle a la ia, ademas del boton para 
 * enviar la peticion
 * 
 * @param  
 * @returns <footer>
 */
export default function Controladores(){
    //variable del contexto
    const colorsheme = useContext(ThemeContext);
    const class_name = 'panel-' + colorsheme;
    const clase_boton = 'button-' + colorsheme;

    return(
        <footer className={class_name}>
            PIE DE PAGINA
            <form action="#" >
               <input type="text" defaultValue='peticion a la ia' className={colorsheme}/>
                <button className={clase_boton}>Enviar</button> 
            </form>
        </footer>
    );
}