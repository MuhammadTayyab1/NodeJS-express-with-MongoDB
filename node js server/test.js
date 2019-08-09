const http = require('http');
const fs= require('fs');

// local host
const hostname = '127.0.0.1';

// port
const port = 3000;

fs.readFile('index.html',(err, html) => {
	if(err)
	{
       throw err;
	}

	const server = http.createServer((req,res) => 
	{
       res.statusCode = 200;
       res.setHeader('Contect-type','text/html');
       res.write(html);
       res.end('hello World');
		
    });

    server.listen(port,hostname,() => 
    {
	console.log('server satarted on port'+port);
    });
})

