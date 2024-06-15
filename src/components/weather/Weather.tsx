// import { Button } from 'react-bootstrap';
import './weather.css';
import { useEffect, useState } from "react";
import React from 'react';
import { apparentTempUs } from './apparentTemp';

const defaultShow = true//(new URLSearchParams(window.location.search)).get("weather") !== null ? true : false;

const weatherHeader = <tr>
    <th>Hour</th>
    <th>
        Apparent<br />Temp
        <div className='isAdmin' style={{ fontSize: ".5em", opacity: .75 }}>💧, 💨, ☀️-💨 </div>

    </th>
    <th>Air<br />Temp</th>
    <th colSpan={2}>Wind</th>
    <th>Humidity</th>
    <th>Precip</th>
    {/* <th>Sun</th> */}
    <th className='when-wide'>Description</th>
</tr>

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
})

function textToEmoji(shortForecast: string, isDaytime: boolean) {
    let emojis = ""
    if (shortForecast.includes("Mostly Sunny")) {
        emojis += "🌤️" //  Sun Behind Small Cloud
    } else if (shortForecast.includes("Partly Sunny")) {
        emojis += "⛅"; //  Sun Behind Cloud
    } else if (shortForecast.includes("Sunny")) {
        emojis += "☀️"; //  Sun
    }

    if (shortForecast.includes("Mostly Cloudy")) {
        emojis += "🌥️"; // Sun Behind Large Cloud
    } else if (shortForecast.includes("Cloudy")) {
        // Partly Cloudy is only used for night and there is no moon with large cloud so we are just using cloud
        emojis += "☁️"; // Cloud
    } else if (shortForecast.includes("Cloudy")) {
        emojis += "☁️"; // Cloud
    }

    if (shortForecast.includes("Showers")) {
        if (shortForecast.includes("Slight")) {
            emojis += "🌦️";
        } else {
            emojis += "🌧️";
        }
    }

    if (shortForecast.includes("Thunder")) {
        emojis += "⚡"
    }

    if (shortForecast.includes("Snow")) {
        emojis += "❄️"
    }

    if (shortForecast.includes("Fog")) {
        emojis += "🌫️"
    }

    // https://emojiterra.com/sky-weather/
    // https://emojipedia.org/search/?q=cloud
    // https://emojipedia.org/search/?q=sun
    // https://emojipedia.org/search/?q=lightning

    return emojis;
}

// function to calculate sunset time
// https://www.esrl.noaa.gov/gmd/grad/solcalc/sunrise.html

// sort by length so that "Mostly Cloudy" is checked before "Cloudy"
const SkyConditionToFractionSun: Array<[string, number]> = [
    // https://www.weather.gov/bgm/forecast_terms
    // Sky Condition	            Opaque Cloud    Highest Sun
    //                              Coverage        Fraction
    // Clear/Sunny	                1/8 or less     1
    ["Sunny", 1],
    // Mostly Clear/Mostly Sunny	1/8 to 3/8      7/8
    ["Mostly Sunny", 7 / 8],
    // Partly Cloudy/Partly Sunny	3/8 to 5/8      5/8
    ["Partly Sunny", 5 / 8],
    // Mostly Cloudy	            5/8 to 7/8      3/8
    ["Mostly Cloudy", 3 / 8],
    // Cloudy	                    7/8 to 8/8      1/8
    // Cloudy is the default
]

// sorth the sky conditions by length of the string so overlapping words are checked in the correct order
SkyConditionToFractionSun.sort((a: [string, number], b: [string, number]) => {
    return b[0].length - a[0].length;
});


export function calculateSunPct(shortForecast: string, isDaytime: boolean) {

    if (!isDaytime) {  // If nighttime set to zero
        return 0;
    }

    for (const [skyCondition, fractionSun] of SkyConditionToFractionSun) {
        if (shortForecast.includes(skyCondition)) {
            return fractionSun;
        }
    }

    return 1 / 8; // cloudy or other
}



