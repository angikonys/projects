// Update with your config settings.

const config = JSON.parse(localStorage.getItem("config"));

const knex = require('knex')({
    "client": "mysql",
    "connection": config.connection

  
});

module.exports = knex;




