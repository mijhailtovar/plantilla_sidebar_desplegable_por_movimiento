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
    const [colorsheme, updateColorsheme] = useImmer('light');
    const [clase_sidebar, updateClase_sidebar] = useImmer('');
    const [active, updateActive] = useImmer(false);

    const clase_boton = 'button-' + colorsheme;

  

    function handleClickButton(){
      //alert('me clickeaste papy');
      updateActive(draft => !draft);
      console.log(clase_sidebar);
    }

  return (
    <ThemeContext value={colorsheme}>
        {/**contenedor de la applicacion 
         *
         *   div de prueba para responsive:  
            <div className="app h-screen text-white bg-slate-800 ">
         */}
        
          <div className="app h-screen text-white max-sm:bg-indigo-500 sm:bg-amber-600 md:bg-blue-500 lg:bg-cyan-700 ">
            {/**flex flex-col indica que el header siempre estara arriba */}
            <div className='flex flex-col'>
              {/**LOGO DEL CHAT, BOTON DE CAMBIAR TEMA, TEXTO DE CHATBOT, BANNER */}
              <div className='flex flex-row justify-between w-full h-32 font-mono text-center text-2xl md:text-3xl'>
                {/**boton para activar y desactivar el sidebar */}
                <div className={` bg-amber-400 `}><button className='w-10 h-4 bg-amber-800' onClick={handleClickButton} >menu</button></div>
                <Header className='' ></Header>
                <div className=''>tema</div>                
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
              <div className='bg-indigo-800'><Controladores ></Controladores></div>
            </div>

              {/**boton para cambiar de tema */}
              <button 
                className={clase_boton}
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
        </div> {/**fin del contenedor general de la aplicacion */}
    </ThemeContext>
   
  );
};

export default App;