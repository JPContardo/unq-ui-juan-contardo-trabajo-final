import React from 'react';
import NavBar from './componentes/main/NavBar';
import Home from './componentes/main/Home';
import NotFound from './componentes/main/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Standar  from './componentes/gameModes/Standar'; 
import ThreeToWin from './componentes/gameModes/ThreeToWin';

function App() {
  return (
    <div className='ContenedorPadre'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Home />}/>
            <Route path='/modo'>
              <Route path='estandar' element={<div className='ContendorJuegoEstandar'><Standar addNewRoundWonByThePlayer={() => 0} addNewRoundWonByTheComputer={() => 0}/></div>} />
              <Route path='mejorDeCinco' element={<ThreeToWin />} />
            </Route>
            <Route path='*' element={<NotFound />}/>
          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
