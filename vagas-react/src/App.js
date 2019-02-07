import React, { Component } from 'react'
import './App.css'

import Cabecalho from './components/navigation/Header/Header'
import JobManagement from './components/JobManagement/JobManagement'
import Sobre from './components/About/About'
import notFound from './components/navigation/NotFound/NotFound'

import {Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho/>
        <div className="container pt-3">
          <Switch>
            <Route exact path='/' component={JobManagement}/>
            <Route path='/dashboard' component={JobManagement}/>
            <Route path='/vagas' component={JobManagement}/>
            <Route path='/sobre' component={Sobre}/>
            <Route path='*' component={notFound}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;