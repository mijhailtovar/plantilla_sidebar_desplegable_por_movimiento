import React, { useContext } from 'react';
import { useImmer } from 'use-immer';
//componentes
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Controladores from './components/Controladores';
// importa el contexto para que envuelva la aplicacion entera
//de esta manera todos los componentes tienen acceso al value de ThemeContext
import { ThemeContext } from './context/ThemeContext';



const App = () => {
    //variable para el cambio de estado, que cambiara el valor por defecto del context
    const [colorsheme, updateColorsheme] = useImmer('dark');
    const [active, updateActive] = useImmer(false);

    // Clases dinámicas de Tailwind según el tema activo
    const themeBg = colorsheme === 'dark' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900';
    const buttonThemeClass = colorsheme === 'dark' 
      ? 'bg-slate-700 text-white hover:bg-slate-600' 
      : 'bg-slate-300 text-slate-800 hover:bg-slate-400';
  

    function handleClickButton(){
      //alert('me clickeaste papy');
      updateActive(draft => !draft);
    }

  return (
    <ThemeContext value={colorsheme}>
        {/**contenedor de la applicacion 
         *
         *   div de prueba para responsive:  
            <div className="app h-screen text-white max-sm:bg-indigo-500 sm:bg-amber-600 md:bg-blue-500 lg:bg-cyan-700 ">
         */}
        <div className={"app h-screen text-base/6 md:text-lg/7 lg:text-xl/7 transition-colors " + themeBg}>
          
            {/**flex flex-col indica que el header siempre estara arriba */}
            <div className='flex flex-col'>
              {/**LOGO DEL CHAT, BOTON DE CAMBIAR TEMA, TEXTO DE CHATBOT, BANNER */}
              <div className='flex flex-row justify-between w-full h-32 font-mono text-center text-2xl md:text-3xl'>
                {/**boton para activar y desactivar el sidebar */}
                <div className={'h-10'}><button className={'w-20 h-10 ' + buttonThemeClass} onClick={handleClickButton} >menu</button></div>
                <Header className='' ></Header>
                <div className=''>
    
                    {/**boton para cambiar de tema */}
                  <button 
                    className={buttonThemeClass}
                    onClick={
                      function(){
                        if (colorsheme == 'dark') {
                          updateColorsheme(draft => draft = 'light');
                        }else if (colorsheme == 'light') {
                          updateColorsheme(draft => draft = 'dark')
                        }else{
                          throw new Error("ERROR EN EL VALOR DEL COLORSHEME");
                        }
                        //console.log(colorsheme);
                      }
                    }
                  >
                    {colorsheme === 'dark' ? 'light-mode' : 'dark-mode'}
                  </button>

                </div>                
              </div>
              
              {/** AREA CENTRAL: SIDEBAR + CONTENIDO PRINCIPAL
               * NOTA: BREACKPOINTS: 
               * 360PX por defecto luego
               * sm	40rem (640px)	@media (width >= 40rem) { ... }
                  md	48rem (768px)	@media (width >= 48rem) { ... }
                  lg	64rem (1024px)	@media (width >= 64rem) { ... }
               */}
              <div className={`flex flex-row justify-center transition-all  relative top-0 right-0  +     
              ${active
                  ? 'w-full right-0'
                  : 'w-[calc(100%+40vw)] right-[40vw] sm:w-[calc(100%+40vw)] sm:right-[40vw] md:w-[calc(100%+25vw)] md:right-[25vw] lg:w-[calc(100%+20vw)] lg:right-[20vw]'
                }`} 
              >
                {/** sidebar DESPLEGABLE, A LA IZQUIERDA DEL ASIDE*/}
                <div 
                  className={ ' w-[40vw] sm:w-[40vw] md:w-[25vw] lg:w-[20vw] ' +
                  ` transition-all duration-300` }
                  >
                  <Sidebar handleClick={handleClickButton}></Sidebar>
                </div>
          
                    {/**contenido principal, el area de los mensajes */}
                    <div className='w-screen grow bg-red-600'><Chat></Chat></div>

              </div>

              {/**FOOTER area del controlador, donde esta el input y el boton de enviar */}
              <div className=''><Controladores ></Controladores></div>
            </div>

              
        </div> {/**fin del contenedor general de la aplicacion */}
    </ThemeContext>
   
  );
};

export default App;