/**
 * Pagospublicidad.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'pagopublicidad',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idPagoPublicidad: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idPagoPublicidad'
     },
     idPublicacion: {
       type: 'integer',
       columnName: 'idPublicacion'
     },
     idTipoPublicacidad: {
       type: 'integer',
       columnName: 'idTipoPublicacidad'
     },
     fechaInicio: {
       type: 'date',
       columnName: 'fechaInicio'
     },
     fechaFinal: {
       type: 'date',
       columnName: 'idTipoUsuario'
     },
   }

 };
