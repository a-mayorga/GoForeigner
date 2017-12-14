/**
 * Comentarios.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'comentarios',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idComentario: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idComentario'
     },
     idPublicacion: {
       type: 'integer',
       columnName: 'idPublicacion'
     },
     idUsuario: {
       type: 'integer',
       columnName: 'idUsuario'
     },
     comentario: {
       type: 'string',
       size: 150,
       columnName: 'comentario'
     }
   }
 };
