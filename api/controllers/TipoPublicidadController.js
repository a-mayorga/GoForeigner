/**
 * TipopublicidadController
 *
 * @description :: Server-side logic for managing tipopublicidads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getTipoPublicidad: function(req, res) {
		TipoPublicidad.find().exec(function(err, types) {
			if(err) {
				console.log(err);
			}
			res.json(types);
		});
	},
	getPlan: function(req, res) {
    var param = {
      idTipoPublicidad: req.body.id,
    }

    TipoPublicidad.findOne(param).exec(function(err, types) {
      if (err) {
        return res.json(500, { message: 'Hubo un problema. Inténtalo de nuevo.' });
      }
      if (types) {
        res.json(types);
      } else {
        return res.json(500, { message: 'Error.' });
      }
    });
  }
};
