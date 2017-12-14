/**
 * Tiposrestriccion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'tipopublicidad',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idTipoRestriccion: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idTipoRestriccion'
     },
     descripcion :{
       type : 'string',
       size : 25,
       columnName : 'descripcion'
     }
   }
 };
