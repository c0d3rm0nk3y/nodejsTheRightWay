"use strict";

const
  net = require('net'),
  
  server = net.createServer(function(connection) {
    console.log('Subscriber Connected');
    // send the first chunk immedately
    connection.write(
      '{"type": "changed", "file": "targ'
      );
      
      // after a one second delay, send the other chunk
      let timer = setTimeout(function() {
        connection.write('et.txt" , "timestamp": 1348175758495}' + "\n");
        connection.end();
      }, 1000);
      
      // clear timer when the connection ends
      connection.on('end', function() {
        clearTimeout(timer);
        console.log('subscriber disconnected...');
      });
  });
  
  server.listen(5432, function() {
    console.log('Test server listening for subscribers...');
  });