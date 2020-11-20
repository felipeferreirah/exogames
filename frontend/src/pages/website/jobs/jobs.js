import React,{Component} from 'react';
import './jobs.scss';
import { Link } from 'react-router-dom'
import Dash from './../../../components/dash/dash'
import api from './../../../services/api';

class Jobs extends Component {
state = {
  job:''
}
componentDidMount(){
  api.get('/job')
  .then((res) => {
    const jobs = res.data;
    this.setState({ jobs });
  });
}

  render(){
  return (
    <>
      <main className="jobs">
        <section id="our-team">
          <h5>Faça parte do nosso time</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sem sapien, pellentesque non nulla vel, euismod pharetra turpis. Integer ut orci eget diam ultrices efficitur sit amet at neque. Aenean accumsan eu turpis ultricies auctor. In vitae ante non nibh ultricies ornare sed aliquet purus. </p>
          <br />
          <p>Etiam semper, mi non semper varius, arcu leo gravida sem, et pretium risus arcu pulvinar augue. Mauris in nunc sodales, cursus odio et, efficitur odio. Integer a elit interdum, euismod magna et, egestas libero. Mauris sollicitudin lorem non nisl hendrerit, eu ultrices nisi euismod.  </p>
          <br />
          <p>Duis diam nunc, dignissim sit amet semper eget, ultricies ac erat. Pellentesque quis lorem nulla. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam felis urna, elementum non arcu vel, rutrum accumsan magna.</p>
        </section>
      <Dash />
        <section id="jobs-opened">
          <h5>Vagas abertas na Blocko </h5>
          <ul className="home__lista-vaga">


              { ( this.state.jobs && this.state.jobs.map(job =>
              <li className="home__item-vaga"  key={job.id}>
                <Link to={`/jobs/detail/${job.id}`} >{job.job}</Link>
                <span> {job.placejob}</span>
              </li>
                )
              )}


          </ul>
          </section>
		</main>
    </>
  )};
}

export default Jobs;
