import React from 'react';
import NavBar from './components/main/NavBar';
import NotFound from './components/main/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Standar  from './components/gameModes/Standar'; 
import ThreeToWin from './components/gameModes/ThreeToWin';

function App() {
  return (
    <div className='ContenedorPadre'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<div className='ContendorJuegoEstandar'><Standar buttonStatus={''} addNewRoundWonByThePlayer={() => 0} addNewRoundWonByTheComputer={() => 0}/></div>} />
            <Route path='modo/tresParaGanar' element={<ThreeToWin />} />
            <Route path='*' element={<NotFound />}/>
          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
