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
  res.send( {message: 'Test to check connection with my backend datas'} );
});

module.exports = router;
