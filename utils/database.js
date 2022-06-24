/**
 * Purpose of this file is to connect ot the mySQL
 * server and create a connection.
 * The connection needs to be exported so that it can be used
 * at the other places.
 */

const Sequelize = require('sequelize');

// console.log(Sequelize);

/**
 * IN order to use, we need to execute this function
 * 
 * I need a connection object
 * 
 * 1. DB Name
 * 2. User name
 * 3. Password
 * 4. Host - remote/local
 * 5. dialect - which exact database "mysql"
 */

const connection = new Sequelize('seq_demo', 'root', '1234', {
    dialect: "mysql",
    host: 'localhost'
});

console.log(typeof connection);

module.exports = connection;