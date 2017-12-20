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
	}
};
