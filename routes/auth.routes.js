const authController = require('../controller/auth.controller.js')

module.exports = function(app) {

    app.post("/api/signUp", authController.signUp);

}
