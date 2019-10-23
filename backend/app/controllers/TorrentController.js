const TorrentSearchApi = require("torrent-search-api");
const extractData = require("../lib/HtmlExtractor");

const { convertDate } = require("../../util/util");

// TorrentSearchApi.enablePublicProviders();
TorrentSearchApi.enableProvider("1337x");

class TorrentController {
  async search(req, res) {
    let getTorrents = await TorrentSearchApi.search(req.params.query, "Games");

    let torrentHtmlDetail = await Promise.all(
      getTorrents.map(torrent => TorrentSearchApi.getTorrentDetails(torrent))
    );

    let torrents = [];
    getTorrents.map((torrent, index) => {
      torrents.push({
        title: torrent.title,
        time: convertDate(torrent.time),
        peers: torrent.peers,
        seeds: torrent.seeds,
        size: torrent.size,
        data: extractData(torrentHtmlDetail[index])
      });
    });

    return res.json(torrents);
  }
}

module.exports = new TorrentController();
