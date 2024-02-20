// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(request, response) {
    var path = url.parse(request.url).pathname;
    console.log(path);
    switch (path) {
        case '/':
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write('<h1>Hello!</h1>');
            response.end();
            break;
        case '/comments':
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write('<h1>Comments</h1>');
            response.end();
            break;
        default:
            response.writeHead(404);
            response.write('opps this doesn\'t exist - 404');
            response.end();
            break;
    }
}).listen(3000);
console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
```

###