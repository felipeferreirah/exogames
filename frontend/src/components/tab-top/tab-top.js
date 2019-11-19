import React, { Component } from 'react';
import './tab-top.scss'; 
/**
 * Aquivo topo voltar
 * Esse arquivo é chamado pelo router quando não está no /Home/* ou /.
 */
class TabTop extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack(){
    this.props.history.goBack();
}
  render() {
    return (
      <header className="tab-top">
          <div onClick={this.goBack} className="go-back">
       Top
        </div>
      </header>

    );
  }
}

export default TabTop;

