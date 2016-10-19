var mysql = require('mysql');
var Table = require('cli-table')
var colors = require('colors')

var connection = mysql.createConnection({
  host     : process.env.IP,
  user     : process.env.C9_USER,
  password : '',
  database : 'addressbook'
});

var table = new Table({
    head: ['TH 1 label', 'TH 2 label']
  , colWidths: [100, 200]
});

connection.query("show databases", function(err, result) {
  // In this callback, rows will be all the rows of the query, in a regular array of regular objects
  // fields is not used very often, but it will contain a listing of the columns with some metadata
  if(err)console.log(err.stack);
  else{

  // Here is an example usage:

    var actualRes = JSON.stringify(result, null, 4);
    
          console.log(actualRes.rainbow);
        
  }
  // This code will output lines like:
  // #1: john@smith.com
  // #2: abc@def.com
  // #5: xx@yy.com
  connection.end()
  
  // Note that IDs do not have to be contiguous. If we DELETE rows, there will be holes in the ID list. This is normal.
});