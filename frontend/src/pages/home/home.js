import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Row, Col } from "react-bootstrap";
import ExoButton from "../../components/exoButton/exoButton";

import './home.scss';

function Home() {
  const [torrents, setTorrents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState({ display: 'none' });
  const split = window.location.pathname.split("/")[2];
  const urlString = split !== undefined ? split : "";

  const callTorrent = (param) => {
    if (param) {
      setLoading(true);

      axios.get(`http://127.0.1:3030/search/${param}`)
      .then((res) => {
        if (res.data.msg) {
          setTorrents([]);
        } else {
          setTorrents(res.data);
        }

        setLoading(false);
      });
    }
  };

  useEffect(() => {
    callTorrent(urlString);
  }, [urlString]);

  const showInfo = () => {
    setStyle({ display: 'block' });
  };

  const hideInfo = () => {
    setStyle({ display: 'none' });
  }

  return (
    <Row>
      <Col md={{ span: 10, offset: 2 }} className="col-content">
        <main className="explorar">
          {urlString === "" ? (
            <div>
              <div className="space" />
              <h1>Faça uma busca :)</h1>
            </div>
          ) : (
            <section className="explorar__cards">
              {loading ? (
                <div>
                  <div className="space" />
                  <h1>Carregando {urlString ? `resultados para ${urlString}...` : "lista..."}</h1>
                </div>
              ) : (
                <>
                  {Object.keys(torrents).length === 0 ? (
                    <div>
                      <div className="space" />
                      <h1>Nenhum resultado para {urlString}.</h1>
                    </div>
                  ) : (
                    <>
                      {torrents.map((torrent, index) => {

                        return (
                          <Col md={3} key={index}>
                            <div
                              className="explorar__card"
                              onMouseEnter={() => showInfo()}
                              onMouseLeave={() => hideInfo()}
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
                                  <ExoButton text="Baixar" action="/downloads" />
                                </span>
                              </div>
                            </div>
                          </Col>
                        )
                      }
                      )}
                    </>
                  )}
                </>
              )}
            </section>
          )}

        </main>
      </Col>
    </Row>
  );

}

export default Home;
