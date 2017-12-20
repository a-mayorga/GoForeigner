/**
 * TiposservicioController
 *
 * @description :: Server-side logic for managing tiposservicios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getTiposServicio: function(req, res) {
		TiposServicio.find().exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			res.json(user);
		});
	}
};
