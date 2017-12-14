/**
 * ZonainmuebleController
 *
 * @description :: Server-side logic for managing zonainmuebles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getZonaInmueble: function(req, res) {
		User.find().exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			res.json(user);
		});
	}
};
