/**
 * ServiciosinmuebleController
 *
 * @description :: Server-side logic for managing serviciosinmuebles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getServiciosinmueble: function(req, res) {
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
			idTipoServicio: req.param('idTipoServicio')
		}
		User.create(param).exec(function(err, users) {
			console.log("done");
		});
	},

	update: function (req, res) {
		Category.update({ idServicio: req.param('idServicio') }, {
			idPublicacion: req.param('idPublicacion'),
			idTipoServicio: req.param('idTipoServicio')
		}).exec(function(err, users) {
			console.log("done");
		});
		return;
	},

	delete: function (req, res) {
	Category.destroy({ idServicio: req.param('idServicio') }).exec(function(err, users) {
			console.log("done");
		});
		return;
	}
};
