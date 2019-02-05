import React, {Component} from 'react';
import './App.css';

import Header from './components/navigation/Header/Header'
import Form from './components/navigation/Form/Form'
import Jobs from './components/navigation/Job/JobsList'

class App extends Component {
  render= () =>(
    <div className="App">
      <Header/>
      <Form/>
      <div className="row">
        <Jobs/>
      </div>        
    </div>
  )
}

export default App;