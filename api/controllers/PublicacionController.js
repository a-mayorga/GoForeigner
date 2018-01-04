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
			idUsuario : req.param('idUsuario'),
			lat: req.param('lat'),
			lng: req.param('lng'),
			costo: req.param('costo'),
			descripcion: req.param('descripciones'),
			idZonaInmueble: req.param('idZonaInmueble'),
			huespedes: req.param('huespedes')
		}

		Publicacion.create(param).exec(function(err, publish) {
			if(err) {
				sails.log(err);
			}
			return res.ok(publish);
		});

	},

	saveAdd : function (req, res) {
		var restric = req.param('restricciones');
		var service = req.param('servicios');

		var insert = [];
		for (var i = 0; i < restric.length; i++) {
			insert.push({
				idPublicacion : req.param('idPublicacion'),
				idTipoRestriccion : restric[i]
			});
		}

		var insertService = [];
		for (var i = 0; i < service.length; i++) {
			insertService.push({
				idPublicacion : req.param('idPublicacion'),
				idTipoServicio : service[i]
			});
		}

		RestriccionesInmuebles.create(insert).exec(function(err, publish) {
			if(err) {
				sails.log(err);
			}
		});

		ServiciosInmueble.create(insertService).exec(function(err, publish) {
			if(err) {
				sails.log(err);
			}
			return res.ok(publish);
		});
	},

	uploadImg: function (req, res) {
		res.setTimeout(0);
		// console.log(sails.config.appPath);
		req.file('1').upload({
			maxBytes: 20000000,
		  dirname: require('path').resolve(sails.config.appPath, 'assets/images/publicaciones')
		},function (err, uploadedFiles) {
		  if (err) return res.negotiate(err);
			Imagenes.create([
				{ idPublicacion : req.param("dataimg"),
					dirImagen : uploadedFiles[0].fd.split('\\').pop()
				},
				{ idPublicacion : req.param("dataimg"),
					dirImagen : uploadedFiles[1].fd.split('\\').pop()
				},
				{ idPublicacion : req.param("dataimg"),
					dirImagen : uploadedFiles[2].fd.split('\\').pop()
				},
				{ idPublicacion : req.param("dataimg"),
					dirImagen : uploadedFiles[3].fd.split('\\').pop()
				}
			]).exec(function(err, users) {
				console.log("done");
			});
		  return res.json({
		    message: uploadedFiles.length
		  });
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
