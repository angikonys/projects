const express = require('express');

const app = express();

const url2 = require('url');

const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const shortid = require('shortid')

const knex = require('./knexfile').development;

const port = JSON.parse(localStorage.getItem("config")).port;

const router = require('./router');


//check si la table exist et creation si elle est pas la
knex.schema.hasTable('urlshort').then(function (exist) {
    if (!exist) {
        return knex.schema.createTable('urlshort', function (table) {
            table.specificType('uuid', 'VarCHAR(10)').primary();
            table.text('url');

        });
    }
})

app.use(router);

app.listen(port);