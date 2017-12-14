/**
 * Tiporeporte.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'tiporeporte',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idTipoReporte: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idTipoReporte'
     },
     descripcion :{
       type : 'string',
       size : 50,
       columnName : 'descripcion'
     }
   }
 };
