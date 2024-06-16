import { useEffect, useState } from "react";
import Components from "./Components";

function getMsUntilHour(hour: number, now = new Date()) {
    let dayToCheck = new Date(now);
    if (dayToCheck.getHours() >= hour) {
        // The hour we want is in the next day so advance to tomorrow
        dayToCheck.setDate(now.getDate() + 1);
    }
    const nextHour = new Date(dayToCheck.getFullYear(), dayToCheck.getMonth(), dayToCheck.getDate(), hour, 0, 0, 0);
    let msUntil = nextHour.getTime() - now.getTime();
    return msUntil
}

function isBetweenHours(startHour: number, endhour: number, now = new Date()) {
    const msToStart = getMsUntilHour(startHour, now);
    const msToEnd = getMsUntilHour(endhour, now);
    return msToStart > msToEnd;
}

export default function ShowBetweenHours({ elementData, dataStore, dispatch, path = "" }: {
    elementData: any,
    dataStore: any,
    path?: string,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {

    const [isBetween, setIsBetween] = useState<Boolean>(isBetweenHours(elementData.startHour, elementData.endHour))

    useEffect(() => { // Just check every minute if it needs updating. TODO: Make this more efficient???
        const intervalId = setInterval(() => {
            setIsBetween(isBetweenHours(elementData.startHour, elementData.endHour))
        }, 60000);
        return () => { clearInterval(intervalId); };
    }, [elementData])


    return <>
        {isBetween &&
            elementData.elements.map((e: any) => { return Components(e, dataStore, dispatch, path) })
        }
    </>
}


