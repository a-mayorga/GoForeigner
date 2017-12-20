/**
 * TipoestadoController
 *
 * @description :: Server-side logic for managing tipoestadoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getTipoEstado: function(req, res) {
		TipoEstado.find().exec(function(err, types) {
			if(err) {
				console.log(err);
			}
			res.json(types);
		});
	}
};
