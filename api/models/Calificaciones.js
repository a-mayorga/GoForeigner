/**
 * Calificaciones.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'calificaciones',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idCalificacion: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idCalificacion'
     },
     idUsuarioCal: {
       type: 'integer',
       columnName: 'idUsuarioCal'
     },
     idUsuarioEval: {
       type: 'integer',
       columnName: 'idUsuarioEval'
     },
     calificacion: {
       type: 'integer',
       columnName: 'calificacion'
     },
     comentario: {
       type: 'string',
       size: 150,
       columnName: 'comentario'
     }
   }

 };
