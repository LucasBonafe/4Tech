import React from 'react'
import logo from '../../../assets/logo-vagas.png'
import {Link} from 'react-router-dom'


const header= () =>(
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="#">
      <img src={logo} width="88" height="40" className="d-inline-block align-top" alt="Logo" to="/dashboard"/>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-item nav-link active" to="/vagas">Vagas<span className="sr-only">(current)</span></Link>
        <Link className="nav-item nav-link" to="/sobre">Sobre</Link>
      </div>
    </div>
  </nav>
)

export default header