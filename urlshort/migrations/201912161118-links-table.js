const knex = require('../knexfile');



exports.up = function(knex) {
    return knex.schema.createTable('link', function (table) {
        table.specificType('uuid', 'VarCHAR(10)').primary();
        table.text('url');

    });
    

}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('link');

}

