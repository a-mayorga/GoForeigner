/**
 * Imagenes.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'imagenes',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idImagen: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idImagen'
     },
     idPublicacion: {
       type: 'integer',
       columnName: 'idPublicacion'
     },
     dirImagen: {
       type: 'string',
       size: 250,
       columnName: 'dirImagen'
     }
   }

 };
