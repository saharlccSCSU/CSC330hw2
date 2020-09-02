//Add a header with your name, data, and description of this file

const http = require('http');
//create a server object:
const myserver = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<html> <body> <p> <strong> Hello World! </strong> </p> <p> Good Morning Class 
                </p> </body> </html>`); //write (send) a response to the client
    res.end(); //end the response
});
myserver.listen(80, function() {console.log("Listening on port 80")}); //the server object listens on port 8080

