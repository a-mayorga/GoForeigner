/**
 * TipocalificacionController
 *
 * @description :: Server-side logic for managing tipocalificacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getTipoCalificacion: function(req, res) {
		User.find().exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			res.json(user);
		});
	}
};
