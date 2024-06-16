import { useEffect } from "react";
import { pathGetAt } from "../utils/dataStore";

export default function Time({ elementData, dataStore, dispatch, path }: {
    elementData: any,
    dataStore: any,
    path?: string,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {

    const dataPath = path ?
        path + "." + elementData.id :
        elementData.id;

    let value = pathGetAt(dataPath, dataStore) || { timeData: "" };

    useEffect(() => {
        if (pathGetAt(dataPath, dataStore) === undefined && elementData.default === "now") {
            const n = new Date();
            dispatch({
                path: dataPath,
                data: {
                    timeData: `${n.getHours().toString().padStart(2, '0')}:${n.getMinutes().toString().padStart(2, '0')}`,
                    whenData: n,
                    display: n.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                }
            })
        }
        // eslint-disable-next-line
    }, []) /// Run Once




    return <>
        {elementData.title &&
            <label htmlFor={elementData.id} className="form-label">{elementData.title}</label>
        }

        <input type="time" className="form-control" id={elementData.id} aria-describedby="when"
            style={{ maxWidth: "8em", display: "inline-block" }}
            value={value.timeData}
            onChange={(event) => {
                const formValue = event.currentTarget.value;
                const hour = Number(formValue.slice(0, 2));
                let when = new Date();

                if (elementData.recent === true) {
                    when.setHours(hour);
                    if (when > (new Date())) {  // it's time is in the future but thry probably mean yesterday
                        when.setDate(when.getDate() - 1)
                    }
                }

                dispatch({
                    path: dataPath,
                    data: {
                        timeData: event.currentTarget.value,
                        whenData: when,
                        display: when.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                    }
                })
            }}
        ></input>

    </>
}
