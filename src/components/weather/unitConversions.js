export function farenheightToCelsiusAbsolute(farenheight) {
    return farenheightToCelsiusDelta(farenheight - 32);
}
export function celsiusToFarenheightAbsolute(celsius) {
    return celsiusToFarenheightDelta(celsius) + 32;
}
export function farenheightToCelsiusDelta(farenheight) {
    return farenheight * (5 / 9);
}
export function celsiusToFarenheightDelta(celsius) {
    return celsius * (9 / 5);
}
export function mphToMps(mph) {
    return mph / 2.237;
}
export function mpsToMph(mph) {
    return mph * 2.237;
}
export function OldFarenheightToCelsiusAbsolute(farenheight) {
    return (farenheight - 32) * (5 / 9);
    //return (apparentTemperatureC * (9 / 5)) + 32
}
export function OldCelsiusToFarenheightAbsolute(celsius) {
    return (celsius * (9 / 5)) + 32;
}
