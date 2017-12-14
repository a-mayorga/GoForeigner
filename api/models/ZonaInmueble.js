/**
 * Zonainmueble.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'zonainmueble',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idZona: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idZona'
     },
     idTipoZona :{
       type : 'integer',
       columnName : 'idTipoZona'
     },
     idEstado :{
       type : 'integer',
       columnName : 'idEstado'
     },
     idMunicipio :{
       type : 'integer',
       columnName : 'idMunicipio'
     }
   }
 };
