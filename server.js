const http = require('http');
const fs = require('fs');
const express = require('express')
const app = express();
const path = require('path');

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/writeData', (req, res) =>{
    if(req.body){
        res.status(200).send('data recived!');
        res.end();

        fs.writeFile(req.body.title, JSON.stringify(req.body, null, 2), 'utf-8', (err) =>{
            if(err){
                console.log(err);
            }
        });
    } else {
        res.status(400).send('not recived data');
    }
});
app.post('/createDirectory', (req, res) =>{
    fs.mkdir(req.body.dirName, (err) =>{

        console.log('pasta name' + req.body.dirName);
        if(err){
            console.log(err);
        }
    } )
})

const port = 3000
app.listen(port, ()=>{
    console.log('ruuning server');
});