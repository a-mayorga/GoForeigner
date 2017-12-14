/**
 * ServiciosinmuebleController
 *
 * @description :: Server-side logic for managing serviciosinmuebles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getServiciosinmueble: function(req, res) {
		User.find().exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			res.json(user);
		});
	}
};
