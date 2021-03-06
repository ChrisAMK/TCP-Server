import net from "net";
import db from "./models/index.js";
import RIG21 from "./AssetAPI/Rig021.js";
import RIG8 from "./AssetAPI/Rig08.js";

const syncModels = async () => {
    db.MKY021.sync();
    db.MKY021RAW.sync();
    db.MKY08.sync();
    db.MKY08RAW.sync();
}


syncModels().then(() => {

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
                    // Rig 8 Code here
                    RIG8.saveRig8(data);
                    console.log("DATA FROM RIG 08", Math.random(10));
                    break;

                case 21:
                    // Rig 21 Code
                    //RIG21.saveRig21(data);
                    console.log("DATA FROM RIG 21", Math.random(10));
                    break;

                default:
                    // For non matching packets
                    console.log("Data does not match a current config.. possible attack")
            }
        });

        socket.on('end', () => {
            console.log("Closing Connection With Client!")
        });

        socket.on('error', (error) => {
            console.log(error);
        })

    });

    server.listen(1337, '192.168.1.31', () => {
        console.log('Server Starting! on: ', server.address());
    });
});