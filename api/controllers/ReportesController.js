/**
 * ReportesController
 *
 * @description :: Server-side logic for managing reportes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getReportes: function(req, res) {
		User.find().exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			res.json(user);
		});
	},

	save: function (req, res) {
		var param = {
			idUsuario: req.param('idUsuario'),
			idUsuarioReportado: req.param('idUsuarioReportado'),
			idTipoReporte: req.param('idTipoReporte'),
			descripcion: req.param('descripcion'),
			fechaReporte: req.param('fechaReporte')
		}
		User.create(param).exec(function(err, users) {
			console.log("done");
		});
	},

	update: function (req, res) {
		Category.update({ idReporte: req.param('idReporte') }, {
			idUsuario: req.param('idUsuario'),
			idUsuarioReportado: req.param('idUsuarioReportado'),
			idTipoReporte: req.param('idTipoReporte'),
			descripcion: req.param('descripcion'),
			fechaReporte: req.param('fechaReporte')
		}).exec(function(err, users) {
			console.log("done");
		});
		return;
	},

	delete: function (req, res) {
	Category.destroy({ idReporte: req.param('idReporte') }).exec(function(err, users) {
			console.log("done");
		});
		return;
	}
};
