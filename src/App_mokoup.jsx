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
        {/**contenedor de la applicacion */}
        <div className="app h-screen text-white bg-slate-900">
          
            {/**flex flex-col indica que el header siempre estara arriba */}
            <div className='flex flex-col'>
              {/**LOGO DEL CHAT, BOTON DE CAMBIAR TEMA, TEXTO DE CHATBOT, BANNER */}
              <div className='flex flex-row justify-between w-full h-32 font-mono text-center text-2xl md:text-3xl'>
                {/**boton para activar y desactivar el sidebar */}
                <div className={` bg-amber-400 `}><button className='w-10 h-4 bg-amber-800' onClick={handleClickButton} >menu</button></div>
                <Header className='' ></Header>
                <div className=''>tema</div>                
              </div>
              

              <div className={`flex w-full flex-row justify-center transition-all  relative top-0 right-0 + ${active ? 'bg-sky-400  w-full md:right-56' : 'bg-amber-900  w-[calc(100%-256px) -translate-x-32 md:translate-0'}`}>
                {/** sidebar DESPLEGABLE, A LA IZQUIERDA DEL ASIDE*/}
                <div 
                  className={ ' w-2/5 basis-0 md:basis-1/4' +
                  ` transition-all duration-300 ` }
                  >
                  <Sidebar handleClick={handleClickButton}></Sidebar>
                </div>
          
                    
                    
                    {/**contenido principal, el area de los mensajes */}
                    <div className='w-3/5 md:basis-3/4 flex-initial grow bg-red-600'><Chat></Chat></div>

        
                
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