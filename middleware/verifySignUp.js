const Db = require('../server/Database.js')

exports.VerifySignUp=(req, res)=> {

        var sql = 'SELECT email FROM user WHERE email= ?';
         Db.connection.query(sql, req.body.email, function (err, result) {

            if (err) {
               return true

            }
           else if (result){

            return false

            }


        });





}
