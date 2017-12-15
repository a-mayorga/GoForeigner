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
	},

	save: function (req, res) {
		var param = {
			idTipoZona: req.param('idTipoZona'),
			idEstado: req.param('idEstado'),
			idMunicipio: req.param('idMunicipio')
		}
		User.create(param).exec(function(err, users) {
			console.log("done");
		});
	},

	update: function (req, res) {
		Category.update({ idZona: req.param('idZona') }, {
			idTipoZona: req.param('idTipoZona'),
			idEstado: req.param('idEstado'),
			idMunicipio: req.param('idMunicipio')
		}).exec(function(err, users) {
			console.log("done");
		});
		return;
	},

	delete: function (req, res) {
	Category.destroy({ idZona: req.param('idZona') }).exec(function(err, users) {
			console.log("done");
		});
		return;
	}
};
