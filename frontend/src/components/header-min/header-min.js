import React,{Component} from 'react';
import './header-min.scss';
import Logo from './../../assets/svg/logo/logo';
import {Link} from 'react-router-dom' ;

export default class HeaderMin extends Component {

    render() {
  return (
      <>
          <header className="header-min" >
            <div  className="header-min__center" >
              <Link to='/admin/'>
                <Logo className="header-min__svg" />
              </Link>
              <Link to="/" className="header-min__logout" onClick={this.handleSignOut}>Sair</Link>
              <input type="text" className="search-input" placeholder="Procurar torrent"/>
            </div>
          </header>
      </>
    );
  }
}
