import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Row, Col } from "react-bootstrap";
import ExoButton from "../../components/exoButton/exoButton";

import './home.scss';

function Home() {
  const [torrents, setTorrents] = useState([]);
  const [style, setStyle] = useState({ display: 'none' });
  const [pageLoad, setPageLoad] = useState(true);
  const [queryTorrent, /* setQueryTorrent */] = useState("macOs");

  /* const onChangeHandler = e => {
    setQueryTorrent(e.target.value)
  } */

  const callTorrent = (param) => {
    axios.get(`http://127.0.1:3030/search/${param}`)
      .then((res) => {
        setTorrents(res.data);

        setPageLoad(false);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      callTorrent(queryTorrent);
    }, 800);
    return () => clearTimeout(timer);

  }, [queryTorrent]);

  return (
    <Row>
      <Col md={{ span: 10, offset: 2 }}>
        <main className="explorar">

          <section className="explorar__cards">
            {pageLoad ? (
              <h1>Carregando lista...</h1>
            ) : (
              <>
                {torrents && torrents.map((torrent, index) => (
                  <Col md={3} key={index}>
                    <div
                      className="explorar__card"
                      onMouseEnter={() => setStyle({ display: 'block' })}
                      onMouseLeave={() => setStyle({ display: 'none' })}
                    >
                      <img
                        className="explorar__img"
                        alt={torrent.title}
                        src={torrent.data.cover ? `${torrent.data.cover}`
                          : 'https://static.thenounproject.com/png/2999524-200.png'}
                      />

                      <div className="explorar__card-info" style={style}>
                        <h2 className="torrent-title">{torrent.title} </h2>

                        <div className="space" />

                        <Row>
                          <Col md={6}>
                            <p>Peso: <b>{torrent.size}</b> </p>
                          </Col>

                          <Col md={6}>
                            <p>Disco: <b>{torrent.size}</b> </p>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={6}>
                            <p>Peers: <b>{torrent.peers}</b> </p>
                          </Col>

                          <Col md={6}>
                            <p>Seeds: <b>{torrent.seeds}</b> </p>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={12}>
                            <p>Servidor: <b>The Pirate Bay</b> </p>
                          </Col>
                        </Row>

                        <span className="download-button">
                          <ExoButton text="Baixar" action="/download" />
                        </span>
                      </div>
                    </div>
                  </Col>
                ))}
              </>
            )}
          </section>
        </main>
      </Col>
    </Row>
  );

}

export default Home;
