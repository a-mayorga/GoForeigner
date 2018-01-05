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
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'UserController',
    action: 'getUser'
  },
  /**************************************************************************/
  'GET /api/user': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'UserController',
    action: 'getUsers'
  },
  'POST /api/user/save': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'UserController',
    action: 'save'
  },
  'POST /api/user/update': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'UserController',
    action: 'update'
  },
  'POST /api/user/delete': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'UserController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/grades': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'CalificacionesController',
    action: 'getCalificaciones'
  },
  'POST /api/grades/save': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'CalificacionesController',
    action: 'save'
  },
  'POST /api/grades/update': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'CalificacionesController',
    action: 'update'
  },
  'POST /api/grades/delete': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'CalificacionesController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/comments': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'ComentariosController',
    action: 'getComentarios'
  },
  'POST /api/comments/save': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'ComentariosController',
    action: 'save'
  },
  'POST /api/comments/update': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'ComentariosController',
    action: 'update'
  },
  'POST /api/comments/delete': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'ComentariosController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/saved': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'GuardadosController',
    action: 'getGuardados'
  },
  'POST /api/saved/save': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'GuardadosController',
    action: 'save'
  },
  'POST /api/saved/update': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'GuardadosController',
    action: 'update'
  },
  'POST /api/saved/delete': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'GuardadosController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/adspayment': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'PagosPublicidadController',
    action: 'getPagosPublicidad'
  },
  'POST /api/adspayment/publicaciones': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'PagosPublicidadController',
    action: 'publicaciones'
  },
  'POST /api/adspayment/save': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'PagosPublicidadController',
    action: 'save'
  },
  'POST /api/adspayment/update': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'PagosPublicidadController',
    action: 'update'
  },
  'POST /api/adspayment/delete': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'PagosPublicidadController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/posts': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'PublicacionController',
    action: 'getPublicaciones'
  },
  'POST /api/posts/save': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'PublicacionController',
    action: 'save'
  },
  'POST /api/posts/setAdd': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'PublicacionController',
    action: 'saveAdd'
  },
  'POST /api/posts/uploadImg': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'PublicacionController',
    action: 'uploadImg'
  },
  'POST /api/posts/update': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'PublicacionController',
    action: 'update'
  },
  'POST /api/posts/delete': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'PublicacionController',
    action: 'delete'
  },
  'POST /api/posts/getMyPublicaciones': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'PublicacionController',
    action: 'getMyPublicaciones'
  },
  /**************************************************************************/
  'GET /api/reports': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'ReportesController',
    action: 'getReportes'
  },
  'POST /api/reports/save': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'ReportesController',
    action: 'save'
  },
  'POST /api/reports/update': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'ReportesController',
    action: 'update'
  },
  'POST /api/reports/delete': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'ReportesController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/restrictions': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'RestriccionesInmueblesController',
    action: 'getRestriccionesInmuebles'
  },
  'POST /api/restrictions/save': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'RestriccionesInmueblesController',
    action: 'save'
  },
  'POST /api/restrictions/update': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'RestriccionesInmueblesController',
    action: 'update'
  },
  'POST /api/restrictions/delete': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'RestriccionesInmueblesController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/services': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'ServiciosInmuebleController',
    action: 'getServiciosInmueble'
  },
  'POST /api/services/save': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'ServiciosInmuebleController',
    action: 'save'
  },
  'POST /api/services/update': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'ServiciosInmuebleController',
    action: 'update'
  },
  'POST /api/services/delete': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'ServiciosInmuebleController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/zone': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'ZonaInmuebleController',
    action: 'getZonaInmueble'
  },
  'POST /api/zone/save': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'ZonaInmuebleController',
    action: 'save'
  },
  'POST /api/zone/update': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'ZonaInmuebleController',
    action: 'update'
  },
  'POST /api/zone/delete': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'ZonaInmuebleController',
    action: 'delete'
  },
  /**************************************************************************/
  'GET /api/adstype': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'TipoPublicidadController',
    action: 'getTipoPublicidad'
  },
  'POST /api/adstypebyId': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'TipoPublicidadController',
    action: 'getPlan'
  },
  'GET /api/reportstype': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'TipoReporteController',
    action: 'getTipoReporte'
  },
  'GET /api/statetype': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'TipoEstadoController',
    action: 'getTipoEstado'
  },
  'GET /api/restrictionstype': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'TiposRestriccionController',
    action: 'getTipoRestriccion'
  },
  'GET /api/servicestype': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'TiposServicioController',
    action: 'getTiposServicio'
  },
  'GET /api/zonetype': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
    controller: 'TiposZonasController',
    action: 'getTiposZonas'
  },
  /*************************************************************************/
  '/*': {
    cors: {
       origin: '*',
       headers: 'Content-Type, Authorization'
    },
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
