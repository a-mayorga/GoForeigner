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
     idZonaInmueble: {
       type: 'integer',
       columnName: 'zonainmueble'
     },
     lat: {
       type: 'varchar',
       size: 25,
       columnName: 'lat'
     },
     lng: {
       type: 'varchar',
       size: 25,
       columnName: 'lng'
     },
     costo: {
       type: 'double',
       columnName: 'costo'
     },
     descripcion: {
       type: 'varchar',
       size: 150,
       columnName: 'descripcion'
     },
     telefono: {
       type: 'varchar',
       size: 15,
       columnName: 'telefono'
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
