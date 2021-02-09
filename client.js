//const net = require('net');
import net from 'net';

const client = new net.Socket();
client.connect(1337, '192.168.5.10', () => {
    console.log('Connected');
    client.write('Hello, Server! ')
});

client.on('data', (data) => {
    console.log('Received: ' + data);
    client.destroy();
});

client.on('close', () => {
    console.log('Connection Closed');
});