/**
 * Tiposservicio.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'tiposservicio',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idTipoServicio: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idTipoServicio'
     },
     descripcion :{
       type : 'string',
       size : 25,
       columnName : 'descripcion'
     }
   }
 };
