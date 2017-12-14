/**
 * Reportes.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'reportes',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idReporte: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idReporte'
     },
     idUsuario: {
       type: 'integer',
       columnName: 'idUsuario'
     },
     idUsuarioReportado: {
       type: 'integer',
       columnName: 'idUsuarioReportado'
     },
     idTipoReporte: {
       type: 'integer',
       columnName: 'idTipoReporte'
     },
     descripcion: {
       type: "string",
       size: 200,
       columnName: 'descripcion'
     },
     fechaReporte: {
       type: "datetime",
       defaultsTo: function () {
            return new Date();
       },
       columnName: 'fechaReporte'
     },
   }
 };
