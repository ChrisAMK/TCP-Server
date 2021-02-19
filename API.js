import MKY021 from "./models/mky021.js";
import MKY08 from "./models/mky08.js"

const invalidValue = null;

export default {

    saveRig8: (uData) => {

        let postCalculations = {
            
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

        postCalculations.driller = drillerString;

        MKY08.create({
            ts: postCalculations.ts,
            engineRPM: postCalculations.engineRPM,
            oilPressure: postCalculations.oilPressure,
            engineHours: postCalculations.engineHours,
            coolantTemp: postCalculations.coolantTemp,
            headPosition: postCalculations.headPosition,
            holeDepth: postCalculations.holeDepth,
            rotationRpm: postCalculations.rotationRpm,
            penetrationRate: postCalculations.penetrationRate,
            mastAngle: postCalculations.mastAngle,
            deckRoll: postCalculations.deckRoll,
            deckPitch: postCalculations.deckPitch,
            headRackBackProxyStatus: postCalculations.headRackBackProxyStatus,
            footClampPressureSwitch: postCalculations.footClampPressureSwitch,
            coolantLevelSensor: postCalculations.coolantLevelSensor,
            rotationReversePressure: postCalculations.rotationReversePressure,
            rotationForwardPressure: postCalculations.rotationForwardPressure,
            holdBackPressure: postCalculations.holdBackPressure,
            pulldownPressure: postCalculations.pulldownPressure,
            waterPressure: postCalculations.waterPressure,
            mainPumpPressure: postCalculations.mainPumpPressure,
            winchDownPressure: postCalculations.winchDownPressure,
            winchUpPressure: postCalculations.winchUpPressure,
            driller: postCalculations.driller
        });

    },

    saveRig21: (uData) => {
        let drillerString = "";
        let driller = [uData[51],uData[52],uData[53],uData[54],uData[55],uData[56], uData[57],uData[58]]
    
        for (let i = 0; i < driller.length; i++) {
            drillerString.concat(String.fromCharCode(driller[i]));
        }
        postCalculations.driller = drillerString;

        let preCalcualtions = {
            
            // DATA CALCULATIONS
            engineRpm: uData[11] * 256 + uData[10]                  || invalidValue,
            oilPressure: uData[13] * 256 + uData[12]                || invalidValue,
            engineHours: uData[59] * 256 + uData[60]                || invalidValue,
            coolantTemp: uData[15] * 256 + uData[14]                || invalidValue,
            headPosition: uData[17] * 256 + uData[16]               || invalidValue,
            holeDepth: uData[19] * 256 + uData[18]                  || invalidValue,
            rotationRpm: uData[23] * 256 + uData[22]                || invalidValue,
            penetrationRate: uData[25] * 256 + uData[24]            || invalidValue,
            mastAngle: uData[27] * 256 + uData[26]                  || invalidValue,
            deckRoll: uData[29] * 256 + uData[28]                   || invalidValue,
            deckPitch: uData[31] * 256 + uData[30]                  || invalidValue,
            headRackBackProxyStatus: uData[32],
            footClampPressureSwitch: uData[33],
            coolantLevelSensor: uData[34],
            rotationReversePressure: uData[36] * 256 + uData[35]     || invalidValue,
            rotationForwardPressure: uData[38] * 256 + uData[37]     || invalidValue,
            holdBackPressure: uData[40] * 256 + uData[39]            || invalidValue,
            pulldownPressure: uData[42] * 256 + uData[41]            || invalidValue,
            waterPressure: uData[44] * 256 + uData[43]               || invalidValue,
            mainPumpPressure: uData[46] * 256 + uData[45]            || invalidValue,
            winchDownPressure: uData[48] * 256 + uData[47]           || invalidValue,
            winchUpPressure: uData[50] * 256 + uData[49]             || invalidValue,
            bitWeight: uData[64] * 265 + uData[63]                   || invalidValue,
            driller: "Not Signed in"
        }

        let postCalculations = {
            
            // DATA CALCULATIONS
            engineRpm: (uData[11] * 256 + uData[10] / 10)   || invalidValue,
            oilPressure: uData[13] * 256 + uData[12] / 10   || invalidValue,
            engineHours: uData[59] * 256 + uData[60]        || invalidValue,
            coolantTemp: uData[15] * 256 + uData[14] / 10   || invalidValue,
            headPosition: uData[17] * 256 + uData[16] /10   || invalidValue,
            holeDepth: uData[19] * 256 + uData[18] / 10     || invalidValue,
            rotationRpm: uData[23] * 256 + uData[22] / 10   || invalidValue,
            penetrationRate: uData[25] * 256 + uData[24]    || invalidValue,
            mastAngle: uData[27] * 256 + uData[26] / 100                || invalidValue,
            deckRoll: ((uData[29] * 256 + uData[28]) / 100)             || invalidValue,
            deckPitch: ((uData[31] * 256 + uData[30]) / 100)            || invalidValue,
            headRackBackProxyStatus: uData[32],
            footClampPressureSwitch: uData[33],
            coolantLevelSensor: uData[34],
            rotationReversePressure: uData[36] * 256 + uData[35] / 10           || invalidValue,
            rotationForwardPressure: uData[38] * 256 + uData[37] / 10           || invalidValue,
            holdBackPressure: uData[40] * 256 + uData[39] / 10                  || invalidValue,
            pulldownPressure: uData[42] * 256 + uData[41] / 10                  || invalidValue,
            waterPressure: uData[44] * 256 + uData[43] / 10                     || invalidValue,
            mainPumpPressure: uData[46] * 256 + uData[45] / 1000                || invalidValue,
            winchDownPressure: uData[48] * 256 + uData[47] / 10                 || invalidValue,
            winchUpPressure: uData[50] * 256 + uData[49] / 10                   || invalidValue,
            bitWeight: uData[64] * 265 + uData[63] / 10                         || invalidValue,
            driller: "Not Signed in"
        }
        console.log(postCalculations);
        

        // Error Checking
        console.log(postCalculations.driller);
        if (postCalculations.penetrationRate > 90) {
            console.log("Penetration RATE:", postCalculations.penetrationRate)
            postCalculations.penetrationRate = null
        };

        if (postCalculations.oilPressure > 90) {
            console.log("OIL PRESSURE:", postCalculations.oilPressure)
            postCalculations.oilPressure = null
        };
        console.log(postCalculations);
        MKY021.create({
            ts: postCalculations.ts,
            engineRPM: postCalculations.engineRPM,
            oilPressure: postCalculations.oilPressure,
            engineHours: postCalculations.engineHours,
            coolantTemp: postCalculations.coolantTemp,
            headPosition: postCalculations.headPosition,
            holeDepth: postCalculations.holeDepth,
            rotationRpm: postCalculations.rotationRpm,
            penetrationRate: postCalculations.penetrationRate,
            mastAngle: postCalculations.mastAngle,
            deckRoll: postCalculations.deckRoll,
            deckPitch: postCalculations.deckPitch,
            headRackBackProxyStatus: postCalculations.headRackBackProxyStatus,
            footClampPressureSwitch: postCalculations.footClampPressureSwitch,
            coolantLevelSensor: postCalculations.coolantLevelSensor,
            rotationReversePressure: postCalculations.rotationReversePressure,
            rotationForwardPressure: postCalculations.rotationForwardPressure,
            holdBackPressure: postCalculations.holdBackPressure,
            pulldownPressure: postCalculations.pulldownPressure,
            waterPressure: postCalculations.waterPressure,
            mainPumpPressure: postCalculations.mainPumpPressure,
            winchDownPressure: postCalculations.winchDownPressure,
            winchUpPressure: postCalculations.winchUpPressure,
            bitWeight: postCalculations.bitWeight,
            driller: postCalculations.driller || "IN"
        }).then(() => console.log("Log Created"));

        MKY021RAW.create({
            ts: preCalculations.ts,
            engineRPM: preCalculations.engineRPM,
            oilPressure: preCalculations.oilPressure,
            engineHours: preCalculations.engineHours,
            coolantTemp: preCalculations.coolantTemp,
            headPosition: preCalculations.headPosition,
            holeDepth: preCalculations.holeDepth,
            rotationRpm: preCalculations.rotationRpm,
            penetrationRate: preCalculations.penetrationRate,
            mastAngle: preCalculations.mastAngle,
            deckRoll: preCalculations.deckRoll,
            deckPitch: preCalculations.deckPitch,
            headRackBackProxyStatus: preCalculations.headRackBackProxyStatus,
            footClampPressureSwitch: preCalculations.footClampPressureSwitch,
            coolantLevelSensor: preCalculations.coolantLevelSensor,
            rotationReversePressure: preCalculations.rotationReversePressure,
            rotationForwardPressure: preCalculations.rotationForwardPressure,
            holdBackPressure: preCalculations.holdBackPressure,
            pulldownPressure: preCalculations.pulldownPressure,
            waterPressure: preCalculations.waterPressure,
            mainPumpPressure: preCalculations.mainPumpPressure,
            winchDownPressure: preCalculations.winchDownPressure,
            winchUpPressure: preCalculations.winchUpPressure,
            bitWeight: preCalculations.bitWeight,
            driller: preCalculations.driller
        }).then(() => console.log("Log Created"));

    }


}