/**
 * Enable rich forms (jQuery UI and editor)
 */
var rootpath = process.cwd() + '/',
  path = require('path'),
  calipso = require(path.join(rootpath, 'lib/calipso'));

/**
 * Turns form date elements into jQUery UI Datepickers
 * REQUIRES jQuery & jQuery UI to be included in the theme ...
 */
exports = module.exports = {
  init: init,
  route: route,
  disable: disable,
  reload: reload,
  depends:["content","contentTypes"],
  last: true
};

/**
 * Route
 */
function route(req, res, module, app, next) {

  module.router.route(req, res, next);

};

/**
 *Init
 */
function init(module, app, next) {

  // Any pre-route config
  calipso.lib.step(
    function defineRoutes() {
      
      // Add a route to every page
      module.router.addRoute(/.*?layout=plain.*/, usePlainLayout, {}, this.parallel());
      
    },
    function done(){
      next();
    }
  );


};

/**
 * Use an ajax-friendly 'plain' layout
 * This requires that you have a layout called plain, that has no header, footer, navigation
 * etc. or you wont get desired results.
 */
function usePlainLayout(req, res, template, block, next) {

  res.layout = "plain";
  next();

};


/*
 * Disable - same as reload
 */
function disable() {
  reload();
}

/**
 * Reload
 */
function reload() {

  // Reset the Form methods to their defaults
  // TODO!
}