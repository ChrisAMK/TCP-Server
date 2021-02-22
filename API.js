import MKY021 from "./models/mky021.js";
import MKY021RAW from './models/mky021raw.js';
import MKY08 from "./models/mky08.js";
import MKY08RAW from "./models/mky08raw.js";

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
            winchUpPressure: uData[50] * 256 + uData[49] / 10         || invalidValue
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


        let rawCalculations = {
            
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

        let preCalculations = {
            
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

        let drillerString = "";
        let driller = [uData[51],uData[52],uData[53],uData[54],uData[55],uData[56], uData[57],uData[58]]
    
        for (let i = 0; i < driller.length; i++) {
            drillerString.concat(String.fromCharCode(driller[i]));
        }
        postCalculations.driller = drillerString;

        // Error Checking

        if (preCalculations.oilPressure > 50000) {
            console.log("Engine Oil: ", postCalculations.oilPressure > 50000);
            postCalculations.oilPressure = null;
        };

        if (preCalculations.penetrationRate > 50000) {
            console.log("Penetration Rate: ", postCalculations.penetrationRate);
            postCalculations.penetrationRate = null;
        };

        if (preCalculations.rotationForwardPressure > 50000) {
            console.log("Rotation Forward Pressure: ", postCalculations.rotationForwardPressure);
            postCalculations.rotationForwardPressure = null;
        }

        if (preCalculations.rotationReversePressure > 50000) {
            console.log("Rotation Reverse Pressure: ", postCalculations.rotationReversePressure)
            postCalculations.rotationReversePressure = null
        };

        if (preCalculations.rotationRpm > 50000) {
            console.log("Rotation RPM: ", postCalculations.rotationRpm);
            postCalculations.rotationRpm = null;
        }

        if (preCalculations.holdBackPressure > 50000) {
            console.log("OIL PRESSURE:", postCalculations.holdBackPressure)
            postCalculations.holdBackPressure = null
        };

        if (preCalculations.pulldownPressure > 50000) {
            console.log("OIL PRESSURE:", postCalculations.pulldownPressure)
            postCalculations.pulldownPressure = null;
        };

        if (preCalculations.waterPressure > 50000) {
            console.log("OIL PRESSURE:", postCalculations.waterPressure)
            postCalculations.waterPressure = null;
        };

        if (preCalculations.mainPumpPressure > 50000) {
            console.log("OIL PRESSURE:", postCalculations.mainPumpPressure)
            postCalculations.mainPumpPressure = null
        };

        if (preCalculations.winchUpPressure > 50000) {
            console.log("OIL PRESSURE:", postCalculations.winchUpPressure)
            postCalculations.winchUpPressure = null
        };

        if (preCalculations.winchDownPressure > 50000) {
            console.log("OIL PRESSURE:", postCalculations.winchDownPressure)
            postCalculations.winchDownPressure = null
        };

        if (preCalculations.bitWeight > 50000) {
            console.log("OIL PRESSURE:", postCalculations.bitWeight)
            postCalculations.bitWeight = null
        };

        let postCalculations = {
            
            // DATA CALCULATIONS
            engineRpm: (preCalculations.engineRpm / 10)                 || invalidValue,
            oilPressure: preCalculations.oilPressure / 10               || invalidValue,
            engineHours: preCalculations.engineHours                    || invalidValue,
            coolantTemp: (preCalculations.coolantTemp) / 10             || invalidValue,
            headPosition: preCalculations.headPosition /10              || invalidValue,
            holeDepth: preCalculations.holeDepth / 10                   || invalidValue,
            rotationRpm: preCalculations.rotationRpm / 10               || invalidValue,
            penetrationRate: preCalculations.penetrationRate / 10       || invalidValue,
            mastAngle: preCalculations.mastAngle / 100                  || invalidValue,
            deckRoll: ((preCalculations.deckRoll) / 100)                || invalidValue,
            deckPitch: ((preCalculations.deckPitch) / 100)              || invalidValue,
            headRackBackProxyStatus: uData[32],
            footClampPressureSwitch: uData[33],
            coolantLevelSensor: uData[34],
            rotationReversePressure: preCalculations.rotationReversePressure / 10             || invalidValue,
            rotationForwardPressure: preCalculations.rotationForwardPressure / 10             || invalidValue,
            holdBackPressure: (preCalculations.holdBackPressure) / 100                        || invalidValue,
            pulldownPressure: (preCalculations.pulldownPressure) / 100                        || invalidValue,
            waterPressure: preCalculations.waterPressure / 10                                 || invalidValue,
            mainPumpPressure: (preCalculations.mainPumpPressure) / 100                        || invalidValue,
            winchDownPressure: preCalculations.winchDownPressure / 10                         || invalidValue,
            winchUpPressure: preCalculations.winchUpPressure / 10                             || invalidValue,
            bitWeight: preCalculations.bitWeight / 10                                         || invalidValue,
            driller: "Not Signed in"
        }
        
       
        console.log(postCalculations)
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
            ts: rawCalculations.ts,
            engineRPM: rawCalculations.engineRPM,
            oilPressure: rawCalculations.oilPressure,
            engineHours: rawCalculations.engineHours,
            coolantTemp: rawCalculations.coolantTemp,
            headPosition: rawCalculations.headPosition,
            holeDepth: rawCalculations.holeDepth,
            rotationRpm: rawCalculations.rotationRpm,
            penetrationRate: rawCalculations.penetrationRate,
            mastAngle: rawCalculations.mastAngle,
            deckRoll: rawCalculations.deckRoll,
            deckPitch: rawCalculations.deckPitch,
            headRackBackProxyStatus: rawCalculations.headRackBackProxyStatus,
            footClampPressureSwitch: rawCalculations.footClampPressureSwitch,
            coolantLevelSensor: rawCalculations.coolantLevelSensor,
            rotationReversePressure: rawCalculations.rotationReversePressure,
            rotationForwardPressure: rawCalculations.rotationForwardPressure,
            holdBackPressure: rawCalculations.holdBackPressure,
            pulldownPressure: rawCalculations.pulldownPressure,
            waterPressure: rawCalculations.waterPressure,
            mainPumpPressure: rawCalculations.mainPumpPressure,
            winchDownPressure: rawCalculations.winchDownPressure,
            winchUpPressure: rawCalculations.winchUpPressure,
            bitWeight: postCalculations.bitWeight,
            driller: postCalculations.driller || null
        }).then(() => console.log("Log Created"));

    }


}