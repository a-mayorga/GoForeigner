/**
 * CalificacionesController
 *
 * @description :: Server-side logic for managing calificaciones
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getCalificaciones: function(req, res) {
		User.find().exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			res.json(user);
		});
	},

	save: function (req, res) {
		var param = {
			idTipoCalificacion: req.param('idTipoCalificacion'),
			idUsuarioCal: req.param('idUsuarioCal'),
			idUsuarioEval: req.param('idUsuarioEval'),
			comentario: req.param('comentario')
		}
		User.create(param).exec(function(err, users) {
			console.log("done");
		});
	},

	update: function (req, res) {
		Category.update({ idCalificacion: req.param('idCalificacion') }, {
			idTipoCalificacion: req.param('idTipoCalificacion'),
			idUsuarioCal: req.param('idUsuarioCal'),
			idUsuarioEval: req.param('idUsuarioEval'),
			comentario: req.param('comentario')
		}).exec(function(err, users) {
			console.log("done");
		});
		return;
	},

	delete: function (req, res) {
	Category.destroy({ idCalificacion: req.param('idCalificacion') }).exec(function(err, users) {
			console.log("done");
		});
		return;
	}

};
