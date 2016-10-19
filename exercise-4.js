var mysql = require('mysql');
var colors = require('colors')

var connection = mysql.createConnection({
  host     : process.env.IP,
  user     : process.env.C9_USER,
  password : '',
  database : 'addressbook'
});

var theQuery = `select Account.id,
Account.email,
GROUP_CONCAT(AddressBook.name SEPARATOR '-') as name
from Account
Left Join AddressBook on(Account.id = AddressBook.accountId)
group by Account.id;
`


connection.query(theQuery, function(err, rows, fields){
    if(err)console.log(err.stack);
    
    else{
        
        rows.forEach(function(row){
            if(row.name === null)row.name = '--no addressbooks--'
            var dash = "-"
            var splitNames = row.name.split(dash)

                console.log("#" + row.id + ': ' + row.email.underline.blue)
                    
                    for(var i = 0; i < splitNames.length; i++){
            
                        console.log(splitNames[i]);
                        
                    }
                    console.log(' ');
            })
    }
    connection.end();
})