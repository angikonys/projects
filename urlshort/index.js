const express = require('express');

const app = express();

const url2 = require('url');

const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended: false});

const shortid = require('shortid')

const knex = require('knex')({
    client: 'mysql',
    connection: {
    host : 'localhost',
    user : 'kurl',
    password : '42069',
    database : 'urlshort'
    }
});

const port = 8080;

//check si la table exist et creation si elle est pas la
knex.schema.hasTable('urlshort').then(function(exist){
    if(!exist){
        return knex.schema.createTable('urlshort',function(table){
            table.specificType('uuid','VarCHAR(10)').primary();
            table.text('url');

        });
    }
})





app.get('/', function(req, res) {
    
    res.render('homepage.ejs');
    
})

.get('/l/:uuid',function(req,res){

    if(req.params.uuid.length>10)res.redirect('/');
    
    knex.select('url').from('urlshort').where('uuid',req.params.uuid).first().then(function(url){
        
        if(url==null){res.redirect('/');
    }else{res.redirect(url.url);}

        


    })

})

.post('/add',urlencodedParser,function(req,res){
    
    if(!req.body.surl.startsWith('http')){
        res.redirect('/invalid');
        return;


    }

    knex.select('uuid').from('urlshort').where('url',req.body.surl).first().then(function(uuid){
        
        if(uuid == ''){
               
            const uid = shortid.generate();

            knex.insert({uuid: uid,url: req.body.surl}).into('urlshort').then(res.redirect(`/d/${uid}`) );
            
            
               

        }
        else{
            
            res.redirect(`/d/${uuid.uuid}`);}
        

    })
})

.get('/d/:uid',function(req,res){
    
    knex.select('url').from('urlshort').where('uuid',req.params.uid).then(function(url){
        if(url==null)res.redirect('/');
        
        res.render('linkdone.ejs',{url: req.hostname + ':'+port + '/l/'+req.params.uid })
        


    })



}).get('/invalid',function(req,res){
    res.render('invalid.ejs');
})




app.listen(port);