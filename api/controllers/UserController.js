/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getUsers: function(req, res) {
		User.find().exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			res.json(user);
		});
	},

	save: function (req, res) {
		var param = {
			nombre: req.param('nombre'),
			apellidos: req.param('apellidos'),
			correo: req.param('correo'),
			idTipoUsuario: req.param('idTipoUsuario'),
			idTipoEstado: req.param('idTipoEstado'),
			password: req.param('password')
		}
		User.create(param).exec(function(err, users) {
			console.log("done");
		});
	},

	update: function (req, res) {
		Category.update({ idUsuario: req.param('idUsuario') }, {
			nombre: req.param('nombre'),
			apellidos: req.param('apellidos'),
			correo: req.param('correo'),
			idTipoUsuario: req.param('idTipoUsuario'),
			idTipoEstado: req.param('idTipoEstado'),
			password: req.param('password')
		}).exec(function(err, users) {
			console.log("done");
		});
		return;
	},

	delete: function (req, res) {
	Category.destroy({ idUsuario: req.param('idUsuario') }).exec(function(err, users) {
			console.log("done");
		});
		return;
	}
};
