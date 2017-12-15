/**
 * Guardados.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'guardados',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idGuardados: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idGuardados'
     },
     idUsuario: {
       type: 'integer',
       columnName: 'idUsuario'
     },
     idPublicacion: {
       type: 'integer',
       columnName: 'idPublicacion'
     }
   }

 };
