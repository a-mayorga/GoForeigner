/**
 * TipousuarioController
 *
 * @description :: Server-side logic for managing tipousuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getTipoUsuario: function(req, res) {
		User.find().exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			res.json(user);
		});
	}
};
