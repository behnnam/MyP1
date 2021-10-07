import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import Persion from './components/Persion';

function App() {
  return (
    <div className="App">
   

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Header/>
       <Persion/>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>hello world</h2>
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
