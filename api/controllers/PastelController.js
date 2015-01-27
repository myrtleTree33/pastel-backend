
/**
PastelController

@description :: Server-side logic for managing pastels
@help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
  saveColors: function(req, res) {
    return res.json({
      colors: [[23, 55, 70], [55, 55, 200], [0, 0, 0], [255, 0, 0], [50, 50, 200]]
    });
  }
};
