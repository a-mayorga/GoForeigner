/**
 * TiposzonasController
 *
 * @description :: Server-side logic for managing tiposzonas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getTiposZonas: function(req, res) {
		TiposZonas.find().exec(function(err, types) {
			if(err) {
				console.log(err);
			}
			res.json(types);
		});
	}
};
