import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeModule from './Components/welcomeMod/welcome';


function App() {
  return (
    <div className="App">
      <WelcomeModule></WelcomeModule>
      <header className="App-header">
        
        
        <p>
          Edit  and save to reload.
        </p>



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
