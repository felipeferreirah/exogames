import React, { Component } from 'react';
import './button.scss'; 
/**
 * Aquivo topo voltar
 * Esse arquivo é chamado pelo router quando não está no /Home/* ou /.
 */
class Back extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack(){
    this.props.history.goBack();
}
  render() {
    return (
      <header className="main_header ">
          <div onClick={this.goBack} className="go-back">
         voltar
        </div>
      </header>

    );
  }
}

export default Back;