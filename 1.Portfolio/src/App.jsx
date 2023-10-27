import React, { useState } from 'react'
import Navbar, { HeaderPhone } from './Components/Navbar/Navbar'
import HomePage from './Components/Home/HomePage/HomePage';

function App() {
  const [menuOpen, setMenuOpen] = useState(false) ;

  return (
    <div className="App">
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HomePage />
    </div>
  ) ;
}

export default App 
