/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'usuarios',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    idUsuario: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      columnName: 'idUsuario'
    },
    nombre: {
      type: 'string',
      size: 50,
      columnName: 'nombre'
    },
    apellidos: {
      type: 'string',
      size: 80,
      columnName: 'apellidos'
    },
    correo: {
      type: 'string',
      size: 50,
      unique: true,
      columnName: 'correo'
    },
    telefono: {
      type: 'string',
      size: 50,
      unique: true,
      columnName: 'telefono'
    },
    idTipoUsuario: {
      type: 'integer',
      columnName: 'idTipoUsuario'
    },
    idTipoEstado: {
      type: 'integer',
      columnName: 'idTipoEstado'
    },
    password: {
      type: 'string',
      size: 100,
      columnName: 'password'
    },
    dirImagen: {
      type: 'string',
      size: 255,
      columnName: 'dirImagen'
    }
  }

};
