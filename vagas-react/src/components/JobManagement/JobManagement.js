import React from 'react';

import JobCard from './JobCard/JobCard';
import JobForm from '../JobForm/JobForm';
import Collapse from '../navigation/Collapse/Collapse';

import axios from 'axios'

class JobManagement extends React.Component {

  state = {
    jobs: [
      { id: 1, name: 'Desenvolvedor JR', description: 'jahsdkjahskdj', salary: 1200, area: 'dev' },
      { id: 2, name: 'Tester JR', description: 'blablabla', salary: 1200, area: 'test' },
      { id: 3, name: 'Designer JR', description: 'jahsdkjahskdj', salary: 1200, area: 'design' },
      { id: 4, name: 'Tester JR', description: 'blablabla', salary: 1200, area: 'test' }
    ],
    hasError: false
  }

  jobCreateHandler = (paramNewJob) => {
    let newList = this.state.jobs;
    newList.push(paramNewJob);
    this.setState({ jobs: newList });
  }

  jobRemoveHandler = (paramId, paramName) => {
    if (window.confirm(`Deseja realmente remover a vaga "${paramName}"?`)){
      const index = this.state.jobs.findIndex(job => job.id === paramId);

      let newList = this.state.jobs;
      newList.splice(index, 1);
      this.setState({ jobs: newList });

      window.alert('Removido com sucesso!');
    }
  }

  componentWillMount() {
    console.log('COMPONENT WILL MOUNT');
  }

  componentWillUpdate() {
    console.log('COMPONENT WILL UPDATE');
  }

  componentDidUpdate() {
    console.log('COMPONENT DID UPDATE');
  }

  componentDidMount() {
    axios.get('/jobs')
    .then(response =>{
      this.setState({jobs: response})
    })
    .catch(error =>{
      console.error(error)
    })
  }

  render() {

    console.log('RENDER!');

    const renderJobs = this.state.jobs.map(job => {
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