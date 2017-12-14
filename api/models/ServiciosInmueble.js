/**
 * Serviciosinmueble.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'serviciosinmueble',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idServicio: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idServicio'
     },
     idPublicacion: {
       type: 'integer',
       columnName: 'idPublicacion'
     },
     idTipoServicio: {
       type: 'integer',
       columnName: 'idTipoServicio'
     },
   }
 };
