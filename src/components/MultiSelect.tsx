import { pathGetAt } from "../utils/dataStore";

export default function MultiSelect({ elementData, dataStore, dispatch, path }: {
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
    const values = pathGetAt(dataPath, dataStore)


    return <div className="row">
        <div className="col">

            {elementData.title &&
                <label className="form-label mt-1 mb-0">{elementData.title}</label>
            }

            {elementData.options.map((c: any) => {
                return <button key={c.value} type="button" className={`btn btn-${values?.[c.value] ? 'primary' : 'secondary'} m-1 `}
                    onClick={() => {
                        dispatch({
                            path: dataPath + '.' + c.value,
                            data: !values?.[c.value],
                        });
                    }}>
                    {c.text}
                </button>
            })}
        </div>
    </div>

}
