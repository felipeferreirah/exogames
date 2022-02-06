const TorrentSearchApi = require("torrent-search-api");
const extractData = require("../helpers/HtmlExtractor");

const { convertDate } = require("../helpers/util");

// TorrentSearchApi.enablePublicProviders();
TorrentSearchApi.enableProvider("ThePirateBay");

class TorrentController {
  async search(req, res) {
    if (req.params) {

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

      if (torrents[0].title == "No results returned") {
        return res.json({ msg: "notFound" });
      } else {
        return res.json(torrents);
      }
    }else{
      return res.json({ msg: "noData"});
    }
  }
}

module.exports = new TorrentController();
