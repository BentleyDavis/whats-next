export function roundNumberTo(original, digits = 2) {
    var isNegative = original < 0;
    var multiplier = Math.pow(10, digits);
    let rounded = Number((Math.abs(original) * multiplier).toFixed(11));
    rounded = Number((Math.round(rounded) / multiplier).toFixed(digits));
    if (isNegative) {
        rounded = (rounded * -1);
    }
    return rounded;
}
// a function to check how many digits are after the decimal point
// https://stackoverflow.com/a/28203456/10333
// export function roundTo(original: number | Object, digits: number = 2) {
//     if (isObject(original)) {
//         let rounded: any = {};
//         for (let key in original) {
//             const test = original[key];
//             if (isNumber(test)) {
//                 const textNumber = test.toString();
//                 if (textNumber.split(".")[1]?.length > digits) {
//                     rounded[key] = roundTo(test, digits);
//                 } else {
//                     rounded[key] = test;
//                 }
//             } else if (isObject(test)) {
//                 rounded[key] = roundTo(test, digits);
//             } else {
//                 rounded[key] = test;
//             }
//         }
//         return rounded;
//     } else if (isNumber(original)) {
//         return roundNumberTo(original, digits);
//     }
//     return original;
// }
// function isObject(value: number | Object): value is { [id: string]: any } {
//     return typeof value === "object"
// }
// // typescript isNumber function
// function isNumber(value: number | Object): value is number {
//     return typeof value === "number"
// }
