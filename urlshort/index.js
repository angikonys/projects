const express = require('express');

const app = express();

const port = require('./config').port;

const router = require('./router');



app.use(router);

app.listen(port,()=>{
    console.log(`Server Started on port ${port}`)
});

