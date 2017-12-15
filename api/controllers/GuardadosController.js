/**
 * GuardadosController
 *
 * @description :: Server-side logic for managing guardados
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getGuardados: function(req, res) {
		Guardados.find().exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			res.json(user);
		});
	},

	save: function (req, res) {
		var param = {
			idUsuario: req.param('idUsuario'),
			idPublicacion: req.param('idPublicacion')
		}
		User.create(param).exec(function(err, users) {
			console.log("done");
		});
	},

	update: function (req, res) {
		Category.update({ idGuardados: req.param('idGuardados') }, {
			idUsuario: req.param('idUsuario'),
			idPublicacion: req.param('idPublicacion')
		}).exec(function(err, users) {
			console.log("done");
		});
		return;
	},

	delete: function (req, res) {
	Category.destroy({ idGuardados: req.param('idGuardados') }).exec(function(err, users) {
			console.log("done");
		});
		return;
	}
};
