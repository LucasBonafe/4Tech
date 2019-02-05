import React, {Component} from 'react';
import './App.css';

import Header from './components/navigation/Header/Header'
import Form from './components/navigation/Form/Form'
import Jobs from './components/navigation/Job/JobsList'
import Collapse from './components/navigation/Collapse/Collapse'

class App extends Component {
  render= () =>(
    <div className="App">
      <Header/>
      <Form/>
      <div className="container pt-3">
        <Collapse buttonText="Criar vaga" btnClass="btn-secundary" collapseId="newJobForm">
        <Jobs/>
        </Collapse>
      </div>
    </div>
  )
}

export default App;