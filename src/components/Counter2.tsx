import { pathGetAt } from "../utils/dataStore";

export default function Counter2({ elementData, dataStore, dispatch, path }: {
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

    const value = pathGetAt(dataPath, dataStore) || 0;

    function adjust(amount: number) {
        return () => {
            let newValue = 0
            if (value !== undefined) newValue = value + amount;
            if (newValue < 0) newValue = 0;
            dispatch({
                path: dataPath,
                data: newValue,
            });
        }
    }

    return <div className={"row list-item " + (elementData.max && value >= elementData.max ? "task-done" : "")}>
        <div className="col">
            {elementData.title &&
                <label htmlFor="exampleFormControlTextarea1" className="form-label mt-1 mb-0"
                    dangerouslySetInnerHTML={{ __html: elementData.title }}>
                </label>
            }

            <div style={{ display: "inline-block" }}>
                <button type="button" className={`btn btn-light btn-sm`}
                    onClick={adjust(-1)}>
                    -
                </button>

                <button type="button" id={dataPath} className={`btn btn-outline-primary my-1`}
                    onClick={adjust(+1)}>
                    {value}
                </button>

                <button type="button" className={`btn btn-primary btn-sm`}
                    onClick={adjust(+1)}>
                    +
                </button>
            </div>


        </div>
    </div>

}
