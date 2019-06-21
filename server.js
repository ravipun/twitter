var express = require('express');
var app = express();

const http = require('http');
const port = 5000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World! I am a Legend\n');
});

server.listen(port,()=>{
    console.log(`Server running at onport ${port}`);
});