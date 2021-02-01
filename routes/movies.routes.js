const controller = require( '../controller/movies.controller')

module.exports = function(app) {

    app.get("/api/movies", controller.movies);

}
