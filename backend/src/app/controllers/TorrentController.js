const TorrentSearchApi = require('torrent-search-api');

// TorrentSearchApi.enablePublicProviders();
TorrentSearchApi.enableProvider('1337x')
/**
 * index    = retorna uma listagem de sessões
 * show     = lista uma única sessão
 * store    = cria uma sessão
 * update   = altera uma sessão
 * destroy  = destroi uma sessão
 */


class TorrentController {
  async listTorrents(req, res){
    

    return res.json({error : "Coming soon"});
  }
  async search(req, res) {
    let torrent = await TorrentSearchApi.search(req.params.query, 'Games')
    
    return res.json(torrent);
  }
}

module.exports = new TorrentController();