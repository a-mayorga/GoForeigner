/**
 * Estadias.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'estadias',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idEstadia: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idEstadia'
     },
     idUsuario: {
       type: 'integer',
       columnName: 'idUsuario'
     },
     idPublicacion :{
       type : 'integer',
       columnName : 'idPublicacion'
     },
     fechaInicio: {
       type: "datetime",
       defaultsTo: function () {
            return new Date();
       },
       columnName: 'fechaInicio'
     },
     fechaFin: {
       type: "datetime",
       defaultsTo: function () {
            return new Date();
       },
       columnName: 'fechaFin'
     },
     status :{
       type : 'integer',
       columnName : 'status'
     }
   }
 };
