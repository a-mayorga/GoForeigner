/**
 * Publicacion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'publicacion',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idPublicacion: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idPublicacion'
     },
     idUsuario : {
       type: 'integer',
       columnName: 'idUsuario'
     },
     idZonaInmueble: {
       type: 'integer',
       columnName: 'idZonaInmueble'
     },
     lat: {
       type: 'string',
       size: 25,
       columnName: 'lat'
     },
     lng: {
       type: 'string',
       size: 25,
       columnName: 'lng'
     },
     costo: {
       type: 'float',
       columnName: 'costo'
     },
     descripcion: {
       type: 'string',
       size: 150,
       columnName: 'descripcion'
     },
     huespedes: {
       type: 'integer',
       columnName: 'huespedes'
     },
     fechaPublicacion: {
       type: "datetime",
       defaultsTo: function () {
            return new Date();
       },
       columnName: 'fechaPublicacion'
     },
     fechaVencimiento: {
       type: "datetime",
       defaultsTo: function () {
            return new Date();
       },
       columnName: 'fechaVencimiento'
     },
   }

 };
