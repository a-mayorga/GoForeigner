/**
 * Tipopublicidad.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'tipopublicidad',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idTipoPublicidad: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idTipoPublicidad'
     },
     costo: {
       type: 'float',
       columnName: 'costo'
     },
     duracion :{
       type : 'integer',
       columnName : 'duracion'
     },
     descripcion :{
       type : 'string',
       size : 500,
       columnName : 'descripcion'
     }
   }
 };
