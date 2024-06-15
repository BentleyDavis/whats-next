export interface NoaaHourly {
    "@context": Array<ContextClass | string>;
    type: string;
    geometry: Geometry;
    properties: Properties;
}

export interface ContextClass {
    "@version": string;
    wx: string;
    geo: string;
    unit: string;
    "@vocab": string;
}

export interface Geometry {
    type: string;
    coordinates: Array<Array<number[]>>;
}

export interface Properties {
    updated: Date;
    units: string;
    forecastGenerator: string;
    generatedAt: Date;
    updateTime: Date;
    validTimes: string;
    elevation: UnitData;
    periods: Period[];
}

export interface UnitData {
    unitCode: UnitCode;
    value: number;
}

export type UnitCode = "wmoUnit:m" | "wmoUnit:degC" | "wmoUnit:percent";

export interface Period {
    number: number;
    // name: string; // usually blank
    startTime: Date;
    endTime: Date;
    isDaytime: boolean;
    temperature: farenheight;
    // temperatureUnit: TemperatureUnit; // always Farenheight
    // temperatureTrend: null; // usually blank
    probabilityOfPrecipitation: UnitData;
    dewpoint: UnitData;
    relativeHumidity: UnitData;
    windSpeed: string;
    windDirection: WindDirection;
    // icon: string; // deprecated
    shortForecast: string;
    // detailedForecast: string; // usually blank
}

export type TemperatureUnit = "F" | "C";

export type WindDirection = "S" | "SSE" | "NNW" | "ENE" | "SE" | "ESE" | "E" | "NE" | "NNE" | "N";

interface Flavoring<FlavorT> {
    _type?: FlavorT;
}
export type Flavor<T, FlavorT> = T & Flavoring<FlavorT>;

export type celsius = Flavor<number, "celsius">;

export type farenheight = Flavor<number, "farenheight">;

export type milesPerHour = number;
export type metersPerSecond = number;

