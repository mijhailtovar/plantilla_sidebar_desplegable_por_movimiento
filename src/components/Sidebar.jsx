import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/**esta es la barra lateral, se oculta y muestra, contiene el historial de chats
 * ademas de el boton de nuevo chat
 * 
 * @param  
 * @returns 
 */
export default function Sidebar({handleClick}){
    //variable del contexto que obtendra el tema
    const colorsheme = useContext(ThemeContext);
    const class_name = 'panel-' + colorsheme;

    return(
        <aside className={class_name}>
            <div className="flex flex-row">
                <b className="basis-1/2">SIDEBAR</b>
                <button className="basis-1/2 bg-amber-500" onClick={handleClick}>cierrame</button>
            </div>
            
                <nav className="list-none">
                    <li>primer chat</li>
                    <li>segundo chat</li>
                </nav>
        </aside>
    );
}