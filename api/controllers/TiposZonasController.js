/**
 * TiposzonasController
 *
 * @description :: Server-side logic for managing tiposzonas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getTiposZonas: function(req, res) {
		User.find().exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			res.json(user);
		});
	}
};
