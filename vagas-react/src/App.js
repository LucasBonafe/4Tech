import React, {Component} from 'react';
import './App.css';

import Header from './components/navigation/Header/Header'
import Jobs from './components/navigation/Job/JobsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div class="row"><Jobs/></div>
      </div>
    );
  }
}

export default App;