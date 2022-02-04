import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Row, Col } from "react-bootstrap";
import ExoButton from "../../components/exoButton/exoButton";

import './home.scss';

function Home() {
  const [torrents, setTorrents] = useState([]);
  const [queryTorrent, /* setQueryTorrent */] = useState("macOs");

  /* const onChangeHandler = e => {
    setQueryTorrent(e.target.value)
  } */

  const callTorrent = (param) => {
    axios.get(`http://127.0.1:3030/search/${param}`)
      .then((res) => {
        setTorrents(res.data)
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      callTorrent(queryTorrent);
    }, 800);
    return () => clearTimeout(timer);

  }, [queryTorrent]);

  return (
    <Container fluid>
      <Row>
        <Col md={{span: 10, offset: 2}}>
          <main className="explorar">
            <section className="explorar__cards">
              {torrents && torrents.map((torrent, index) => (

                <div key={index} className="explorar__card">
                  
                  <img 
                    className="explorar__img" 
                    alt={torrent.title} 
                    src={torrent.data.cover ? `${torrent.data.cover}`
                    : 'https://static.thenounproject.com/png/2999524-200.png'} 
                  />

                  <div className="explorar__card-info">
                    <h3>{torrent.title} </h3>
                    
                    <Row>
                      <Col md={6}>
                        <p>Peers: {torrent.peers} </p>
                      </Col>

                      <Col md={6}>
                        <p>Seeds: {torrent.seeds} </p>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <p>Tamanho: {torrent.size} </p>
                      </Col>

                      <Col md={6}>
                        <p>Seeds: {torrent.seeds} </p>
                      </Col>
                    </Row>

                    <ExoButton text="Baixar o" action="/download" />
                  </div>

                </div>
              ))}
            </section>
          </main>
        </Col>
      </Row>
    </Container>
  );

}

export default Home;
