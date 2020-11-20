import React,{Component} from 'react';
import api from './../../../services/auth/api'
import './novo-jobs.scss';
import Textarea from './../../../components/textarea/textarea'
import Input from './../../../components/input/input'
import Select from './../../../components/select/select'
import Button from './../../../components/button/button'
import { ToastsStore} from 'react-toasts';

class NovoJobs extends Component {
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
    status:'',
    id:''
  };

  componentDidMount() {
    const id = this.props.match.params.idJob;
    if (this.props.match.params.idJob){
      api.get(`job/admin/${id}`)
      .then(res => {

        this.local = [
          { value: res.data.placejob, name: res.data.placejob },
          { value: 'Bauru - SP', name: 'Bauru - SP' },
          { value: 'Florianópolis - SC', name: 'Florianópolis - SC' },
          { value:'Remoto', name: 'Remoto'}
      ];

          this.setState({
            error: '',
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
            limitdate:      res.data.limitdate,
            status:         res.data.status
           });
    } );
  }
}
  bool(v) {
  return v==="false" || v==="null" || v==="NaN" || v==="undefined" || v==="0" || v===false ? false : !!v;
}


  handleSignIn = async e => {
    e.preventDefault();
    if (!this.props.match.params.idJob){
      const status = this.bool(this.state.status);
      const {job, aboutblocko, aboutjob, requirements, differentials, benefits, placejob, contracttype, formlink, limitdate } = this.state;
      await api.post('/job', {job, aboutblocko, aboutjob, requirements, differentials, benefits, placejob, contracttype, formlink, limitdate, status })
      .then(() =>  this.props.history.push('/admin'))
      .then(() =>  ToastsStore.success("Vaga cadastrada com sucesso!"))
      .catch((err) => ToastsStore.error(err));
    }else{
      const status = this.bool(this.state.status);
      const {id, job, aboutblocko, aboutjob, requirements, differentials, benefits, placejob, contracttype, formlink, limitdate} = this.state;

      await api.put('/job', {id : parseInt(id), job, aboutblocko, aboutjob, requirements, differentials, benefits, placejob, contracttype, formlink, limitdate,status})
      .then(() =>  this.props.history.push('/admin'))
      .then(() =>  ToastsStore.success("Vaga alterada com sucesso!"))
      .catch((err) => ToastsStore.error(err) )
    }
  }

 render(){
  return (
   <div className="novo-jobs">
     <section>
       <form onSubmit={this.handleSignIn}>
         <Input defaultValue={this.state.job} type="text" placeholder="Ex: Suporte Técnico Júnior" placetop="Nome da Vaga"  className="novo-jobs__input" onChange={e => this.setState({ job: e.target.value })}/>

         <Select value={this.state.status}  placetop="Ativo"   className="novo-jobs__input"  onChange={e => this.setState({ status: e.target.value })}  >
            <option value=''>---</option>
            <option value={true}>Ativo</option>
            <option value={false}>Desativado</option>
        </Select>

         <Select value={this.state.placejob}  placetop="Local"   className="novo-jobs__input" onChange={e => this.setState({ placejob: e.target.value })}  >
            <option value=''>---</option>
            <option value="Bauru - SP">Bauru - SP</option>
            <option value="Florianópolis - SC">Florianópolis - SC</option>
            <option value="Remoto">Remoto</option>
        </Select>

        <Select value={this.state.contracttype} placetop="Tipo de contratação"   className="novo-jobs__input" onChange={e => this.setState({ contracttype: e.target.value })}  >
            <option value=''>---</option>
            <option value="CLT">CLT</option>
            <option value="Pessoa Júridica">Pessoa Júridica</option>
            <option value="A Combinar">A combinar</option>
        </Select>

         <Input defaultValue={this.state.formlink} type="text" placetop="Link Pipefy"  className="novo-jobs__input"  onChange={e => this.setState({ formlink: e.target.value })}  />
         <Input defaultValue={this.state.limitdate}  required pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}-" type="date" placetop="Data"  className="novo-jobs__input" onChange={e => this.setState({ limitdate: e.target.value })}/>

        <Textarea defaultValue={this.state.aboutblocko} placetop="Sobre a Blocko" className="novo-jobs__textarea"   onChange={e => this.setState({ aboutblocko: e.target.value })}  ></Textarea>
        <Textarea defaultValue={this.state.aboutjob} placetop="Sobre a Vaga" className="novo-jobs__textarea"        onChange={e => this.setState({ aboutjob: e.target.value })}    ></Textarea>
        <Textarea defaultValue={this.state.differentials} placetop="Diferenciais" className="novo-jobs__textarea"   onChange={e => this.setState({ differentials: e.target.value })}  ></Textarea>
        <Textarea defaultValue={this.state.requirements} placetop="Requisitos" className="novo-jobs__textarea"      onChange={e => this.setState({ requirements: e.target.value })}  ></Textarea>
        <Textarea defaultValue={this.state.benefits} placetop="Beneficios" className="novo-jobs__textarea"          onChange={e => this.setState({ benefits: e.target.value })}  ></Textarea>
        <Button type="submit">{this.state.id && 'Alterar' }{!this.state.id && 'Cadastrar' }</Button>
       </form>
     </section>
   </div>
  )};
}
 export default NovoJobs;
