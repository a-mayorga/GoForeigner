/**
 * Tipousuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'tipousuario',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idTipoUsuario: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idTipoUsuario'
     },
     descripcion :{
       type : 'string',
       size : 10,
       columnName : 'descripcion'
     }
   }
 };
