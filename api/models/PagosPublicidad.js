/**
 * Pagospublicidad.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'pagospublicidad',
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
     paymentToken: {
       type: 'string',
       size : 70,
       columnName: 'paymentToken'
     },
     paymentID : {
       type: 'string',
       size : 70,
       columnName: 'paymentID'
     },
     payerID : {
       type: 'string',
       size : 70,
       columnName: 'payerID'
     },
     fechaInicio: {
       type: 'date',
       defaultsTo: function () {
            return new Date();
       },
       columnName: 'fechaInicio'
     },
     fechaFinal: {
       type: 'date',
       columnName: 'fechaFinal'
     },
   }

 };
