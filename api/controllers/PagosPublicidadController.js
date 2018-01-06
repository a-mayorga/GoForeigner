/**
 * PagospublicidadController
 *
 * @description :: Server-side logic for managing pagospublicidads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getPagosPublicidad: function(req, res) {
		PagosPublicidad.find().exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			sails.log(user)
			res.json(user);
		});
	},

	save: function (req, res) {
		var param = {
			idPublicacion: req.param('idPublicacion'),
			idTipoPublicidad: req.param('idTipoPublicidad'),
			fechaInicio: req.param('fechaInicio'),
			idTipoUsuario: req.param('idTipoUsuario')
		}
		User.create(param).exec(function(err, users) {
			console.log("done");
		});
	},

	update: function (req, res) {
		Category.update({ idPagoPublicidad: req.param('idPagoPublicidad') }, {
			idPublicacion: req.param('idPublicacion'),
			idTipoPublicidad: req.param('idTipoPublicidad'),
			fechaInicio: req.param('fechaInicio'),
			idTipoUsuario: req.param('idTipoUsuario')
		}).exec(function(err, users) {
			console.log("done");
		});
		return;
	},

	delete: function (req, res) {
	Category.destroy({ idPagoPublicidad: req.param('idPagoPublicidad') }).exec(function(err, users) {
			console.log("done");
		});
		return;
	},

	publicaciones : function(req, res){
		PagosPublicidad.query('SELECT * FROM publicacion WHERE idPublicacion IN (SELECT idPublicacion FROM pagosPublicidad)', [ 'idPublicacion' ] ,function(err, rawResult) {
		  if (err) { return res.serverError(err); }
		  // sails.log(rawResult);
		  // res.json(rawResult);
		  return res.ok(rawResult);
		});
	},

	setPagoPublicidad: function (req, res) {
		var dayF = new Date();
		setFinal();
		function setFinal(){
			var fecha = new Date();
			fecha.setDate(fecha.getDate() + parseInt(req.param("long")));
			dayF = fecha;
		}
		var dataPay = {
			idPublicacion : req.param("idPublicacion"),
			idTipoPublicidad : req.param("tipoPublicidad"),
			fechaFinal : dayF,
			payerID : req.param("payerID"),
			paymentID : req.param("paymentID"),
			paymentToken : req.param("paymentToken")
		}
		PagosPublicidad.create(dataPay).exec(function(err, pay) {
			if (err) {
        return res.json(500, { message: 'Hubo un problema. Inténtalo de nuevo.' });
      }
      return res.ok(pay);
		});
	}

};
