/* request to the base for auth, signup ) */
const Config = require('../config/auth.config.js')
const Db = require('../server/Database.js')
const verifyEmail= require('../middleware/verifySignUp.js')
var jwt = require('jsonwebtoken');


const userBody = require ('../server/model/user.model.js')
exports.signUp=(req, res)=>{

    const userModel = new userBody.User(req.body.username, req.body.email, req.body.password)

    const checkEmail = verifyEmail.VerifySignUp

    if(checkEmail){
        var sql = "INSERT INTO user (username, email, password) VALUES ?";
        var values = [
            [userModel.username,userModel.email, userModel.password]
        ];
        Db.connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            result = JSON.parse(JSON.stringify(result))
            res.status(200)
            console.log("Number of records inserted: " + result);
        });

    }else{
        console.log('email existe déja');
    }





}
