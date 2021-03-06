/**
 * Created by Megha Nagabhushan on 10/23/2016.
 */
var http = require('http');

// Options to be used by request
var options = {
    host: 'localhost',
    port: '8089',
    path: '/index.html'
};

// Callback function is used to deal with response
var callback = function(response){
    // Continuously update stream with data
    var body = '';
    response.on('data', function(data) {
        body += data;
    });

    response.on('end', function() {
        // Data received completely.
        console.log(body);
    });
}
// Make a request to the server
var req = http.request(options, callback);
req.end();
