const http = require("http");
require('dotenv').config();

const server = http.createServer(( req, res )=>{
    const { url, method } = req;
    const requestOptions = {
        url: `${process.env.API}${process.env.ENDPOINT}`,
        method: 'GET',
        json: {},
        qs: {},
        headers: {
            'user-agent': 'node.js',
            'Authorization': `token ${process.env.GIT_TOKEN}`
            }
        };
        
    if( method === "GET" && url === "/"){
        res.writeHead(200, {'Content-Type':'application/json'} );
        // const API = new Promise( req, res, ()=> {

        // });
        res.write(JSON.stringify({message: 'HELLO WORLDS', object: requestOptions}));
        res.end();
    }
});

server.listen( process.env.PORT );

console.log('Server on port', process.env.PORT);