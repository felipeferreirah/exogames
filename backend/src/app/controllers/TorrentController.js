const TorrentSearchApi = require('torrent-search-api');
const extractData = require('../lib/HtmlExtractor')

const {convertDate} = require('../../util/util');

// TorrentSearchApi.enablePublicProviders();
TorrentSearchApi.enableProvider('1337x')


class TorrentController {
  async listTorrents(req, res){
    

    return res.json({error : "Coming soon"});
  }

  async search(req, res) {
    console.time()
    let getTorrents = await TorrentSearchApi.search(req.params.query, 'Games'); 
    const torrentHtmlDetail = await TorrentSearchApi.getTorrentDetails(getTorrents[1]);

    let torrents = [];
    getTorrents.map(torrent => {
      torrents.push({
        title: torrent.title,
        time: convertDate(torrent.time),
        peers: torrent.peers,
        seeds: torrent.seeds,
        size: torrent.size,
        data: extractData(torrentHtmlDetail)
      })
    })

    return res.json(torrents);
  }
}

module.exports = new TorrentController();