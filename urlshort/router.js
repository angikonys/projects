const express = require('express');
const router = express.router;



router.get('/', function (req, res) {

    res.render('homepage.ejs');

});

    router.get('/l/:uuid', function (req, res) {

        if (req.params.uuid.length > 10) res.redirect('/');

        knex.select('url').from('urlshort').where('uuid', req.params.uuid).first().then(function (url) {

            if (url == null) {
                res.redirect('/');
            } else { res.redirect(url.url); }




        })

    });

    router.post('/add', urlencodedParser, function (req, res) {

        if (!req.body.surl.startsWith('http')) {
            res.redirect('/invalid');
            return;


        }

        knex.select('uuid').from('urlshort').where('url', req.body.surl).first().then(function (uuid) {

            if (uuid == '') {

                const uid = shortid.generate();

                knex.insert({ uuid: uid, url: req.body.surl }).into('urlshort').then(res.redirect(`/d/${uid}`));




            }
            else {

                res.redirect(`/d/${uuid.uuid}`);
            }


        })
    });

    router.get('/d/:uid', function (req, res) {

        knex.select('url').from('urlshort').where('uuid', req.params.uid).then(function (url) {
            if (url == null) res.redirect('/');

            res.render('linkdone.ejs', { url: req.hostname + ':' + port + '/l/' + req.params.uid })



        })



    });
    router.get('/invalid', function (req, res) {
        res.render('invalid.ejs');
    });


    module.exports = router;