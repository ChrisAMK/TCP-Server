import MKY021 from "./models/mky021.js";
import MKY08 from "./models/mky08.js"

const invalidValue = "Invalid Value Entered";

export default {

    saveRig8: (uData) => {

        let dataToBeSent = {
            
            engineRpm: (uData[11] * 256 + uData[10] / 10)   || invalidValue,
            oilPressure: uData[13] * 256 + uData[12] / 10   || invalidValue,
            engineHours: uData[59] * 256 + uData[60]        || invalidValue,
            coolantTemp: uData[15] * 256 + uData[14] / 10   || invalidValue,
            headPosition: uData[17] * 256 + uData[16] /10   || invalidValue,
            holeDepth: uData[19] * 256 + uData[18] / 10     || invalidValue,
            rotationRpm: uData[23] * 256 + uData[22] / 10   || invalidValue,
            penetrationRate: uData[25] * 256 + uData[24]    || invalidValue,
            mastAngle: uData[27] * 256 + uData[26]          || invalidValue,
            deckRoll: uData[29] * 256 + uData[28]           || invalidValue,
            deckPitch: uData[31] * 256 + uData[30]          || invalidValue,
            headRackBackProxyStatus: uData[32],
            footClampPressureSwitch: uData[33],
            coolantLevelSensor: uData[34],
            rotationReversePressure: uData[36] * 256 + uData[35] / 10 || invalidValue,
            rotationForwardPressure: uData[38] * 256 + uData[37] / 10 || invalidValue,
            holdBackPressure: uData[40] * 256 + uData[39] / 10        || invalidValue,
            pulldownPressure: uData[42] * 256 + uData[41] / 10        || invalidValue,
            waterPressure: uData[44] * 256 + uData[43] / 10           || invalidValue,
            mainPumpPressure: uData[46] * 256 + uData[45] / 10        || invalidValue,
            winchDownPressure: uData[48] * 256 + uData[47] / 10       || invalidValue,
            winchUpPressure: uData[50] * 256 + uData[49] / 10         || invalidValue,
            
        }
        let drillerString = "";
        let driller = {
            driller1: uData[51],
            driller2: uData[52],
            driller3: uData[53],
            driller4: uData[54],
            driller5: uData[55],
            driller6: uData[56],
            driller7: uData[57],
            driller8: uData[58]
        }
        
        for (let i = 0; i < driller.length; i++) {
            drillerString.concat(String.fromCharCode(driller[i]));
        }

        dataToBeSent.driller = drillerString;

        MKY08.create({
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
            winchUpPressure: dataToBeSent.winchUpPressure,
            driller: dataToBeSent.driller
        });

    },

    saveRig21: (uData) => {
        console.log("Starting Function")
        let dataToBeSent = {
            
            engineRpm: (uData[11] * 256 + uData[10] / 10)   || invalidValue,
            oilPressure: uData[13] * 256 + uData[12] / 10   || invalidValue,
            engineHours: uData[59] * 256 + uData[60]        || invalidValue,
            coolantTemp: uData[15] * 256 + uData[14] / 10   || invalidValue,
            headPosition: uData[17] * 256 + uData[16] /10   || invalidValue,
            holeDepth: uData[19] * 256 + uData[18] / 10     || invalidValue,
            rotationRpm: uData[23] * 256 + uData[22] / 10   || invalidValue,
            penetrationRate: uData[25] * 256 + uData[24]    || invalidValue,
            mastAngle: uData[27] * 256 + uData[26] / 100          || invalidValue,
            deckRoll: ((uData[29] * 256 + uData[28]) / 100)          || invalidValue,
            deckPitch: ((uData[31] * 256 + uData[30]) / 100)        || invalidValue,
            headRackBackProxyStatus: uData[32],
            footClampPressureSwitch: uData[33],
            coolantLevelSensor: uData[34],
            rotationReversePressure: uData[36] * 256 + uData[35] / 10 || invalidValue,
            rotationForwardPressure: uData[38] * 256 + uData[37] / 10 || invalidValue,
            holdBackPressure: uData[40] * 256 + uData[39] / 10        || invalidValue,
            pulldownPressure: uData[42] * 256 + uData[41] / 10        || invalidValue,
            waterPressure: uData[44] * 256 + uData[43] / 10           || invalidValue,
            mainPumpPressure: uData[46] * 256 + uData[45] / 1000        || invalidValue,
            winchDownPressure: uData[48] * 256 + uData[47] / 10       || invalidValue,
            winchUpPressure: uData[50] * 256 + uData[49] / 10         || invalidValue,
            bitWeight: uData[64] * 265 + uData[63] / 10                    || invalidValue,
            driller: "Not Signed in"
        }
        console.log(dataToBeSent);
        let drillerString = "";
        let driller = {
            driller1: uData[51],
            driller2: uData[52],
            driller3: uData[53],
            driller4: uData[54],
            driller5: uData[55],
            driller6: uData[56],
            driller7: uData[57],
            driller8: uData[58]
        }
        
        for (let i = 0; i < driller.length; i++) {
            drillerString.concat(String.fromCharCode(driller[i]));
        }
        console.log(drillerString, "HEY")
        dataToBeSent.driller = drillerString;

        // Error Checking
        console.log(dataToBeSent.driller);
        if (dataToBeSent.penetrationRate > 90) {
            console.log("Penetration RATE:", dataToBeSent.penetrationRate)
            dataToBeSent.penetrationRate = null
        };

        if (dataToBeSent.oilPressure > 90) {
            console.log("OIL PRESSURE:", dataToBeSent.oilPressure)
            dataToBeSent.oilPressure = null
        };
        console.log(dataToBeSent);
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
            winchUpPressure: dataToBeSent.winchUpPressure,
            bitWeight: dataToBeSent.bitWeight,
            driller: dataToBeSent.driller || "IN"
        }).then(() => console.log("Log Created"));
    }


}