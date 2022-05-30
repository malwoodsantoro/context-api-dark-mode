import './App.css';
import { useContext } from 'react';
import Container from './Container'
import { DarkModeProvider, DarkModeContext } from './context/DarkModeContext'

function App() {

  return (
    <DarkModeProvider>
      <Container />
    </DarkModeProvider>
  );
}

export default App;
