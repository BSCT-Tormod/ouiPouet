let http = require('http');
let fs = require('fs');
let url = require('url');

let server = http.createServer();
server.on('request', (request, response)=>{
    console.log('il y a eu une requete');
    fs.readFile('./index.html', (err, data) =>{
        if (err){
            response.writeHead(404)
            response.end("ce fichier n'existe pas")
        }
        response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
        console.log(url.parse(request.url, true));
        response.end(data);
    })
})

server.listen(8080);