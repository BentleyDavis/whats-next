import { roundNumberTo } from "./roundTo";
import { celsiusToFarenheightAbsolute, celsiusToFarenheightDelta, farenheightToCelsiusAbsolute, mphToMps } from "./unitConversions";
const maxNetRadiationDefault = 120;
// create a type that is a string of an id number but prevent strings from being set to it
// https://stackoverflow.com/a/50375286/25507
export function apparentTempSI(temperatureC, humidity, windspeed, fractionSun, maxNetRadiation = maxNetRadiationDefault) {
    // https://github.com/oyve/weather-formulas/blob/160cc4a80deeda394ecc0f684c7ecc06b4d5044c/temperature.js#L101
    // https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature
    const e = (humidity / 100) * 6.015 * Math.exp((17.27 * temperatureC) / (237.7 + temperatureC));
    const radiation = fractionSun * maxNetRadiation; // Net radiation absorbed per unit area of body surface (W/m2) for a person whihc is a fraction of a meter. On a sunny day this is about 1000 W/m2 for a whole meter squared
    const humidityAdjustment = (0.348 * e) - 4;
    const windAdjustment = -(0.7 * windspeed);
    const radiationAdjustment = 0.7 * (radiation / (0 + 10)) - .25;
    const radiationWindAdjustment = (0.7 * (radiation / (windspeed + 10)) - .25) - radiationAdjustment;
    const apparentTempC = temperatureC
        + humidityAdjustment
        + windAdjustment
        + radiationAdjustment
        + radiationWindAdjustment;
    return {
        apparentTempC: roundNumberTo(apparentTempC),
        humidityAdjustment: roundNumberTo(humidityAdjustment),
        windAdjustment: roundNumberTo(windAdjustment),
        radiationAdjustment: roundNumberTo(radiationAdjustment),
        radiationWindAdjustment: roundNumberTo(radiationWindAdjustment),
    };
}
export function apparentTempUs(temperatureF, humidity, windspeedMph, fractionSun, maxNetRadiation = maxNetRadiationDefault) {
    const atc = apparentTempSI(farenheightToCelsiusAbsolute(temperatureF), humidity, mphToMps(windspeedMph), fractionSun, maxNetRadiation);
    const result = {
        apparentTemp: roundNumberTo(celsiusToFarenheightAbsolute(atc.apparentTempC)),
        humidityAdjustment: roundNumberTo(celsiusToFarenheightDelta(atc.humidityAdjustment)),
        windAdjustment: roundNumberTo(celsiusToFarenheightDelta(atc.windAdjustment)),
        radiationAdjustment: roundNumberTo(celsiusToFarenheightDelta(atc.radiationAdjustment)),
        radiationWindAdjustment: roundNumberTo(celsiusToFarenheightDelta(atc.radiationWindAdjustment)),
    };
    return result;
}
export function apparentTempOrig(temperature, humidity, windspeed, fractionSun, maxNetRadiation = maxNetRadiationDefault) {
    // https://github.com/oyve/weather-formulas/blob/160cc4a80deeda394ecc0f684c7ecc06b4d5044c/temperature.js#L101
    // https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature
    const e = (humidity / 100) * 6.015 * Math.exp((17.27 * temperature) / (237.7 + temperature));
    const radiation = fractionSun * maxNetRadiation; // Net radiation absorbed per unit area of body surface (W/m2) for a person which is a fraction of a meter. On a sunny day this is about 1000 W/m2 for a whole meter squared
    const apparentTemp = temperature + (0.348 * e) - (0.7 * windspeed) + (0.7 * (radiation / (windspeed + 10))) - 4.25;
    // let AT = Ta + (0.33 * e) - (0.7 * v) - 4.00; // old formula without solar radiation
    return roundNumberTo(apparentTemp);
}
