/**
 * ComentariosController
 *
 * @description :: Server-side logic for managing comentarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getComentarios: function(req, res) {
		User.find().exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			res.json(user);
		});
	},

	save: function (req, res) {
		var param = {
			idPublicacion: req.param('idPublicacion'),
			idUsuario: req.param('idUsuario'),
			comentario: req.param('comentario')
		}
		User.create(param).exec(function(err, users) {
			console.log("done");
		});
	},

	update: function (req, res) {
		Category.update({ idComentario: req.param('idComentario') }, {
			idPublicacion: req.param('idPublicacion'),
			idUsuario: req.param('idUsuario'),
			comentario: req.param('comentario')
		}).exec(function(err, users) {
			console.log("done");
		});
		return;
	},

	delete: function (req, res) {
	Category.destroy({ idComentario: req.param('idComentario') }).exec(function(err, users) {
			console.log("done");
		});
		return;
	}
};
