var mysql      = require('mysql');
var connection = mysql.createConnection({
  host            : '61.19.254.8',
  user            : 'webservice',
  password        : 'webservice!@#$%',
  database        : 'buffe_webservice'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

var query = connection.query('SELECT * FROM inv_user limit 1', function (error, results, fields) {
  console.log(results[0].user_id);

  if (error) throw error;
  // Neat!
});



exports.checkUser =  function ($lineid) {

  var qCommand = 'SELECT * FROM line_users where line_id = \'' + $lineid   +'\' limit 1';
  var check =0;

  var qCheckUser = connection.query(qCommand, function (error, results, fields) {
  //  console.log(results[0].get_prize);
  check = results[0].get_prize;

    if (error) throw error;
    // Neat!
  });
return check;

}

exports.completeUser =  function ($lineid) {

  var qCommand = 'UPDATE  line_users set user_status = \'2\' where line_id = \'' + $lineid   +'\';';

  var qCheckUser = connection.query(qCommand, function (error, results, fields) {
  //  console.log(results[0].get_prize);


    if (error) throw error;
    // Neat!
  });
return "ok";

}

exports.checkPrize=  function ($lineid) {

  var qCommand = 'SELECT  line_users set user_status = \'2\' where line_id = \'' + $lineid   +'\';';

  var qCheckUser = connection.query(qCommand, function (error, results, fields) {
  //  console.log(results[0].get_prize);


    if (error) throw error;
    // Neat!
  });
return "ok";

}
