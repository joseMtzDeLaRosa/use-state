import logo from './logo.svg';
import './App.css';

import { MiprimerEstado } from './components/MiprimerEstado';
import {EjercicioComponent}  from './components/EjercicioComponent'

function App() {

  const fecha = new Date();
  const yearActual = fecha.getFullYear(); //PARA sacar el año actual
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <h1> El estado en React - Hook useState</h1>

        <MiprimerEstado/>

        <EjercicioComponent year={yearActual}/>
      </header>
    </div>
  );
}

export default App;
