import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./login.scss";
import Logo from "../../../assets/svg/logo/logo";
import api from "../../../services/auth/api";
import { login } from "../../../services/auth/auth";
import Input from "./../../../components/input/input";
import {Link} from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/auth/login", { login:username, password });

        login(response.data.token.accessToken);
        this.props.history.push("/admin");
      } catch (err) {
        if(err.response.status !== 404){
          this.setState({
            error:
              `${err}`
          });
        }else{
          this.setState({
            error:
              `Usuário não encontrado`
          });
        }

      }
    }
  };

  render() {
    return (
      <div className="login">
          <Link to="/">
            Fechar
          </Link>

      </div>
    );
  }
}

export default withRouter(Login);
