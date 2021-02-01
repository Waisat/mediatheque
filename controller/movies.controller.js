var db = require('../server/Database')

exports.movies=(req, res)=>{

  db.connection.query('SELECT id, title, description FROM movies', function (error, results, fields) {
        if (error) throw error;
        else{

            console.log('fields', fields)
            results=JSON.parse(JSON.stringify(results))

            console.log('>> results: ', results );
        }
        console.log('The solution is: ');
    });

};
