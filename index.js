import net from "net";
import MKY021 from "./models/mky021.js";
import API from "./API.js";

const invalidValue = "Invalid Value Entered";

MKY021.sequelize.sync().then(() => {

    const server = net.createServer((socket) => {
        socket.write('Echo server\r\n');
        socket.on('error', (err) => {
            console.log(err)
        });

        socket.on('connection', (data) => {
            console.log(data.toString() + "New Connection Detected\r\n");
            console.log('Connected');
        });

        socket.on('data', (data) => {

            switch (data[9]) {
                case 8:
                    // Rig 21 Code here
                    API.saveRig8(data);
                    break;

                case 21:
                    // Rig 8 Code
                    API.saveRig21(data);
                    break;

                default:
                    // For non matching packets
                    console.log("Data does not match a current config.. possible attack")
            }
        });

        socket.on('end', () => {
            console.log("Closing Connection With Client!")
        });

    });

    server.listen(1337, '192.168.5.10', () => {
        console.log('Server Starting! on: ', server.address());
    });
});