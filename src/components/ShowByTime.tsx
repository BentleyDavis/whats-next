import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Components from "./Components";

function getMsUntilHour(hour: number) {
    const now = new Date();
    let msUntil = (new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, 0, 0, 0)).getTime() - now.getTime();
    if (msUntil < 0) { msUntil = 0 }
    return msUntil
}

export default function ShowByTime({ elementData, dataStore, dispatch, path = "" }: {
    elementData: any,
    dataStore: any,
    path?: string,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {

    const [before, setBefore] = useState(getMsUntilHour(elementData.showByTime) !== 0)

    useEffect(() => {
        const wait = getMsUntilHour(elementData.showByTime);
        if (wait > 0) {
            const timeoutId = setTimeout(() => { setBefore(false) }, wait);
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [elementData])


    return <>
        {before ?
            elementData.elementsBefore.map((e: any) => { return Components(e, dataStore, dispatch, path) })
            :
            elementData.elementsAfter.map((e: any) => { return Components(e, dataStore, dispatch, path) })
        }
        {(
            (before && elementData.buttonTextBefore) ||
            (!before && elementData.buttonTextAfter)
        ) &&
            <Button variant="outline-secondary" onClick={() => { setBefore(!before) }} >
                {before ? elementData.buttonTextBefore : elementData.buttonTextAfter}
            </Button>
        }
    </>
}


