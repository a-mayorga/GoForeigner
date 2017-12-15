/**
 * UniversidadesController
 *
 * @description :: Server-side logic for managing universidades
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getUniversidades: function(req, res) {
		Universidades.find().exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			res.json(user);
		});
	},

	save: function (req, res) {
		var param = {
			idZonaInmueble: req.param('idZonaInmueble'),
			nombre: req.param('nombre')
		}
		User.create(param).exec(function(err, users) {
			console.log("done");
		});
	},

	update: function (req, res) {
		Category.update({ idUniversidad: req.param('idUniversidad') }, {
			idZonaInmueble: req.param('idZonaInmueble'),
			nombre: req.param('nombre')
		}).exec(function(err, users) {
			console.log("done");
		});
		return;
	},

	delete: function (req, res) {
	Category.destroy({ idUniversidad: req.param('idUniversidad') }).exec(function(err, users) {
			console.log("done");
		});
		return;
	}
};
