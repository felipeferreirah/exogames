  class HomeController {
    async index(req, res) {
        return res.json({ error: "Coming soon" });
    }

  }

  module.exports = new HomeController();
