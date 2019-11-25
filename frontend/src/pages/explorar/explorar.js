 import React, { useState ,useEffect} from 'react'; 
import axios from 'axios'; 

function Explorar() {
  const [torrents, setTorrents] = useState([]);

  useEffect(() => {
    setTorrents('');
      axios.get('http://localhost:3030/search/diablo')
    .then(response => {
      console.log(response.data);
      setTorrents(response.data);
    })
    .catch(error => {
      console.log(`Ocorreu algum erro: ${error} `);
    });
  }, []);

    if (torrents){ 
  return (
    <ul>
      {torrents.map((torrent,index) => (
        <li key={index}>
          <a href={torrent.url}>{torrent.title}</a>
          <img src={torrent.data.cover} alt={torrent.title}/>
        </li>
      ))}
    </ul>
  ) }else{
  return (
    <div>carregando</div>
  )}
}
export default Explorar;
