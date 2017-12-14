/**
 * Municipios.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'municipios',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idMunicipio: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idMunicipio'
     },
     idEstado: {
       type: 'integer',
       columnName: 'idEstado'
     },
     nombreMunicipio: {
       type: 'string',
       size: 25,
       columnName: 'nombreMunicipio'
     }
   }

 };
