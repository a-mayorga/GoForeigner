/**
 * Estados.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   tableName: 'estados',
   autoCreatedAt: false,
   autoUpdatedAt: false,
   attributes: {
     idEstado: {
       type: 'integer',
       autoIncrement: true,
       primaryKey: true,
       columnName: 'idEstado'
     },
     nombreEstado: {
       type: 'string',
       size: 25,
       columnName: 'nombreEstado'
     }
   }

 };
