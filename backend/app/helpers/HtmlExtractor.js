  const { parse } = require('node-html-parser');

  module.exports = function extractData(torrentHTML) {
      var data = {};
      const root = parse(torrentHTML);
      /**
       * Get images
       */
      let img = root.querySelectorAll("img");
      try {
          data.cover = img[0].rawAttributes['data-original'];
          data.print = [];
          img.forEach(element => {
              data.print.push(element.rawAttributes['data-original']);
          });
          data.print.shift();
      } catch (err) {
          data.print = null;
      }
      /**
       * Get description
       */
      let description = root.querySelector('#description');
      data.desc = description ? description.rawText : null


      return data;
  };

