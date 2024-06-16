import { pathGetAt } from "../utils/dataStore";

export default function SingleSelect({ elementData, dataStore, dispatch, path }: {
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
        elementData.id

    const value = pathGetAt(dataPath, dataStore)


    return <div className={"row list-item " + (!(value === undefined || value === "") && "task-done") || ""}>
        <div className="col">
            <div className="clearfix">
                {elementData.title &&
                    <label className="form-label mt-1 mb-0">{elementData.title}</label>
                }
                {elementData.options.map((c: any) => {
                    return (c.value === value || value === undefined || value === "") &&
                        <button key={c.value} type="button" className={`btn btn-${value === c.value ? 'secondary' : 'primary'} m-1 `}
                            onClick={() => {
                                if (c.value !== value) {
                                    dispatch({
                                        path: dataPath,
                                        data: c.value,
                                    });
                                }
                            }}>
                            {c.text}
                        </button>
                })}
                <div className="float-end">
                    {!(value === undefined || value === "") &&
                        <button onClick={() => {
                            dispatch({
                                path: dataPath,
                                data: "",
                            })
                        }} type="button" className="btn btn-light btn-sm">Reset</button>
                    }
                </div>
            </div>
        </div>
    </div>

}
