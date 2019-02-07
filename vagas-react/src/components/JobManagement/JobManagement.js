import React from 'react';

import JobCard from './JobCard/JobCard';
import JobForm from '../JobForm/JobForm';
import Collapse from '../navigation/Collapse/Collapse';

import axios from 'axios'

class JobManagement extends React.Component {

  state = {
    jobs: [],
    hasError: false
  }

  jobCreateHandler = (paramNewJob) => {
    let newList = this.state.jobs;
    newList.push(paramNewJob);
    this.setState({jobs: newList});
  }

  jobRemoveHandler = (paramId, paramName) => {
    if (window.confirm(`Deseja realmente remover a vaga "${paramName}"?`)){

      axios.delete(`/jobs/${paramId}`)
        .then(_=>{
          const index = this.state.jobs.findIndex(job => job.id === paramId);

          let newList = this.state.jobs;
          newList.splice(index, 1);
          this.setState({jobs: newList});

          window.alert('Removido com sucesso!');
        })
        .catch(error =>{
          console.error(error)
        })
    }
  }

  componentDidMount() {
    const axiosConfig={
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem('token'))
      }
    }

    axios.get('/jobs', axiosConfig)
    .then(response =>{
      this.setState({jobs: response.data})
    })
    .catch(error =>{
      console.error(error)
    })
  }

  componentWillMount() {
    console.log('COMPONENT WILL MOUNT')
  }

  componentWillUpdate() {
    console.log('COMPONENT WILL UPDATE')
  }

  componentDidUpdate() {
    console.log('COMPONENT DID UPDATE')
  }

  componentWillUnmount(){
    console.log('COMPONENT WILL UNMOUNT')
  }

  render() {

    console.log('RENDER!');

    console.log(this.state.jobs)
    let renderJobs= this.state.jobs.map(job => {
      return <JobCard
        key={job.id}
        name={job.name}
        description={job.description}
        salary={job.salary}
        area={job.area}
        removeHandler={() => this.jobRemoveHandler(job.id, job.name)} />
    });

    return (
      <div>
        <Collapse buttonText="CRIAR VAGA" btnClass='btn-secondary'
          collapseId="newJobForm">
          <JobForm addItemList={ this.jobCreateHandler }/>
        </Collapse>

        <div className="row">
          {renderJobs}
        </div>
      </div>
    )
  }
}
export default JobManagement