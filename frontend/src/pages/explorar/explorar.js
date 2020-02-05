import React, {useState, useEffect} from 'react';
import * as Cards from '@rmwc/card';
import {Typography} from '@rmwc/typography';
import {Button} from '@rmwc/button';
import {LinearProgress} from '@rmwc/linear-progress';
import '@rmwc/circular-progress/circular-progress.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import './explorar.scss'
import axios from 'axios';
const {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionButton,
  CardActionIcons,
  CardActionIcon
} = Cards;

function Explorar() {
  const [torrents,
    setTorrents] = useState([]);

  useEffect(() => {
    setTorrents('');
    axios
      .get('http://localhost:3030/search/shooter')
      .then(response => {
        console.log(response.data);
        setTorrents(response.data);
      })
      .catch(error => {
        console.log(`Ocorreu erro: ${error} `);
      });
  }, []);

  if (torrents) {
    return ( <> 
   
    <div className="explorar">
      {torrents.map((torrent, index) => (
        <Card  key={index} className="explorar__md-card">
          <CardPrimaryAction>

            <CardMedia
              sixteenByNine
              style={{
              backgroundImage: torrent.data.cover
                ? `url(${torrent.data.cover})`
                : 'url(https://rmwc.io/images/backgrounds/mb-bg-fb-16.png)'
            }}/>
            <div className="explorar__md-text">
              <Typography use="headline6" tag="h2">
                {torrent.title}
              </Typography>
              <Typography use="subtitle2" tag="h3">
               {torrent.time}
              </Typography>
              <Typography use="body1" tag="div">
               <p>peers: {torrent.peers} </p>
               <p>seeds: {torrent.seeds}</p>
               <p>size: {torrent.size}</p>
              </Typography>
            </div>
          </CardPrimaryAction>
          <CardActions>
            <CardActionButtons>
              <CardActionButton>
                <Button label="Download" unelevated />
              </CardActionButton>
                <Button label="Favorite" outlined /> 
            </CardActionButtons>
 
          </CardActions>
        </Card>

      ))
}
    </div> </>
 ) } else{
 return (
   <div className="explorar"><LinearProgress /> </div>
 )}
}
export default Explorar;