/**
 * TiposrestriccionController
 *
 * @description :: Server-side logic for managing tiposrestriccions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getTipoRestriccion: function(req, res) {
		TiposRestriccion.find({ select: ['descripcion'] }).exec(function(err, types) {
			if(err) {
				console.log(err);
			}
			res.json(types);
		});
	}
};
