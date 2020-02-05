import React, { Component } from 'react' 
import './tab-bottom.scss' 
/**
 * Aquivo topo voltar
 * Esse arquivo é chamado pelo router quando não está no /Home/* ou /.
 */
class TabBottom extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);

  }

  goBack(){
    this.props.history.goBack();
  }

  render() {
    
    return (
      <div className="tab-bottom">
      tab button
      </div>
    );

  }
}

export default TabBottom;

