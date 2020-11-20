import React,{Component} from 'react';
import Input from './../../../components/input/input';
import Button from './../../../components/button/button';
import api from './../../../services/auth/api';
import './novo-report.scss';
import { ToastsStore} from 'react-toasts';
import Select from './../../../components/select/select'

class NovoReport extends Component {

  state = {
    file:null,
    period:null,
    year:null,

  };

  handleSignIn = async e => {
    e.preventDefault();
    const {file, year, period} = this.state;
    const dataForm = new FormData();
    dataForm.append('file', file)
    dataForm.append('year',  year)
    dataForm.append('period',  period)

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    if (file.type === 'application/pdf'){
      await api.post('/report/upload', dataForm,config)
      .then( () => this.props.history.push('/admin') )
      .then(() =>  ToastsStore.success("Salvo com sucesso!"))
      .catch((err) =>  ToastsStore.error(err) );
    }else{
        ToastsStore.error('Somente arquivos pdf são aceitos.')
      }
  }

  render(){

    return (
    <div className="novo-report">
       <form onSubmit={this.handleSignIn}  accept="pdf/*">
      <section>

        <Select value={this.state.placejob}   placetop="Período"   className="novo-report__select" onChange={e => this.setState({ period: e.target.value })}  >
            <option value=''>---</option>
            <option value="1">T1</option>
            <option value="2">T2</option>
            <option value="3">T3</option>
            <option value="4">T4</option>
            <option value="5">Anual</option>
        </Select>

        <Input type="text"  maxLength="4"  placetop="Ano do Report" placeholder="2020" className="novo-jobs__input" onChange={e => this.setState({ year: e.target.value })}/>
        <input type="file" name="file"  accept="application/pdf" required onChange={e => this.setState({file: e.target.files[0]})} />
      </section>
      <section>
      <Button type="submit">Upload</Button>
      </section>
      </form>
    </div>
  )};
}
export default NovoReport;
