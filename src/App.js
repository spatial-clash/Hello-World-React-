import earth from './earth.png';
import './App.css';
import React from 'react';

class App extends React.Component {
 
render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={earth} className="App-logo" alt="Hello" />
        <p>
         Hello, World!
        </p>
        </header>
    </div>
  ); 
}
}
export default App;
