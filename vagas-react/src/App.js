import React, { Component } from 'react';
import './App.css';

import Cabecalho from './components/navigation/Header/Header';
import JobManagement from './components/JobManagement/JobManagement';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho/>
        <div className="container pt-3">
          <JobManagement/>
        </div>
      </div>
    );
  }
}

export default App;