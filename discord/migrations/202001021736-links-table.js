const knex = require('../knexfile');



exports.up = function(knex) {
    return knex.schema.createTable('songs', function (table) {
        table.increments('id');
        table.text('url');
        table.text('title');
        table.int('year');
        table.text('tags');


    });
    

}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('songs');

}
