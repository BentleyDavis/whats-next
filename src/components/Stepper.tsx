import { pathGetAt } from "../utils/dataStore";
import Components from "./Components";

export default function Stepper({ elementData, dataStore, dispatch, path = "" }: {
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

    let value = pathGetAt(dataPath, dataStore) ?? "";

    // set up default
    if (!value) value = { index: 0 };
    if (value.index === undefined) value.index = 0;

    return value.showAll ?
        <>
            <div className={`row`}>
                <div className="col">
                    <button type="button" className={`btn btn-outline-primary m-1`}
                        onClick={() =>
                            dispatch({
                                path: elementData.id,
                                data: { showAll: false },
                            })
                        }>
                        Show one at a time
                    </button>
                </div>
            </div>
            <div className={`row ${elementData.striped && 'list-item'} `}>
                <div className="col">
                    {elementData.elements.map((e: any) => { return Components(e, dataStore, dispatch, path) })}
                </div>
            </div>
        </>
        : // not showAll
        <>
            <div className={`row`}>
                <div className="col">
                    {value.index > 0 &&
                        <button type="button" className={`btn btn-outline-primary m-1`}
                            onClick={() =>
                                dispatch({
                                    path: elementData.id,
                                    data: { index: value.index - 1 },
                                })
                            }>
                            &lt; previous
                        </button>
                    }
                    <button type="button" className={`btn btn-outline-primary m-1`}
                        onClick={() =>
                            dispatch({
                                path: elementData.id,
                                data: { showAll: true },
                            })
                        }>
                        Show All
                    </button>
                </div>
            </div>
            <div className={`row`}>
                <div className="col">
                    {Components(elementData.elements[value.index], dataStore, dispatch, path)}
                </div>
            </div>
            <div className={`row ${elementData.striped && 'list-item'} `}>
                <div className="col">
                    {value.index + 1 < elementData.elements.length ?
                        <button type="button" className={`btn btn-outline-primary m-1`}
                            onClick={() => dispatch({
                                path: elementData.id,
                                data: { index: value.index + 1 },
                            })}>
                            Show Next Question &gt;
                        </button>
                        :
                        <>✅ Done </>
                    }
                    {value.index + 1} of {elementData.elements.length}
                </div>
            </div>
        </>
}

