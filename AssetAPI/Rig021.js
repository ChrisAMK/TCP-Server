import MKY021 from "./models/mky021.js";
import MKY021RAW from "./models/mky21raw.js";

const invalidValue = null;

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = {
        date: date,
        month: month,
        year: year,
        hour: (hour - 8),
        min: min,
        sec: sec
    };
    return time;
}

export default {
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
            engineHours: uData[60] * 256 + uData[59]                || invalidValue,
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
    
        
        let driller1 = String.fromCharCode(uData[51]);
        let driller2 = String.fromCharCode(uData[52]);
        let driller3 = String.fromCharCode(uData[53]);
        let driller4 = String.fromCharCode(uData[54]);
        let driller5 = String.fromCharCode(uData[55]);
        let driller6 = String.fromCharCode(uData[56]);
        let driller7 = String.fromCharCode(uData[57]);
        let driller8 = String.fromCharCode(uData[58]);
        
        let firstFive = (uData[62] * 256 + uData[61]).toString();
        let secondFive = (uData[66] * 256 + uData[65]).toString();
        let thridFive = (uData[68] * 256 + uData[67]).toString();
        let forthFive = (uData[70] * 256 + uData[69]).toString();
    
        preCalculations.timestamp = firstFive + secondFive + thridFive + forthFive;
        preCalculations.driller = `${driller1 + driller2 + driller3 + driller4 + driller5 + driller6 + driller7 + driller8}`;
        // Error Checking
    
        if (preCalculations.oilPressure > 50000) {
            console.log("Engine Oil: ", preCalculations.oilPressure > 50000);
            preCalculations.oilPressure = null;
        };
    
        if (preCalculations.penetrationRate > 50000) {
            console.log("Penetration Rate: ", preCalculations.penetrationRate);
            preCalculations.penetrationRate = null;
        };
    
        if (preCalculations.rotationForwardPressure > 50000) {
            console.log("Rotation Forward Pressure: ", preCalculations.rotationForwardPressure);
            preCalculations.rotationForwardPressure = null;
        }
    
        if (preCalculations.rotationReversePressure > 50000) {
            console.log("Rotation Reverse Pressure: ", preCalculations.rotationReversePressure)
            preCalculations.rotationReversePressure = null
        };
    
        if (preCalculations.rotationRpm > 50000) {
            console.log("Rotation RPM: ", preCalculations.rotationRpm);
            preCalculations.rotationRpm = null;
        }
    
        if (preCalculations.holdBackPressure > 50000) {
            console.log("OIL PRESSURE:", preCalculations.holdBackPressure)
            preCalculations.holdBackPressure = null
        };
    
        if (preCalculations.pulldownPressure > 50000) {
            console.log("OIL PRESSURE:", preCalculations.pulldownPressure)
            preCalculations.pulldownPressure = null;
        };
    
        if (preCalculations.waterPressure > 50000) {
            console.log("OIL PRESSURE:", preCalculations.waterPressure)
            preCalculations.waterPressure = null;
        };
    
        if (preCalculations.mainPumpPressure > 50000) {
            console.log("OIL PRESSURE:", preCalculations.mainPumpPressure)
            preCalculations.mainPumpPressure = null
        };
    
        if (preCalculations.winchUpPressure > 50000) {
            console.log("OIL PRESSURE:", preCalculations.winchUpPressure)
            preCalculations.winchUpPressure = null
        };
    
        if (preCalculations.winchDownPressure > 50000) {
            console.log("OIL PRESSURE:", preCalculations.winchDownPressure)
            preCalculations.winchDownPressure = null
        };
    
        if (preCalculations.bitWeight > 50000) {
            console.log("OIL PRESSURE:", preCalculations.bitWeight)
            preCalculations.bitWeight = null
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
            driller: preCalculations.driller,
            timestamp: preCalculations.timestamp
        }
        console.log(postCalculations)
        // TIMESTAMPS
        
    
        MKY021.create({
            ts: postCalculations.timestamp,
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
            driller: postCalculations.driller || null
        }).then(() => console.log("Log Created"));
    
        MKY021RAW.create({
            ts: rawCalculations.timestamp,
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

