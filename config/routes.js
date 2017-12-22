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
  /**************************************************************************/
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
  'GET /api/grades': {
    controller: 'CalificacionesController',
    action: 'getCalificaciones'
  },
  'POST /api/grades/save': {
    controller: 'CalificacionesController',
    action: 'save'
  },
  'POST /api/grades/update': {
    controller: 'CalificacionesController',
    action: 'update'
  },
  'POST /api/grades/delete': {
    controller: 'CalificacionesController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/comments': {
    controller: 'ComentariosController',
    action: 'getComentarios'
  },
  'POST /api/comments/save': {
    controller: 'ComentariosController',
    action: 'save'
  },
  'POST /api/comments/update': {
    controller: 'ComentariosController',
    action: 'update'
  },
  'POST /api/comments/delete': {
    controller: 'ComentariosController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/saved': {
    controller: 'GuardadosController',
    action: 'getGuardados'
  },
  'POST /api/saved/save': {
    controller: 'GuardadosController',
    action: 'save'
  },
  'POST /api/saved/update': {
    controller: 'GuardadosController',
    action: 'update'
  },
  'POST /api/saved/delete': {
    controller: 'GuardadosController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/adspayment': {
    controller: 'PagosPublicidadController',
    action: 'getPagosPublicidad'
  },
  'POST /api/adspayment/save': {
    controller: 'PagosPublicidadController',
    action: 'save'
  },
  'POST /api/adspayment/update': {
    controller: 'PagosPublicidadController',
    action: 'update'
  },
  'POST /api/adspayment/delete': {
    controller: 'PagosPublicidadController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/posts': {
    controller: 'PublicacionController',
    action: 'getPublicaciones'
  },
  'POST /api/posts/save': {
    controller: 'PublicacionController',
    action: 'save'
  },
  'POST /api/posts/update': {
    controller: 'PublicacionController',
    action: 'update'
  },
  'POST /api/posts/delete': {
    controller: 'PublicacionController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/reports': {
    controller: 'ReportesController',
    action: 'getReportes'
  },
  'POST /api/reports/save': {
    controller: 'ReportesController',
    action: 'save'
  },
  'POST /api/reports/update': {
    controller: 'ReportesController',
    action: 'update'
  },
  'POST /api/reports/delete': {
    controller: 'ReportesController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/restrictions': {
    controller: 'RestriccionesInmueblesController',
    action: 'getRestriccionesInmuebles'
  },
  'POST /api/restrictions/save': {
    controller: 'RestriccionesInmueblesController',
    action: 'save'
  },
  'POST /api/restrictions/update': {
    controller: 'RestriccionesInmueblesController',
    action: 'update'
  },
  'POST /api/restrictions/delete': {
    controller: 'RestriccionesInmueblesController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/services': {
    controller: 'ServiciosInmuebleController',
    action: 'getServiciosInmueble'
  },
  'POST /api/services/save': {
    controller: 'ServiciosInmuebleController',
    action: 'save'
  },
  'POST /api/services/update': {
    controller: 'ServiciosInmuebleController',
    action: 'update'
  },
  'POST /api/services/delete': {
    controller: 'ServiciosInmuebleController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/zone': {
    controller: 'ZonaInmuebleController',
    action: 'getZonaInmueble'
  },
  'POST /api/zone/save': {
    controller: 'ZonaInmuebleController',
    action: 'save'
  },
  'POST /api/zone/update': {
    controller: 'ZonaInmuebleController',
    action: 'update'
  },
  'POST /api/zone/delete': {
    controller: 'ZonaInmuebleController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/adstype': {
    controller: 'TipoPublicidadController',
    action: 'getTipoPublicidad'
  },
  'POST /api/adstypebyId': {
    controller: 'TipoPublicidadController',
    action: 'getPlan'
  },
  'GET /api/reportstype': {
    controller: 'TipoReporteController',
    action: 'getTipoReporte'
  },
  'GET /api/statetype': {
    controller: 'TipoEstadoController',
    action: 'getTipoEstado'
  },
  'GET /api/restrictionstype': {
    controller: 'TiposRestriccionController',
    action: 'getTipoRestriccion'
  },
  'GET /api/servicestype': {
    controller: 'TiposServicioController',
    action: 'getTiposServicio'
  },
  'GET /api/zonetype': {
    controller: 'TiposZonasController',
    action: 'getTiposZonas'
  },
  /*************************************************************************/
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
