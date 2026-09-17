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

    // Variables dinámicas para el footer y sus elementos internos
    const footerTheme = colorsheme === 'dark' 
        ? 'bg-slate-800 border-t border-slate-700 text-slate-100' 
        : 'bg-slate-100 border-t border-slate-300 text-slate-900';
        
    const inputTheme = colorsheme === 'dark' 
        ? 'bg-slate-700 text-white border-slate-600 placeholder-slate-400' 
        : 'bg-white text-slate-900 border-slate-300 placeholder-slate-500';

    const buttonTheme = colorsheme === 'dark'
        ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
        : 'bg-emerald-500 hover:bg-emerald-400 text-black ';

    return(
        <footer className={`h-1/5 px-4 pb-5 flex flex-col justify-center ${footerTheme} transition-colors duration-300`}>
            <p className="text-xs mb-1 opacity-75">PIE DE PAGINA</p>
            <form action="#" className="flex flex-row gap-2 w-full items-center">
               {/* El input ocupa el espacio restante (4/5 aproximadamente gracias a flex) */}
               <input 
                 type="text" 
                 defaultValue='peticion a la ia' 
                 className={`w-4/5 px-3 py-2 rounded border outline-none ${inputTheme}`} 
               />
               {/* El botón ocupa exactamente 1/5 del ancho disponible */}
               <button className={"w-1/5 py-2 rounded transition-colors text-center " + buttonTheme}>
                  Enviar
               </button> 
            </form>
        </footer>
    );
}