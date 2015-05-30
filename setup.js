var http =  require('http');

//configure http server
var server = http.createServer(function(request, response){
 	response.writeHead(200, {"content-type" : "text/plain"})
 	response.end("recieving data from server, change anything and run without restarting");
 });

//listen to port
server.listen(8000);

// put a msg on terminal
console.log('server running at 127.0.0.1:8000, anything, even after changes');