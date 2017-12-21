/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var crypto = require('crypto');

module.exports = {

  getUsers: function(req, res) {
    User.find().exec(function(err, user) {
      if (err) {
        console.log(err);
      }
      res.json(user);
    });
  },
  getUser: function(req, res) {
    var param = {
      correo: req.body.email,
      password: crypto.createHash('md5').update(req.body.pass).digest('hex')
    }

    User.findOne(param).exec(function(err, user) {
      if (err) {
        return res.json(500, { message: 'Hubo un problema. Inténtalo de nuevo.' });
      }

      if (user) {
        if (user.idTipoEstado == 1) {
          return res.ok(user);
        } else {
          return res.json(500, { message: 'Tu cuenta se encuentra bloqueada.' });
        }
      } else {
        return res.json(500, { message: 'Usuario o contraseña incorrectos.' });
      }
    });
  },
  save: function(req, res) {
    var param = {
      nombre: req.body.name,
      apellidos: req.body.lastName,
      correo: req.body.email,
      telefono: req.body.phone,
      idTipoUsuario: 3,
      idTipoEstado: 1,
      password: crypto.createHash('md5').update(req.body.pass).digest('hex')
    }
    User.create(param).exec(function(err, user) {
      if (err) {
        return res.serverError(err);
      }

      res.ok({
        status: 1
      });
    });
  },
  update: function(req, res) {
    Category.update({
      idUsuario: req.param('idUsuario')
    }, {
      nombre: req.param('nombre'),
      apellidos: req.param('apellidos'),
      correo: req.param('correo'),
      idTipoUsuario: req.param('idTipoUsuario'),
      idTipoEstado: req.param('idTipoEstado'),
      password: req.param('password')
    }).exec(function(err, users) {
      console.log("done");
    });
    return;
  },
  delete: function(req, res) {
    Category.destroy({
      idUsuario: req.param('idUsuario')
    }).exec(function(err, users) {
      console.log("done");
    });
    return;
  }
};
