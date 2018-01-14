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

//check my user data
router.post('/', function(req, res, next) {
  //res.send( {message: req.body.username} );


  var username = req.body.username;
  var password = req.body.password;
  var division = req.body.division;
//select user items from database
  connection.query(
  	"SELECT * From user WHERE  username = ? AND password = ? AND division = ?",
  	[ username, password, division ], function(err, row, field) {
  	//error message when unable to connect to database 
  		if (err) {
  			console.log(err);
  			res.send({'success': false, 'message': 'could not connect to database'});

  		}

      //selecion of username and division from user table to use them later
  		if(row.length > 0) {
        res.send({'success': true, 'user': row[0].username,'user': row[0].division});

  		}
      //message displayed when the input items from the front end don't match with available items in the database

  		else  {
  			res.send({'success': false, 'message':'user not found'});
  		}
  	}

  	);
});

module.exports = router;
