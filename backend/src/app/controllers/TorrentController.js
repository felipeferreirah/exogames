const TorrentSearchApi = require('torrent-search-api');

const {convertDate} = require('../../util/util');
// TorrentSearchApi.enablePublicProviders();
TorrentSearchApi.enableProvider('1337x')


class TorrentController {
  async listTorrents(req, res){
    

    return res.json({error : "Coming soon"});
  }

  async search(req, res) {
    let getTorrents = await TorrentSearchApi.search(req.params.query, 'Games');   
    let torrents = [];
    getTorrents.map(torrent => {
      torrents.push({
        title: torrent.title,
        time: convertDate(torrent.time),
        peers: torrent.peers,
        seeds: torrent.seeds,
        size: torrent.size
      })
    })
    const torrentHtmlDetail = await TorrentSearchApi.getTorrentDetails(getTorrents[1]);
    console.log(torrentHtmlDetail)
    
    return res.json(torrents);
  }
}

module.exports = new TorrentController();