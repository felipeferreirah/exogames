import React,{Component} from 'react';
import './job-detail.scss';
import Dash from './../../../components/dash/dash';
import api from './../../../services/api';
import Header from './../../../components/header/header';
class JobDetail extends Component {

  state = {
    job:'',
    aboutblocko:'',
    aboutjob:'',
    requirements:'',
    differentials:'',
    benefits:'',
    placejob:'',
    contracttype:'',
    formlink:'',
    limitdate:'',
    id:''
  };

componentDidMount(){
  const id = this.props.match.params.idJob;

  api.get(`/job/${id}`)
    .then(res => {
        this.setState({
          id:             this.props.match.params.idJob,
          job:            res.data.job,
          aboutblocko:    res.data.aboutblocko,
          aboutjob:       res.data.aboutjob,
          requirements:   res.data.requirements,
          differentials:  res.data.differentials,
          benefits:       res.data.benefits,
          placejob:       res.data.placejob,
          contracttype:   res.data.contracttype,
          formlink:       res.data.formlink,
          limitdate:      res.data.limitdate
        });
  } );
}
  render(){
  return (
    <>
    <Header h1={this.state.job} p={this.state.placejob}/>
     <main className="job-detail">
       { this.state.aboutblocko && <section id="our-team">
          <h5>Sobre a Blocko</h5>
          <p> {this.state.aboutblocko}</p>
        </section>
      }
      <Dash />
      { this.state.aboutjob && <section >
          <h5>Sobre a vaga</h5>
          <p>{this.state.aboutjob}</p>
        </section> }
      <Dash />
      { this.state.requirements &&
      <section >
          <h5>Requisitos</h5>
          <p> {this.state.requirements}</p>
        </section> }
        <Dash />
        { this.state.differentials &&
      <section >
          <h5>Diferenciais</h5>
          <p> {this.state.differentials}</p>
        </section> }
        <Dash />
        { this.state.benefits &&
        <section >
          <h5>Beneficios</h5>
          <p> {this.state.benefits}</p>
        </section> }
        <Dash />
        <section >
          <h5 className="job-detail__center">Canditate-se para essa vaga</h5>
          <iframe title="iframe" className="job-detail__iframe" src={this.state.formlink} frameBorder="0"/>
        </section>
		</main>
    </>
  )};
}

export default JobDetail;
