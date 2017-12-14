/**
 * Tipoestado.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'tipoestado',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idTipoEstado: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idTipoEstado'
     },
     descripcion: {
       type: 'string',
       size : 10,
       columnName: 'descripcion'
     }
   }
 };
