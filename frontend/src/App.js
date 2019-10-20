import React, { useState ,useEffect} from 'react';
import axios from 'axios'; 
function App() {
  const [torrents, setTorrents] = useState([]);

  useEffect(() => {
    setTorrents('');
      axios.get( 'http://localhost:3030/search/gta')
    .then(response => {
      console.log(response.data);
      setTorrents(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

    if (torrents){ 
  return (
    <ul>
      {torrents.map((torrent,index) => (
        <li key={index}>
          <a href={torrent.url}>{torrent.title}</a>
        </li>
      ))}
    </ul>
  ) }else{
  return (
    <div>carregando</div>
  )}
}
export default App;