/**
 * Universidades.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'universidades',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idUniversidad: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idUniversidad'
     },
     idZonaInmueble :{
       type : 'integer',
       columnName : 'idZonaInmueble'
     },
     nombre :{
       type : 'string',
       size : 100,
       columnName : 'nombre'
     }
   }
 };
