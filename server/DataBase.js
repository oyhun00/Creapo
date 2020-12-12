const connection = require('./dbConnection');

const DataBase = (query) => {
  connection.connect();

  connection.config.queryFormat = (query, values) => {
    if (!values) {
      return query;
    }
    return query.replace(/:(w+)/g, function (txt, key) {
      if (values.hasOwnProperty(key)) {
        return this.escape(values[key]);
      }
      return txt;
    }.bind(this));
  }
  
  connection.query(query, (err, rows, field) => {
    if (err) {
      console.log(rows);
    }
  })
}

module.exports = DataBase;