var mysql = require('mysql');
var connection = null;
var getConnection = function () {
  if (connection) return connection;
  var config = {
    host : 'federation-db',
    user : 'federation',
    password : 'federation',
    database: 'federation'
  };
  connection = mysql.createConnection(config);
  return connection;
};

var findByFriendlyId = function (friendlyId) {
  var conn = getConnection();
  var query = function (resolve, reject) {
    conn.query('select * from accounts where friendly_id = ?', [friendlyId], function (err, rows, fields) {
      if (err) {
        reject(err);
        return;
      }
      if (!rows || rows.length < 1) {
        reject(new Error('there is no such account where friendlyId is ' + friendlyId));
        return;
      }
      resolve(rows[0]);
    });
  };
  return new Promise(query);
};

module.exports = {
  findByFriendlyId: findByFriendlyId
};
