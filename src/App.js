import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './componentes/paginas/Home';
import Erro from './componentes/paginas/Erro';
import NavBar from './componentes/navbar/navbar';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Erro/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;