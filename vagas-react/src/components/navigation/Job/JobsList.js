import React from 'react'
import developer from '../../../assets/developer.png'
import designer from '../../../assets/designer.png'
import tester from '../../../assets/tester.png'

const width= {width: '350px'};

var job1= {
    image: "developer",
    title: "Desenvolvedor Front-end JR",
    description: "Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack.",
    sallary: 10
}

var job2= {
    image: "designer",
    title: "Designer UI/UX PL",
    description: "Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack.",
    sallary: 100
}

var job3= {
    image: "tester",
    title: "Tester - Estágio",
    description: "Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack.",
    sallary: 2
}

var job= [job1, job2, job3]

const Jobs= () =>(
    job.forEach(){
      <div class="col-sm-12 col-md-6 col-lg-4 mb-3">
        <div class="card">
          <img class="card-img-top" src={job.image} style={width} alt={job.image}/>
            <div class="card-body">
              <h5 class="card-title">{job.title}</h5>
              <div>
                <b>Descrição:</b>
                <p>{job.description}</p>
  
                <b>Salário base:</b>
                <p>R$ {job.sallary},00</p>
  
              </div>
              <a href="#" class="btn btn-warning">
                <i class="far fa-edit"></i>
              </a>
            <a href="#" class="btn btn-danger">
              <i class="far fa-trash-alt"></i>
            </a>
          </div>
        </div>
      </div>
    }
)

const jobsList = () =>(
    <div class="row ">
      <div class="col-sm-12 col-md-6 col-lg-4 mb-3">
        <div class="card">
          <img class="card-img-top" src={developer} style={width} alt="Developer"/>
          <div class="card-body">
            <h5 class="card-title">Desenvolvedor Front-end JR</h5>
            <div>
               <b>Descrição:</b>
              <p>Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência
                em desenvolvimento full stack.</p>

              <b>Salário base:</b>
              <p>R$ 10,00</p>

            </div>
            <a href="#" class="btn btn-warning">
              <i class="far fa-edit"></i>
            </a>
            <a href="#" class="btn btn-danger">
              <i class="far fa-trash-alt"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-4 mb-3">
        <div class="card">
          <img class="card-img-top" src={designer} style={width} alt="Designer"/>
          <div class="card-body">
            <h5 class="card-title">Designer UI/UX PL</h5>
            <div>

              <b>Descrição:</b>
              <p>Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência
                em desenvolvimento full stack.</p>

              <b>Salário base:</b>
              <p>R$ 100,00</p>

            </div>
            <a href="#" class="btn btn-warning">
              <i class="far fa-edit"></i>
            </a>
            <a href="#" class="btn btn-danger">
              <i class="far fa-trash-alt"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-4 mb-3">
        <div class="card">
          <img class="card-img-top" src={tester} style={width} alt="Tester"/>
          <div class="card-body">
            <h5 class="card-title">Tester - Estágio</h5>
            <div>

              <b>Descrição:</b>
              <p>Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência
                em desenvolvimento full stack.</p>

              <b>Salário base:</b>
              <p>R$ 2,00</p>

            </div>
            <a href="#" class="btn btn-warning">
              <i class="far fa-edit"></i>
            </a>
            <a href="#" class="btn btn-danger">
              <i class="far fa-trash-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
)

export default Jobs//jobsList