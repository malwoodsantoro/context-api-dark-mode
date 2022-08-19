
import React, { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import sun from './sun.svg';
import moon from './moon.svg';

const Toggle = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  }
  return (
    <button
      className='toggle'
      onClick={handleClick}
    >
      {darkMode ? <img src={sun} alt="sketch of a sun"></img>
        : <img src={moon} alt="sketch of a moon"></img>
      }
    </button>
  );
}

export default Toggle