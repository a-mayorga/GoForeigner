/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getUsers: function(req, res) {
		User.find().exec(function(err, user) {
			if(err) {
				console.log(err);
			}
			res.json(user);
		});
	}
};
