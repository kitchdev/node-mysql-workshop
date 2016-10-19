var mysql = require('mysql');
var colors = require('colors')

var connection = mysql.createConnection({
  host     : process.env.IP,
  user     : process.env.C9_USER,
  password : '',
  database : 'addressbook'
});

var theQuery;
              
              
              
connection.query(`select * from Email limit 5`, function(err, rows){
  if(err)console.log(err.stack)
  else{
    rows.forEach(function(row) {
    console.log('#' + row.id + ': ' + row.address.underline.red);
  });
  }
  
  
  
  connection.end();
})