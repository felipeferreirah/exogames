import React, { useState, useEffect } from "react";
import { Row, Col, Dropdown } from "react-bootstrap";

import { useHistory, useParams } from "react-router-dom";
import ExoButton from "../exoButton/exoButton";

import "./header.scss";

const Header = () => {

  let history = useHistory();
  let { urlString } = useParams();
  let urlModule = history.location.pathname;
  let [searchString, setSearchString] = useState(urlString || "");
  let hasNotSpaces = searchString.replace(/\s/g, '').length;
  let [module, setModule] = useState("Games");

  useEffect(() => {
    if (urlModule === "/music"){
      setModule("Músicas")
    }else if (urlModule === "/movies"){
      setModule("Filmes")
    }else if (urlModule === "/adult"){
      setModule("Adulto");
    }else{
      setModule("Games");
    }
  }, [urlModule]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (hasNotSpaces){
      history.push(`/search/${searchString}`);
    }else{
      history.push(`/`);
    }
  }

  const goBack = () => {
    history.goBack();
  }

  const goForward = () => {
    history.goForward();
  }

  const refresh = () => {
    window.location.reload();
  }

  return (
    <div className="main-header">
      <Row>
        <Col sm xs={12} md={2} className="col-logo">
          <div className="main-logo">
            <span className="logo exo-gradient">▲<b>xo</b></span>

            <Dropdown className="main-dropdown">
              <Dropdown.Toggle
                className="exo-gradient"
                variant="success"
                id="dropdown-basic"
              >
                {module}
              </Dropdown.Toggle>

              <Dropdown.Menu className="exo-drop-menu">
                <Dropdown.Item className="exo-drop-item" href="/music">Músicas</Dropdown.Item>
                <Dropdown.Item className="exo-drop-item" href="/movies">Filmes</Dropdown.Item>
                <Dropdown.Item className="exo-drop-item" href="/adult">Adulto</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>

        <Col sm xs={12} md={{ span: 1 }} className="col-browser-actions">
          <div className="browser-actions">
            <span className="exo-control" onClick={goBack}> {"<<"} </span>
            <span className="exo-control" onClick={goForward}> {">>"} </span>
            <span className="exo-control" onClick={refresh}> O </span>
          </div>
        </Col>

        <Col sm xs={12} md={{ span: 7 }} className="col-search">
          <div className="main-search">
            <form method="get" onSubmit={handleSearch}>
              <div className="input-group mb-3" style={{overflow: 'hidden'}}>
                <input 
                  type="text"
                  value={searchString}
                  minLength={3}
                  className="form-control input-main-search" 
                  placeholder="Games, Filmes ou Músicas..." 
                  aria-label="Games, Filmes ou Músicas..." 
                  aria-describedby="main-search"
                  onChange={(e) => setSearchString(e.target.value)}
                />
                  
                <div className="button-main-search">
                  <ExoButton noText action={hasNotSpaces ? `/search/${searchString}` : "/"} />
                </div>
              </div>
            </form>
          </div>
        </Col>

        <Col sm xs={12} md={{ span: 1, offset: 1 }} className="col-browser-actions">
          <div className="browser-actions window-control">
            <span className="exo-control"> ▁ </span>
            <span className="exo-control"> ■ </span>
            <span className="exo-control"> <b>X</b> </span>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Header;