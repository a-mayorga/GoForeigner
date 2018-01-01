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

		req.file('avatar').upload({
		    maxBytes: 5000
		  },function whenDone(err, uploadedFiles) {
		    if (err) {
		      return res.negotiate(err);
		    }

		    // If no files were uploaded, respond with an error.
		    if (uploadedFiles.length === 0){
		      return res.badRequest('No file was uploaded');
		    }
		    // Save the "fd" and the url where the avatar for a user can be accessed
		    User.update(req.session.me, {
		      // Generate a unique URL where the avatar can be downloaded.
		      avatarUrl: require('util').format('%s/posts/imgPost/%s', sails.config.appUrl, req.session.me),
		      // Grab the first file and use it's `fd` (file descriptor)
		      avatarFd: uploadedFiles[0].fd
		    })
		    .exec(function (err){
		      if (err) return res.negotiate(err);
		      return res.ok();
		    });
		  });

		Publicacion.create(param).exec(function(err, users) {
			if(err) {
				sails.log(err);
			}
			sails.log(users);
			res.json(users);
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
