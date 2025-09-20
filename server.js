const aedes = require('aedes')();
const net = require('net');

const PORT = process.env.PORT || 1883;

const server = net.createServer(aedes.handle);

server.listen(PORT, function () {
  console.log(`🚀 MQTT broker running on port ${PORT}`);
});

aedes.on('client', function (client) {
  console.log(`📡 Client Connected: ${client.id}`);
});

aedes.on('publish', function (packet, client) {
  if (client) {
    console.log(`📨 Message from ${client.id}: ${packet.payload.toString()}`);
  }
});
