/**
 * Restriccionesinmuebles.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'restriccionesinmuebles',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idRestriccion: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idRestriccion'
     },
     idPublicacion: {
       type: 'integer',
       columnName: 'idPublicacion'
     },
     idTipoRestriccion: {
       type: 'integer',
       columnName: 'idTipoRestriccion'
     },
   }
 };
