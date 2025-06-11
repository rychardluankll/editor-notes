const http = require('http');
const fs = require('fs');
const express = require('express')
const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/data', (req, res) =>{
    if(req.body){
        res.status(200).send('data recived!');
        res.end();
    } else {
        res.status(400).send('not recived data');
    }
});

const port = 3000
app.listen(port, ()=>{
    console.log('ruuning server');
})