async function getWeather() {

    // abadon if this was checked in th previous hour
    const lastChecked = localStorage.getItem("weatherLastChecked")
    let originlHourlyData;
    if (lastChecked) {
        const lastCheckedDate = new Date(lastChecked)
        const now = new Date()
        if (now.getTime() - lastCheckedDate.getTime() < 1000 * 60 * 60) {
            originlHourlyData = JSON.parse(localStorage.getItem("weather") || "[]")
        }
    }
    if (!originlHourlyData) {
        const response = await fetch("https://api.weather.gov/gridpoints/FWD/86,114/forecast/hourly");
        if (response.status === 200) {
            originlHourlyData = await response.json();
            localStorage.setItem("weatherLastChecked", new Date().toISOString())
            localStorage.setItem("weather", JSON.stringify(originlHourlyData))
        }
    }

    if (originlHourlyData) {
        const hourlyData: any = [];

        let lastDate = new Date().getDay()
        for (const hourData of originlHourlyData.properties.periods) {
            // const windMilesPerHour = parseInt(hourData.windSpeed.replaceAll(" mph", ""));

            const when = new Date(hourData.startTime)
            const hoursFromNow = (when.getTime() - new Date().getTime()) / (1000 * 60 * 60);
            if (hoursFromNow > 23) break

            const hour = when.getHours();
            if (hour >= 5 && hour <= (10 + 12)) { //between 5 AM and 10 PM
                if (lastDate !== when.getDay()) {
                    hourData.startTomorrow = true;
                    lastDate = when.getDay()
                }
                hourData.windMPH = parseInt(hourData.windSpeed.replaceAll(" mph", ""))
                hourData.sunPct = calculateSunPct(hourData.shortForecast, hourData.isDaytime)
                hourData.feels = apparentTempUs(
                    hourData.temperature,
                    hourData.relativeHumidity.value,
                    hourData.windMPH,
                    hourData.sunPct
                ).apparentTemp.toFixed(0)
                hourData.apparentData = apparentTempUs(
                    hourData.temperature,
                    hourData.relativeHumidity.value,
                    hourData.windMPH,
                    hourData.sunPct
                )
                // hourData.feels = celsiusToFarenheight(
                //     apparentTemperature(
                //         farenheightToCelsius(hourData.temperature),
                //         hourData.relativeHumidity.value,
                //         hourData.windMPH / 2.237, // Convert to meters per second
                //         hourData.sunPct
                //     )
                // ).toFixed(0);
                hourData.shadeΔ = hourData.feels - hourData.temperature;
                hourData.hourText = dateFormatter.format(new Date(hourData.startTime));
                hourData.emojiForecast = textToEmoji(hourData.shortForecast, hourData.isDaytime)
                hourlyData.push(hourData)
            }

            //             {
            //                 "number": 1,
            //                 "name": "",
            //                 "startTime": "2023-04-07T12:00:00-05:00",
            //                 "endTime": "2023-04-07T13:00:00-05:00",
            //                 "isDaytime": true,
            //                 "temperature": 57,
            //                 "temperatureUnit": "F",
            //                 "temperatureTrend": null,
            //                 "probabilityOfPrecipitation": {
            //                     "unitCode": "wmoUnit:percent",
            //                     "value": 5
            //                 },
            //                 "dewpoint": {
            //                     "unitCode": "wmoUnit:degC",
            //                     "value": 5
            //                 },
            //                 "relativeHumidity": {
            //                     "unitCode": "wmoUnit:percent",
            //                     "value": 55
            //                 },
            //                 "windSpeed": "10 mph",
            //                 "windDirection": "NE",
            //                 "icon": "https://api.weather.gov/icons/land/day/ovc,5?size=small",
            //                 "shortForecast": "Cloudy",
            //                 "detailedForecast": ""
            //             }

        }

        return hourlyData
    }

}

