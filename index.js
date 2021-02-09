import net from "net";
import MKY021 from "./models/mky021.js";

const invalidValue = "Invalid Value Entered";

MKY021.sequelize.sync().then(() => {

    const getData = (uData) => {
        console.log("NEW DATA RECEIVED");
        
        let dataToBeSent = {
            
            engineRpm: uData[11] * 256 + uData[10] || invalidValue,
            oilPressure: uData[13] * 256 + uData[12] || invalidValue,
            engineHours: uData[59] * 256 + uData[60] || invalidValue,
            coolantTemp: uData[15] * 256 + uData[14] || invalidValue,
            headPosition: uData[17] * 256 + uData[16] || invalidValue,
            holeDepth: uData[19] * 256 + uData[18] || invalidValue,
            rotationRpm: uData[23] * 256 + uData[22] || invalidValue,
            penetrationRate: uData[25] * 256 + uData[24] || invalidValue,
            mastAngle: uData[27] * 256 + uData[26] || invalidValue,
            deckRoll: uData[29] * 256 + uData[28] || invalidValue,
            deckPitch: uData[31] * 256 + uData[30] || invalidValue,
            headRackBackProxyStatus: uData[32],
            footClampPressureSwitch: uData[33],
            coolantLevelSensor: uData[34],
            rotationReversePressure: uData[36] * 256 + uData[35] || invalidValue,
            rotationForwardPressure: uData[38] * 256 + uData[37] || invalidValue,
            holdBackPressure: uData[40] * 256 + uData[39] || invalidValue,
            pulldownPressure: uData[42] * 256 + uData[41] || invalidValue,
            waterPressure: uData[44] * 256 + uData[43] || invalidValue,
            mainPumpPressure: uData[46] * 256 + uData[45] || invalidValue,
            winchDownPressure: uData[48] * 256 + uData[47] || invalidValue,
            winchUpPressure: uData[50] * 256 + uData[49] || invalidValue,
            driller1: uData[51],
            driller1: uData[52],
            driller1: uData[53],
            driller1: uData[54],
            driller1: uData[55],
            driller1: uData[56],
            driller1: uData[57],
            driller1: uData[58]

        };

        MKY021.create({
            ts: dataToBeSent.ts,
            engineRPM: dataToBeSent.engineRPM,
            oilPressure: dataToBeSent.oilPressure,
            engineHours: dataToBeSent.engineHours,
            coolantTemp: dataToBeSent.coolantTemp,
            headPosition: dataToBeSent.headPosition,
            holeDepth: dataToBeSent.holeDepth,
            rotationRpm: dataToBeSent.rotationRpm,
            penetrationRate: dataToBeSent.penetrationRate,
            mastAngle: dataToBeSent.mastAngle,
            deckRoll: dataToBeSent.deckRoll,
            deckPitch: dataToBeSent.deckPitch,
            headRackBackProxyStatus: dataToBeSent.headRackBackProxyStatus,
            footClampPressureSwitch: dataToBeSent.footClampPressureSwitch,
            coolantLevelSensor: dataToBeSent.coolantLevelSensor,
            rotationReversePressure: dataToBeSent.rotationReversePressure,
            rotationForwardPressure: dataToBeSent.rotationForwardPressure,
            holdBackPressure: dataToBeSent.holdBackPressure,
            pulldownPressure: dataToBeSent.pulldownPressure,
            waterPressure: dataToBeSent.waterPressure,
            mainPumpPressure: dataToBeSent.mainPumpPressure,
            winchDownPressure: dataToBeSent.winchDownPressure,
            winchUpPressure: dataToBeSent.winchUpPressure
        });

        console.log("NEW DATA RECEIVED", Math.random(10));
        console.log(dataToBeSent);
    };

    const server = net.createServer((socket) => {
        socket.write('Echo server\r\n');
        socket.on('error', (err) => {
            console.log(err)
        });
    
        //socket.end('Goodbye: ');

        socket.on('connect', (data) => {
            console.log(data.toString() + "New Connection Detected\r\n");
            console.log('Connected');
        });

        socket.on('data', (data) => {
            if (data[9] == 21) {
                getData(data);


            } else if (data[0] = 87) {
                console.log(data, Math.random(1))
                console.log("Another one")
            }

        });

    });

    server.listen(1337, 'localhost', () => {
        console.log('Server Starting! on: ', server.address());
    });
});