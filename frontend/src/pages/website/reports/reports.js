import React, {Component} from 'react';
import './reports.scss';
import api from './../../../services/api';
import {Table} from 'react-bootstrap';
import env from './../../../env';

class Reports extends Component {
  state = {
    reports: ''
  }

  componentDidMount() {
    api
      .get('/report')
      .then((res) => {
        const reports = res.data;
        this.setState({reports});
      });
  }

  render() {
    var ys = null;
    return (
      <>
        <main className="reports use-bootstrap">
          <section>
            <h5>Resultados trimestrais</h5>
            <Table responsive >
              <thead className='reports__table'>
                <tr>
                  <th>Ano</th>
                  <th>Periodo</th>
                </tr>
              </thead>
              <tbody>
                {(this.state.reports
                  ? this.state.reports.map((report) =>
                   <>
                    {ys !== report.year && <tr key={report.id}  className={report.period === 'Anual'   ? 'reports__table-anual'  : null}>
                        <td>{ys = report.year}</td>
                        <td>
                          {this.state.reports.map(rep => rep.year === ys  ? <a href={`${env.API.URL}/report/${rep.upload}`}>{rep.period}  </a> : null)}
                        </td>
                      </tr>
                    }</>
                  ) : null
                )}
              </tbody>
            </Table>
          </section>
        </main>
      </>
    )
  };
}

export default Reports;
