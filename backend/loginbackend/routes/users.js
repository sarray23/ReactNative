var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//connection to my data base users
var connection = mysql.createConnection({
	 host: 'localhost',
	 user: 'root',
	 password: 'root',
	 database: 'users',
})
/* change GET to POST. */
router.post('/', function(req, res, next) {
  //res.send( {message: req.body.username} );

  var username = req.body.username;
  var password = req.body.password;

  connection.query(
  	"SELECT * From user WHERE username = ? AND password = ?",
  	[username, password], function(err, row, field) {
  	
  		if (err) {
  			console.log(err);
  			res.send({'success': false, 'message': 'could not connect to database'});

  		}
  		if(row.length > 0) {
  			 res.send({'success': true, 'user': row[0].username});

  		}

  		else  {
  			res.send({'failure': false, 'message':'user not found'});
  		}
  	}

  	);
});

module.exports = router;
