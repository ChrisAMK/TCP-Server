import MKY08 from "../models/mky08.js";
import MKY08RAW from "../models/mky08raw.js";

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
        hour: hour,
        min: min,
        sec: sec
    };
    return time;
  }


export default {
    saveRig8: (uData) => {
        let rawCalculations = {
            
           // DATA CALCULATIONS
           engineRpm: uData[11] * 256 + uData[10]                                              || invalidValue,
           oilPressure: uData[13] * 256 + uData[12]                                            || invalidValue,
           engineHours: (((uData[17] << 8 | uData[16]) << 8 | uData[15]) << 8) + uData[14]     || invalidValue,
           coolantTemp: uData[19] * 256 + uData[18]                                            || invalidValue,
           headPosition: uData[21] * 256 + uData[20]                                           || invalidValue,
           holeDepth: (((uData[25] << 8 | uData[24]) << 8 | uData[23]) << 8) + uData[22]       || invalidValue,
           rotationRpm: uData[27] * 256 + uData[26]                                            || invalidValue,
           penetrationRate: uData[29] * 256 + uData[28]                                        || invalidValue,
           bitWeight: uData[31] * 265 + uData[30]                                              || invalidValue,
           outsideTemp: uData[33] * 256 + uData[32]                                            || invalidValue,
           mastAngle: uData[35] * 256 + uData[34]                                              || invalidValue,
           deckRoll: uData[37] * 256 + uData[36]                                               || invalidValue,
           deckPitch: uData[39] * 256 + uData[38]                                              || invalidValue,
           rodLoaderPosition: uData[40],
           headRefPosition: uData[41],
           rotationReversePressure: uData[43] * 256 + uData[42]                            || invalidValue,
           rotationForwardPressure: uData[45] * 256 + uData[44]                            || invalidValue,
           holdBackPressure: uData[47] * 256 + uData[46]                                   || invalidValue,
           pulldownPressure: uData[49] * 256 + uData[48]                                   || invalidValue,
           waterPressure: uData[51] * 256 + uData[50]                                      || invalidValue,
           mainPumpPressure: uData[53] * 256 + uData[52]                                   || invalidValue,
           driller: "Not Signed in"  || invalidValue,
           compressorSumpPressure: uData[63] * 256 + uData[62]                             || invalidValue,
           compressorDischargeTemperature: uData[65] * 256 + uData[64]                     || invalidValue,
           compressorLinePressure: uData[67] * 256 + uData[66]                             || invalidValue,
           compressorInterstagePressure: uData[69] * 256 + uData[68]                       || invalidValue,
           DownholeAirPressure: uData[70] * 256 + uData[71]                                || invalidValue,
           engineOilTemp: uData[72] * 256 + uData[73]                                      || invalidValue,
           timestamp: parseInt((((uData[75] << 8) + uData[74]).toString() + ((((uData[79] << 8 | uData[78]) << 8 | uData[77]) << 8) + uData[76]).toString()))   || invalidValue,
        }
    
        let preCalculations = {
            
            // DATA CALCULATIONS
            engineRpm: uData[11] * 256 + uData[10]                                              || invalidValue,
            oilPressure: uData[13] * 256 + uData[12]                                            || invalidValue,
            engineHours: (((uData[17] << 8 | uData[16]) << 8 | uData[15]) << 8) + uData[14]     || invalidValue,
            coolantTemp: uData[19] * 256 + uData[18]                                            || invalidValue,
            headPosition: uData[21] * 256 + uData[20]                                           || invalidValue,
            holeDepth: (((uData[25] << 8 | uData[24]) << 8 | uData[23]) << 8) + uData[22]       || invalidValue,
            rotationRpm: uData[27] * 256 + uData[26]                                            || invalidValue,
            penetrationRate: uData[29] * 256 + uData[28]                                        || invalidValue,
            bitWeight: uData[31] * 265 + uData[30]                                              || invalidValue,
            outsideTemp: uData[33] * 256 + uData[32]                                            || invalidValue,
            mastAngle: uData[35] * 256 + uData[34]                                              || invalidValue,
            deckRoll: uData[37] * 256 + uData[36]                                               || invalidValue,
            deckPitch: uData[39] * 256 + uData[38]                                              || invalidValue,
            rodLoaderPosition: uData[40],
            headRefPosition: uData[41],
            rotationReversePressure: uData[43] * 256 + uData[42]                            || invalidValue,
            rotationForwardPressure: uData[45] * 256 + uData[44]                            || invalidValue,
            holdBackPressure: uData[47] * 256 + uData[46]                                   || invalidValue,
            pulldownPressure: uData[49] * 256 + uData[48]                                   || invalidValue,
            waterPressure: uData[51] * 256 + uData[50]                                      || invalidValue,
            mainPumpPressure: uData[53] * 256 + uData[52]                                   || invalidValue,
            driller: "Not Signed in"  || invalidValue,
            compressorSumpPressure: uData[63] * 256 + uData[62]                             || invalidValue,
            compressorDischargeTemperature: uData[65] * 256 + uData[64]                     || invalidValue,
            compressorLinePressure: uData[67] * 256 + uData[66]                             || invalidValue,
            compressorInterstagePressure: uData[69] * 256 + uData[68]                       || invalidValue,
            DownholeAirPressure: uData[70] * 256 + uData[71]                                || invalidValue,
            engineOilTemp: uData[72] * 256 + uData[73]                                      || invalidValue,

        }
    
        let driller1 = String.fromCharCode(uData[54]);
        let driller2 = String.fromCharCode(uData[55]);
        let driller3 = String.fromCharCode(uData[56]);
        let driller4 = String.fromCharCode(uData[57]);
        let driller5 = String.fromCharCode(uData[58]);
        let driller6 = String.fromCharCode(uData[59]);
        let driller7 = String.fromCharCode(uData[60]);
        let driller8 = String.fromCharCode(uData[61]);

        preCalculations.driller = `${driller1 + driller2 + driller3 + driller4 + driller5 + driller6 + driller7 + driller8}`;
        // Error Checking

        if (preCalculations.engineRpm > 50000) {
            console.log("Engine RPM: ", preCalculations.engineRpm > 50000);
            preCalculations.engineRpm = null;
        };
    
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
            console.log("Holdback Pressure:", preCalculations.holdBackPressure)
            preCalculations.holdBackPressure = null
        };
    
        if (preCalculations.pulldownPressure > 50000) {
            console.log("Pulldown Pressure:", preCalculations.pulldownPressure)
            preCalculations.pulldownPressure = null;
        };
    
        if (preCalculations.waterPressure > 50000) {
            console.log("Water Pressure:", preCalculations.waterPressure)
            preCalculations.waterPressure = null;
        };
    
        if (preCalculations.mainPumpPressure > 50000) {
            console.log("Main Pump Pressure:", preCalculations.mainPumpPressure)
            preCalculations.mainPumpPressure = null
        };
    
        if (preCalculations.compressorDischargeTemperature > 50000) {
            console.log("Compessor Discharge Temperature:", preCalculations.compressorDischargeTemperature)
            preCalculations.compressorDischargeTemperature = null
        };
    
        if (preCalculations.compressorInterstagePressure > 50000) {
            console.log("Compressor Interstage Pressure:", preCalculations.compressorInterstagePressure)
            preCalculations.compressorInterstagePressure = null
        };

        if (preCalculations.compressorLinePressure > 50000) {
            console.log("Compressor Line Pressure:", preCalculations.compressorLinePressure)
            preCalculations.compressorLinePressure = null
        };

        if (preCalculations.compressorSumpPressure > 50000) {
            console.log("Compressor Sump Pressure:", preCalculations.compressorSumpPressure)
            preCalculations.compressorSumpPressure = null
        };

        if (preCalculations.outsideTemp > 50000) {
            console.log("Outside Temperature:", preCalculations.outsideTemp)
            preCalculations.outsideTemp = null
        };

        if (preCalculations.headPosition > 50000) {
            console.log("Head Position:", preCalculations.headPosition)
            preCalculations.headPosition = null
        };
    
        if (preCalculations.bitWeight > 50000) {
            console.log("Bit Weight:", preCalculations.bitWeight)
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
            bitWeight: preCalculations.bitWeight / 10                   || invalidValue,
            outsideTemp: preCalculations.outsideTemp                    || invalidValue,
            mastAngle: preCalculations.mastAngle / 100                  || invalidValue,
            deckRoll: ((preCalculations.deckRoll) / 100)                || invalidValue,
            deckPitch: ((preCalculations.deckPitch) / 100)              || invalidValue,
            rodLoaderPosition: preCalculations.rodLoaderPosition        || invalidValue,
            headRefPosition: preCalculations.headRefPosition                                  || invalidValue,
            rotationReversePressure: preCalculations.rotationReversePressure / 10             || invalidValue,
            rotationForwardPressure: preCalculations.rotationForwardPressure / 10             || invalidValue,
            holdBackPressure: (preCalculations.holdBackPressure) / 100                        || invalidValue,
            pulldownPressure: (preCalculations.pulldownPressure) / 100                        || invalidValue,
            waterPressure: preCalculations.waterPressure / 10                                 || invalidValue,
            mainPumpPressure: (preCalculations.mainPumpPressure) / 100                        || invalidValue,
            driller: preCalculations.driller                                                  || invalidValue,
            compressorDischargeTemperature: preCalculations.compressorDischargeTemperature    || invalidValue,
            compressorLinePressure: preCalculations.compressorLinePressure / 10               || invalidValue,
            compressorInterstagePressure: preCalculations.compressorInterstagePressure / 10   || invalidValue,
            DownholeAirPressure: preCalculations.DownholeAirPressure / 10                     || invalidValue,
            engineOilTemp: preCalculations.engineOilTemp                                      || invalidValue,
        }
        
        MKY08.create({
            time: postCalculations.timestamp,
            engineRPM: postCalculations.engineRPM,
            oilPressure: postCalculations.oilPressure,
            engineHours: postCalculations.engineHours,
            coolantTemp: postCalculations.coolantTemp,
            headPosition: postCalculations.headPosition,
            holeDepth: postCalculations.holeDepth,
            rotationRpm: postCalculations.rotationRpm,
            penetrationRate: postCalculations.penetrationRate,
            bitWeight: postCalculations.bitWeight,
            outsideTemp: postCalculations.outsideTemp,
            mastAngle: postCalculations.mastAngle,
            deckRoll: postCalculations.deckRoll,
            deckPitch: postCalculations.deckPitch,
            rodLoaderPosition: postCalculations.rodLoaderPosition,
            headRefPosition: postCalculations.headRefPosition,
            rotationReversePressure: postCalculations.rotationReversePressure,
            rotationForwardPressure: postCalculations.rotationForwardPressure,
            holdBackPressure: postCalculations.holdBackPressure,
            pulldownPressure: postCalculations.pulldownPressure,
            waterPressure: postCalculations.waterPressure,
            mainPumpPressure: postCalculations.mainPumpPressure,
            driller: postCalculations.driller,
            compressorDischargeTemperature: postCalculations.compressorDischargeTemperature,
            compressorLinePressure: postCalculations.compressorLinePressure,
            compressorInterstagePressure: postCalculations.compressorInterstagePressure,
            DownholeAirPressure: postCalculations.DownholeAirPressure,
            engineOilTemp: postCalculations.engineOilTemp,
            year: timeConverter(rawCalculations.timestamp).year,
            month: timeConverter(rawCalculations.timestamp).month,
            date: timeConverter(rawCalculations.timestamp).date,
            hour: timeConverter(rawCalculations.timestamp).hour,
            minute: timeConverter(rawCalculations.timestamp).min,
            second: timeConverter(rawCalculations.timestamp).sec
        }).then(() => console.log("Log Created"));
    
        MKY08RAW.create({
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
            bitWeight: rawCalculations.bitWeight,
            driller: postCalculations.driller,
            compressorDischargeTemperature: rawCalculations.compressorDischargeTemperature,
            compressorLinePressure: rawCalculations.compressorLinePressure,
            compressorInterstagePressure: rawCalculations.compressorInterstagePressure,
            DownholeAirPressure: rawCalculations.DownholeAirPressure,
            engineOilTemp: rawCalculations.engineOilTemp,
            year: timeConverter(rawCalculations.timestamp).year,
            month: timeConverter(rawCalculations.timestamp).month,
            date: timeConverter(rawCalculations.timestamp).date,
            hour: timeConverter(rawCalculations.timestamp).hour,
            minute: timeConverter(rawCalculations.timestamp).min,
            second: timeConverter(rawCalculations.timestamp).sec
        }).then(() => console.log("Log Created"));
    
    }
}

