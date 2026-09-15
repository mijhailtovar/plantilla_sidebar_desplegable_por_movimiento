import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import './styles.css'
//import './seleccion_multiple/styles.css'
//import './colorsheme.css'
//import './ref/styles.css'
//import './scrollIntoView/styles.css'
import './index.css'

//import App from './App.jsx'
//import App from './4_Editor_perfil';
//import App from './clock/App.jsx'
//import App from './item_list/src/App'
//import App from './seleccion_multiple/App'
//import App from './7_1_list_states'
import App from './App_mokoup'
//import App from './componentes_sincronizados/App'
//import App from './barra_de_busqueda/App'
//import App from './ref/App'
//import App from './scrollIntoView/App'

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
