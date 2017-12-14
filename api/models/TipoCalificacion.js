/**
 * Tipocalificacion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'tipoCalificacion',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idTipoCalificacion: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idTipoCalificacion'
     },
     numEstrellas: {
       type: 'integer',
       columnName: 'numEstrellas'
     }
   }
 };
