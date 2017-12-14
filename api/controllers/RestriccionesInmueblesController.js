/**
 * RestriccionesinmueblesController
 *
 * @description :: Server-side logic for managing restriccionesinmuebles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getRestriccionesInmuebles: function(req, res) {
		User.find().exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			res.json(user);
		});
	}
};
