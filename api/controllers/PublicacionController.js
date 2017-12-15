/**
 * PublicacionController
 *
 * @description :: Server-side logic for managing publicacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getPublicaciones: function(req, res) {
		User.find().exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			res.json(user);
		});
	},

	save: function (req, res) {
		var param = {
			lat: req.param('lat'),
			lng: req.param('lng'),
			costo: req.param('costo'),
			descripciones: req.param('descripciones'),
			telefono: req.param('telefono'),
			fechaPublicacion: req.param('fechaPublicacion'),
			fechavencimiento: req.param('fechavencimiento'),
			zonainmueble: req.param('zonainmueble')
		}
		User.create(param).exec(function(err, users) {
			console.log("done");
		});
	},

	update: function (req, res) {
		Category.update({ idPublicacion: req.param('idPublicacion') }, {
			lat: req.param('lat'),
			lng: req.param('lng'),
			costo: req.param('costo'),
			descripciones: req.param('descripciones'),
			telefono: req.param('telefono'),
			fechaPublicacion: req.param('fechaPublicacion'),
			fechavencimiento: req.param('fechavencimiento'),
			zonainmueble: req.param('zonainmueble')
		}).exec(function(err, users) {
			console.log("done");
		});
		return;
	},

	delete: function (req, res) {
	Category.destroy({ idPublicacion: req.param('idPublicacion') }).exec(function(err, users) {
			console.log("done");
		});
		return;
	}
};
