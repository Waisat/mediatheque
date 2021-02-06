var Db = require('../server/Database')


exports.movies=(req, res)=>{

    var sql = 'SELECT id, title, description FROM movies';
    Db.connection.query(sql, function (err, result) {

        if (err) return true;


        else{
            result=JSON.parse(JSON.stringify(result))
            console.log(result);
            return false

        }

    });


}
