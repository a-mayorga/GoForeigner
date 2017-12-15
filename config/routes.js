/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  'POST /api/login': {
    controller: 'UserController',
    action: 'getUser'
  },
  'GET /api/user': {
    controller: 'UserController',
    action: 'getUsers'
  },
  'POST /api/user/save': {
    controller: 'UserController',
    action: 'save'
  },
  'POST /api/user/update': {
    controller: 'UserController',
    action: 'update'
  },
  'POST /api/user/delete': {
    controller: 'UserController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/calificaciones': {
    controller: 'CalificacionesController',
    action: 'getCalificaciones'
  },
  'POST /api/calificaciones/save': {
    controller: 'CalificacionesController',
    action: 'save'
  },
  'POST /api/calificaciones/update': {
    controller: 'CalificacionesController',
    action: 'update'
  },
  'POST /api/calificaciones/delete': {
    controller: 'CalificacionesController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/comentarios': {
    controller: 'ComentariosController',
    action: 'getComentarios'
  },
  'POST /api/comentarios/save': {
    controller: 'ComentariosController',
    action: 'save'
  },
  'POST /api/comentarios/update': {
    controller: 'ComentariosController',
    action: 'update'
  },
  'POST /api/comentarios/delete': {
    controller: 'ComentariosController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/guardados': {
    controller: 'GuardadosController',
    action: 'getGuardados'
  },
  'POST /api/guardados/save': {
    controller: 'GuardadosController',
    action: 'save'
  },
  'POST /api/guardados/update': {
    controller: 'GuardadosController',
    action: 'update'
  },
  'POST /api/guardados/delete': {
    controller: 'GuardadosController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/pagosPublicidad': {
    controller: 'PagosPublicidadController',
    action: 'getPagosPublicidad'
  },
  'POST /api/pagosPublicidad/save': {
    controller: 'PagosPublicidadController',
    action: 'save'
  },
  'POST /api/pagosPublicidad/update': {
    controller: 'PagosPublicidadController',
    action: 'update'
  },
  'POST /api/pagosPublicidad/delete': {
    controller: 'PagosPublicidadController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/publicacion': {
    controller: 'PublicacionController',
    action: 'getPublicaciones'
  },
  'POST /api/publicacion/save': {
    controller: 'PublicacionController',
    action: 'save'
  },
  'POST /api/publicacion/update': {
    controller: 'PublicacionController',
    action: 'update'
  },
  'POST /api/publicacion/delete': {
    controller: 'PublicacionController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/reportes': {
    controller: 'ReportesController',
    action: 'getReportes'
  },
  'POST /api/reportes/save': {
    controller: 'ReportesController',
    action: 'save'
  },
  'POST /api/reportes/update': {
    controller: 'ReportesController',
    action: 'update'
  },
  'POST /api/reportes/delete': {
    controller: 'ReportesController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/restriccionesinmuebles': {
    controller: 'RestriccionesInmueblesController',
    action: 'getRestriccionesInmuebles'
  },
  'POST /api/restriccionesinmuebles/save': {
    controller: 'RestriccionesInmueblesController',
    action: 'save'
  },
  'POST /api/restriccionesinmuebles/update': {
    controller: 'RestriccionesInmueblesController',
    action: 'update'
  },
  'POST /api/restriccionesinmuebles/delete': {
    controller: 'RestriccionesInmueblesController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/serviciosInmueble': {
    controller: 'ServiciosInmuebleController',
    action: 'getServiciosInmueble'
  },
  'POST /api/serviciosInmueble/save': {
    controller: 'ServiciosInmuebleController',
    action: 'save'
  },
  'POST /api/serviciosInmueble/update': {
    controller: 'ServiciosInmuebleController',
    action: 'update'
  },
  'POST /api/serviciosInmueble/delete': {
    controller: 'ServiciosInmuebleController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/zonainmueble': {
    controller: 'ZonaInmuebleController',
    action: 'getZonaInmueble'
  },
  'POST /api/zonainmueble/save': {
    controller: 'ZonaInmuebleController',
    action: 'save'
  },
  'POST /api/zonainmueble/update': {
    controller: 'ZonaInmuebleController',
    action: 'update'
  },
  'POST /api/zonainmueble/delete': {
    controller: 'ZonaInmuebleController',
    action: 'delete'
  },
  /**************************************************************************/


  '/*': {
    view: 'index',
    skipAssets: true
  }

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
