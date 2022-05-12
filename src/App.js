import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Home from './pages/Home/components/Home';
import MonthStatistic from './pages/MonthStatistic/components/MonthStatistic';
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';

function App() {
  return (
    <div className="global-container">
    <Popup/>
    <div className="container"> 
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<Home/>}/>
          <Route exact path="/MonthStatistic"  element={<MonthStatistic/>}/>
        </Routes>
     </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
