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
		// console.log(param.allParams());
		var param = {
			idUsuario: req.param('idUsuario'),
			idPublicacion: req.param('idPublicacion')
		}
		Guardados.create(param).exec(function(err, save) {
			res.json(save)
		});
	},

	update: function (req, res) {
		Guardados.update({ idGuardados: req.param('idGuardados') }, {
			idUsuario: req.param('idUsuario'),
			idPublicacion: req.param('idPublicacion')
		}).exec(function(err, deleteSaved) {
			res.json(deleteSaved)
		});
		return;
	},

	delete: function (req, res) {
		var param = {
			idUsuario: req.param('idUsuario'),
			idPublicacion: req.param('idPublicacion')
		}
		Guardados.destroy(param).exec(function(err, deleteSaved) {
				res.json(deleteSaved);
		});
		return;
	}
};
