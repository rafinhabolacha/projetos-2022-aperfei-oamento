import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home';
import Contato from '../src/pages/Contatos';
import Editar from '../src/pages/Editar'; 
import Visualizar from './pages/Visualizar';
function App (){

    return(
      <BrowserRouter>
        <Routes>
           <Route  path="/contatos" element={<Contato />}/>
           <Route  path="/editar/:id" element={<Editar />}/>
           <Route  path="/visualizar/:id" element={<Visualizar />}/>
           <Route index element={<Home />} />
        </Routes>
          
          
     </BrowserRouter>
    )
  }



export default App;
