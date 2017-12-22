/**
 * Contactos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'contactos',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idContacto: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idContacto'
     },
     idUsuario: {
       type: 'integer',
       columnName: 'idUsuario'
     },
     idPublicacion :{
       type : 'integer',
       columnName : 'idPublicacion'
     }
   }
 };
