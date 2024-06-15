import { farenheight, metersPerSecond, milesPerHour } from "./types/noaaHourly";

export function farenheightToCelsiusAbsolute(farenheight: number) {
    return farenheightToCelsiusDelta(farenheight - 32)
}

export function celsiusToFarenheightAbsolute(celsius: number) {
    return celsiusToFarenheightDelta(celsius) + 32
}

export function farenheightToCelsiusDelta(farenheight: number) {
    return farenheight * (5 / 9)
}

export function celsiusToFarenheightDelta(celsius: number): farenheight {
    return celsius * (9 / 5)
}

export function mphToMps(mph: milesPerHour): metersPerSecond {
    return mph / 2.237;
}

export function mpsToMph(mph: milesPerHour): metersPerSecond {
    return mph * 2.237;
}

export function OldFarenheightToCelsiusAbsolute(farenheight: number) {
    return (farenheight - 32) * (5 / 9)
    //return (apparentTemperatureC * (9 / 5)) + 32
}

export function OldCelsiusToFarenheightAbsolute(celsius: number) {
    return (celsius * (9 / 5)) + 32
}