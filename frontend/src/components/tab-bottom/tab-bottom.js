import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './tab-bottom.scss'
import IconChat from '../../assets/svg/icon-chat';
import IconHome from '../../assets/svg/icon-home';
import IconNotification from '../../assets/svg/icon-notification'
import IconSearch from '../../assets/svg/icon-search'
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
        <Link to="/home" className="tab-bottom__item" ><IconHome></IconHome></Link>
        <Link to="/search" className="tab-bottom__item"><IconSearch></IconSearch></Link>
        <Link to="/messenger" className="tab-bottom__item"><IconChat></IconChat> </Link>
        <Link to="/notification" className="tab-bottom__item"><IconNotification ></IconNotification></Link>
      </div>
    );

  }
}

export default TabBottom;

