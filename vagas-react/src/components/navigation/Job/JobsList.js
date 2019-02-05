import React from 'react'
import developer from '../../../assets/developer.png'
import designer from '../../../assets/designer.png'
import tester from '../../../assets/tester.png'

const width= {width: '350px'};


class JobsList extends React.Component{
	state={
		jobs: [
			{id: 1, image: "developer", title: "Desenvolvedor Front-end JR", description: "Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack.", salary: 10, area: "Desenvolvimento"},
			{id: 2, image: "designer", title: "Designer UI/UX PL", description: "Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack.", salary: 100, area: "Design"},
			{id: 3, image: "tester", title: "Tester - Estágio", description: "Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack.", salary: 2, area: "Teste"}
		],
		hasError: false
	}

	jobEditHandler= (name) =>{
		if(window.confirm('Deseja editar a vaga "${name}"?')){
			window.alert('Editada com sucesso!')
		}
	}

	jobRemoveHandler= (paramId, paramName) =>{
		if(window.confirm('Deseja realmente remover a vaga "${name}"?')){
			const index= this.state.jobs.findIndex(job => job.id === paramId)

			let newList= this.state.jobs
			newList.splice(index, 1)
			this.setState({jobs: newList})

			window.alert('Removido com sucesso!')
		}
	}

	render(){
		const renderJobs= this.state.jobs.map(job =>{
			return <JobCard
				id={job.id}
				name={job.name}
				description={job.description}
				salary={job.salary}
				area={job.area}
				editHandler={() => this.jobEditHandler(job.name)}
				removeHandler={() => this.jobRemoveHandler(job.name)}/>
		})
	}
}


const Jobs= () =>(
	jobs.forEach(job => {
		<div className="col-sm-12 col-md-6 col-lg-4 mb-3">
    	<div className="card">
      	<img className="card-img-top" src={job.image} style={width} alt={job.title}/>
      	<div className="card-body">
        	<h5 className="card-title">{job.title}</h5>
        	<div>
          	<b>Descrição:</b>
          	<p>{job.description}</p>
          	<b>Salário base:</b>
          	<p>R$ {job.salary},00</p>  
        	</div>
        	<button onClick={props.jobEditHandler}className="btn btn-warning"><i class="far fa-edit"></i></button>
        	<button onClick={props.jobRemoveHandler} className="btn btn-danger"><i class="far fa-trash-alt"></i></button>
      	</div>
    	</div>
  	</div>
	})
)


/*var job1= {
    image: "developer",
    title: "Desenvolvedor Front-end JR",
    description: "Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack.",
    salary: 10
}

var job2= {
    image: "designer",
    title: "Designer UI/UX PL",
    description: "Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack.",
    salary: 100
}

var job3= {
    image: "tester",
    title: "Tester - Estágio",
    description: "Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack.",
    salary: 2
}

var jobs= [job1, job2, job3]

const Jobs= () =>(
    jobs.forEach(job) =>{
      <div class="col-sm-12 col-md-6 col-lg-4 mb-3">
        <div class="card">
          <img class="card-img-top" src={job.image} style={width} alt={job.image}/>
            <div class="card-body">
              <h5 class="card-title">{job.title}</h5>
              <div>
                <b>Descrição:</b>
                <p>{job.description}</p>
  
                <b>Salário base:</b>
                <p>R$ {job.salary},00</p>
  
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
)*/

/*const Jobs = () =>(
  <div class="row ">
    <div class="col-sm-12 col-md-6 col-lg-4 mb-3">
      <div class="card">
        <img class="card-img-top" src={developer} style={width} alt="Developer"/>
        <div class="card-body">
          <h5 class="card-title">Desenvolvedor Front-end JR</h5>
          <div>
             <b>Descrição:</b>
            <p>Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack.</p>

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
            <p>Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack.</p>

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
            <p>Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack.</p>

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
)*/

export default Jobs