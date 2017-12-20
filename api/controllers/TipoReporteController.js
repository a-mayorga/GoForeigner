/**
 * TiporeporteController
 *
 * @description :: Server-side logic for managing tiporeportes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getTipoReporte: function(req, res) {
		TipoReporte.find().exec(function(err, types) {
			if(err) {
				console.log(err);
			}
			res.json(types);
		});
	}
};
