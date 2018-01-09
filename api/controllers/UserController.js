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
        return res.json(500, {
          message: 'Hubo un problema. Inténtalo de nuevo.'
        });
      }

      if (user) {
        if (user.idTipoEstado == 1) {
          return res.ok(user);
        } else {
          return res.json(500, {
            message: 'Tu cuenta se encuentra bloqueada.'
          });
        }
      } else {
        return res.json(500, {
          message: 'Usuario o contraseña incorrectos.'
        });
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
    var params = {
      nombre: req.body.name,
      apellidos: req.body.lastName,
      correo: req.body.email,
      telefono: req.body.phone
    }

    if (req.body.newPass != undefined) {
      params.password = crypto.createHash('md5').update(req.body.newPass).digest('hex');
    }

    if (req.body.hasPicture == 'true') {
      var today = new Date();
      var day = today.getDate();
      var month = today.getMonth() + 1;
      var year = today.getFullYear();

      if (day < 10) {
        day = '0' + day;
      }

      if (month < 10) {
        month = '0' + month;
      }

      today = day + month + year;

      var pictureName = req.file('picture')._files[0].stream.filename;
      var ext = pictureName.substr(pictureName.length - 4, 4);
      var idUser = req.body.idUser;
      var newName = idUser + today + ext;

      req.file('picture').upload({
        dirname: require('path').resolve(sails.config.appPath, 'assets/profile_pictures'),
        saveAs: newName
      }, function(err, files) {
        if (err) {
          return res.json(500, {
            message: 'Hubo un problema al subir la imagen. Inténtalo de nuevo.'
          });
        }

        params.dirImagen = 'profile_pictures/' + newName;

        User.update({
          idUsuario: parseInt(req.body.idUser)
        }, params).exec(function(err, updated) {
          if (err) {
            return res.json(500, {
              message: 'Hubo un problema. Inténtalo de nuevo.'
            });
          }

          res.json(updated);
        });
      });
    } else if (req.body.hasPicture == 'false') {
      User.update({
        idUsuario: parseInt(req.body.idUser)
      }, params).exec(function(err, updated) {
        if (err) {
          return res.json(500, {
            message: 'Hubo un problema. Inténtalo de nuevo.'
          });
        }

        res.json(updated);
      });
    }
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
