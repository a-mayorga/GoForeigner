/**
 * TiporeporteController
 *
 * @description :: Server-side logic for managing tiporeportes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getTipoReporte: function(req, res) {
		User.find().exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			res.json(user);
		});
	}
};
