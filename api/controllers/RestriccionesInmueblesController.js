/**
 * RestriccionesinmueblesController
 *
 * @description :: Server-side logic for managing restriccionesinmuebles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getRestriccionesInmuebles: function(req, res) {
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
			idTipoRestriccion: req.param('idTipoRestriccion')
		}
		User.create(param).exec(function(err, users) {
			console.log("done");
		});
	},

	update: function (req, res) {
		Category.update({ idRescripcion: req.param('idRescripcion') }, {
			idPublicacion: req.param('idPublicacion'),
			idTipoRestriccion: req.param('idTipoRestriccion'),
			fechaReporte: req.param('fechaReporte')
		}).exec(function(err, users) {
			console.log("done");
		});
		return;
	},

	delete: function (req, res) {
	Category.destroy({ idRescripcion: req.param('idRescripcion') }).exec(function(err, users) {
			console.log("done");
		});
		return;
	}
};
