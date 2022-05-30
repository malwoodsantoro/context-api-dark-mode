
import React, {useContext} from 'react';
import {DarkModeContext} from './context/DarkModeContext';
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';

const Toggle = () => {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
      <button 
      className='toggle'
      onClick={handleClick}
    >
      <Sun className={`icon ${!darkMode ? 'active' : ''}`}/>
      <Moon className={`icon ${darkMode ? 'active' : ''}`}/>
    </button>
    );
}

export default Toggle