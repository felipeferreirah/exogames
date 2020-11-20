import React, {Component} from 'react';
import './home-admin.scss';
import Button from './../../../components/button/button'
import api from './../../../services/auth/api';
import { ToastsStore} from 'react-toasts';

class HomeAdmin extends Component {
  state = {
    jobs: [],
    report: [],
    erro: false
  };

  componentDidMount() {
    api.get('/report')
      .then((res) => {
        const report = res.data;
        this.setState({
          report
        });
      }).catch((err) => console.error(err));

    api.get('/job/admin')
      .then((res) => {
        const jobs = res.data;
        this.setState({
          jobs
        });
      })
      .catch((err) => console.error(err));
  }

  delJobs = async (e, id) => {
    e.persist()
    if (window.confirm("Você realmente quer deletar?")) {
      const ID = id;
      const updateJob = this.state.jobs.filter(item => item.id !== ID);
      this.setState({
        jobs: updateJob
      })

      await api.delete(`/job/${id}`)
        .then(() => this.props.history.push('/admin'))
        .then(() => ToastsStore.success("Vaga deletado com sucesso!"))
        .catch((err) => ToastsStore.error(err));
    }
  }

  delReport = async (e, id) => {
    e.persist()
    if (window.confirm("Você realmente quer deletar?")) {
      const ID = id;
      const updateReport = this.state.report.filter(item => item.id !== ID);
      this.setState({
        report: updateReport
      })

      await api.delete(`/report/${id}`)
        .then(() => this.props.history.push('/admin'))
        .then(() => ToastsStore.success(`Report deletado com sucesso!`))
        .catch((err) => ToastsStore.error(err));
      e.preventDefault();

    }


  }

  render() {

    return (
     <main className="home-admin">
        <section className="half-content">
          <div className="half-content__left">
             <div className="home-admin__menu">
                <p className="home-admin__title"> Controle de vagas abertas </p>
                <Button to="/admin/jobs/novo">Cadastrar nova</Button>
             </div>
             <ul className="home-admin__list">
            {  !this.state.jobs && <div className="home-admin__list-empty">
                      Não há nada cadastrado aqui.
                    </div>
                    }
              { ( this.state.jobs.map(job =>
              <li key={job.id} className={job.status ? `home-admin__list--ativo` : `home-admin__list--desativo`}>

                  <p className="home-admin__list-description">{job.job}</p>
                  <div className="home-admin__list-options">
                   <Button className="link" to={ `/admin/jobs/editar/${job.id}`}>Editar</Button>
                   <Button className="link" to='/admin/' onClick={(e) => {this.delJobs(e,job.id) } }>Excluir</Button>
                  </div>
                </li>
                )
              )}
             </ul>
          </div>
          <div className="half-content__right">
            <div className="home-admin__menu">
              <p className="home-admin__title"> Reports para acionistas </p>
              <Button  to="/admin/reports/novo">Cadastrar nova</Button>
            </div>
            <ul className="home-admin__list">
              {this.state.report === null  &&
                <div className="home-admin__list-empty">
                  Não há nada cadastrado aqui.
                </div>
                }
              { ( this.state.report &&
                  this.state.report.map(report =>
              <li key={report.id}>
                  <p className="home-admin__list-description">{`Report ${report.period} - ${report.year}`}</p>
                  <div className="home-admin__list-options">

                  <Button className="link" to='/admin/' onClick={(e) => {this.delReport(e,report.id) } }>Excluir</Button>
                  </div>
                </li>
                )
              )}
             </ul>
          </div>
       </section>
    </main>

    )
  }
}
export default HomeAdmin;