export default function Weather({ elementData }: {
    elementData: any
}) {
    const [weather, setWeather] = useState([])
    const [show /*, setShow*/] = useState(defaultShow)


    useEffect(() => {

        async function _getWeather() {
            const hourlyData = await getWeather();
            setWeather((w) => {
                return hourlyData
            })
        }

        if (show) {
            _getWeather();

            const id = setInterval(_getWeather, 1000 * 60 * 60) // 1 hour

            return () => { clearInterval(id) };
        }
    }, [setWeather, show]);

    return <div className="row mt-2">
        <div className="col">
            {/* <Button variant="primary" onClick={() => { setShow(!show) }} >
                {show ? "Hide" : "Show"} Weather
            </Button> */}
            {show &&
                <div className={`hourly ` + (elementData.level && `h${elementData.level}`)}>

                    {weather.length < 1 ?
                        <div>Gathering Weather Data...</div>
                        :
                        <table>
                            <thead>
                                {weatherHeader}
                            </thead>
                            <tbody>
                                {weather.map((h: any) => <React.Fragment key={h.startTime}>
                                    {h.startTomorrow && <>
                                        <tr >
                                            <td colSpan={8} style={{ fontWeight: "bold", border: 'none', background: 'white', paddingBottom: 0, paddingTop: ".5em" }}>
                                                Tomorrow
                                            </td>
                                        </tr>
                                        {weatherHeader}
                                        <tr></tr>
                                    </>
                                    }
                                    <tr >
                                        <td style={{ textAlign: "right", whiteSpace: "nowrap" }}>{h.hourText}</td>
                                        <td style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                                            {/* {h.feels} ° */}
                                            {h.apparentData.apparentTemp.toFixed(0)} °
                                            {/* <span className='isAdmin'> {(h.shadeΔ >= 0 ? "+" : "") + h.shadeΔ}</span> */}
                                            <div className='isAdmin' style={{ fontSize: ".5em", opacity: .75 }}> {
                                                [h.apparentData.humidityAdjustment.toFixed(0),
                                                h.apparentData.windAdjustment.toFixed(0),
                                                h.apparentData.radiationAdjustment.toFixed(0),
                                                h.apparentData.radiationWindAdjustment.toFixed(0)].join(", ")
                                            }</div>

                                        </td>
                                        <td style={{ textAlign: "right", whiteSpace: "nowrap" }}>{h.temperature}°</td>
                                        <td style={{ textAlign: "right", whiteSpace: "nowrap", borderRight: "none", paddingRight: ".5em" }} >{h.windMPH}</td>
                                        <td style={{ borderLeft: "none", whiteSpace: "nowrap", paddingLeft: "0" }}>{h.windDirection}</td>
                                        <td style={{ textAlign: "right", whiteSpace: "nowrap" }}>{h.relativeHumidity.value} %</td>
                                        <td style={{ textAlign: "right", whiteSpace: "nowrap" }}>{h.probabilityOfPrecipitation.value} %</td>
                                        {/* <td>{h.sunPct}</td> */}
                                        <td className='when-wide'>
                                            {h.emojiForecast &&
                                                <div style={{
                                                    transform: 'scale(1.5)',
                                                    transformOrigin: 'center',
                                                    display: 'inline-block',
                                                    paddingRight: '.5em'
                                                }}
                                                    dangerouslySetInnerHTML={{ __html: h.emojiForecast }}
                                                ></div>
                                            }
                                            {h.shortForecast}
                                        </td>
                                    </tr>
                                    <tr className='when-narrow'>
                                        <td colSpan={7}>
                                            {h.emojiForecast &&
                                                <div style={{
                                                    transform: 'scale(1.5)',
                                                    transformOrigin: 'center',
                                                    display: 'inline-block',
                                                    paddingRight: '.5em'
                                                }}
                                                    dangerouslySetInnerHTML={{ __html: h.emojiForecast }}
                                                ></div>
                                            }
                                            {h.shortForecast}
                                        </td>
                                    </tr>
                                    <tr className='when-narrow'>
                                        <td colSpan={7} style={{ border: "none" }}>
                                            &nbsp;
                                        </td>
                                    </tr>
                                </React.Fragment>
                                )}
                            </tbody>
                        </table>
                    }
                    {/* <Button variant="primary" onClick={() => { setShow(!show) }} >
                        {show ? "Hide" : "Show"} Weather
                    </Button> */}
                </div>
            }
        </div>
    </div>
}


/**
 *
 * @param {number} temperature Temperature in celsius
 * @param {number} humidity Humidity in RH (Relative Humidity)
 * @param {number} windSpeed Windspeed in M/S (meter per second)
 * @param {number} fractionSun Fraction of sun hitting the person. 1 being full sun, 0 being no sun
 * @returns {number} Apparent Temperature in celsius
 */
// function apparentTemperature(temperature: number, humidity: number, windspeed: number, fractionSun: number) {
//     // https://github.com/oyve/weather-formulas/blob/160cc4a80deeda394ecc0f684c7ecc06b4d5044c/temperature.js#L101
//     // https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature
//     let Ta = temperature;
//     let v = windspeed;
//     let e = (humidity / 100) * 6.015 * Math.exp((17.27 * Ta) / (237.7 + Ta));
//     let q = fractionSun * 1.5; // Net radiation absorbed per unit area of body surface (W/m2) for a person whihc is a fraction of a meter. On a sunny day this is about 1000 W/m2 for a whole meter squared
//     let apparentTemp = Ta + (0.348 * e) - (0.7 * v) + (0.7 * (q / (v + 10))) - 4.25;
//     // let AT = Ta + (0.33 * e) - (0.7 * v) - 4.00; // old formula without solar radiation
//     return apparentTemp;
// }

// function farenheightToCelsius(farenheight: number) {
//     return (farenheight - 32) * (5 / 9)
//     //return (apparentTemperatureC * (9 / 5)) + 32
// }

// function celsiusToFarenheight(celsius: number) {
//     return (celsius * (9 / 5)) + 32
// }