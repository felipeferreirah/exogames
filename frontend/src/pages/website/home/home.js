import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './home.scss';

function Home() {
  const [torrents, setTorrents] = useState([]);
  const [queryTorrent, setQueryTorrent] = useState([]);


  const onChangeHandler = event => {
    setQueryTorrent(event.target.value);
    callTorrent(queryTorrent);
  };

  const callTorrent = (param) =>{
   console.log(param);
  };

  useEffect(() => {
    setTorrents('');
    callTorrent('games');
  }, []);



    return (
    <>

      <input type="text" className="search-input" placeholder="Digite o nome" onChange={onChangeHandler} value={queryTorrent}/>

      <main className="explorar">
       <section className="explorar__cards">
       {torrents && torrents.map((torrent, index) => (
        <div  key={index} className="explorar__card">
            <img className="explorar__img" src={torrent.data.cover
                  ? `${torrent.data.cover}`
                  : 'https://static.thenounproject.com/png/2999524-200.png'} />
            <div className="explorar__card-info">
              <h2>{torrent.title} </h2>
              <h3>{torrent.magnetlink}</h3>
              <h3>{torrent.time}</h3>
              <p>peers: {torrent.peers} </p>
              <p>seeds: {torrent.seeds}</p>
              <p>size: {torrent.size}</p>
              <div className="exo__btn-secundary">Download</div>
            </div>

        </div>
      ))}
       </section>
		  </main>
    </>
  );

}

export default Home;
