import { appConfig } from "../appConfig";
export function getDateId(date = new Date(), _config = appConfig) {
    date = addHours(-_config.hourToStartNewDay, date);
    return date.getFullYear().toString() +
        (date.getMonth() + 1).toString().padStart(2, "0") +
        date.getDate().toString().padStart(2, "0");
}
export function addHours(h, date = new Date()) {
    return new Date(date.getTime() + (h * 60 * 60 * 1000));
}
export function addDays(h, date = new Date()) {
    return new Date(date.getTime() + (h * 24 * 60 * 60 * 1000));
}
