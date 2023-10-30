import React from 'react'
import Icon from '../../Assets/Icon/Icon.png' ;
import {FiMenu} from 'react-icons/fi';

const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
   <>
   <nav className='nav-wrapper'>
    <NavContent setMenuOpen={setMenuOpen} />

    <button className='menuBTN' onClick={()=> setMenuOpen(!menuOpen)} >
      <FiMenu />
    </button>
   </nav>
   </>
  )
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navphone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
}

const NavContent = ({ setMenuOpen }) => (
    <>
      <div className="icon-wrapper">
        <img src={Icon} alt="Icon" />
      </div>

      <div className="options-wrapper">
            <a onClick={() => setMenuOpen(false)} href="#app">HOME</a>
            <a onClick={() => setMenuOpen(false)} href="#project">PROJECTS</a>
            <a onClick={() => setMenuOpen(false)} href="#about">ABOUT</a>
            <a onClick={() => setMenuOpen(false)} href="#contact">CONTACT</a>
      </div>
    </>
);

export default Navbar
