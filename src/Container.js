import React, { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import Toggle from './Toggle'

function Container() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className='container'>
      <div className={darkMode ? `dark-mode` : `light-mode`}>
        <Toggle />
        <div className='text'>
          <h1 className={'heading'}>I Want to Write Something So Simply</h1>
          <h3>by Mary Oliver</h3> 
          <p className={'paragraph'}>
            I want to write something<br/>
            so simply<br/>
            about love<br/>
            or about pain<br/>
            that even<br/>
            as you are reading<br/>
            you feel it<br/>
            and as you read<br/>
            you keep feeling it<br/>
            and though it be my story<br/>
            it will be common,<br/>
            though it be singular<br/>
            it will be known to you<br/>
            so that by the end<br/>
            you will think—<br/>
            no, you will realize—<br/>
            that it was all the while<br/>
            yourself arranging the words,<br/>
            that it was all the time<br/>
            words that you yourself,<br/>
            out of your heart<br/>
            had been saying.<br/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Container