import ReactTextareaAutosize from "react-textarea-autosize";
import { pathGetAt } from "../utils/dataStore";

export default function Comment({ elementData, dataStore, dispatch, path }: {
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

    const value = pathGetAt(dataPath, dataStore) ?? "";


    return <div className={"row list-item "}>
        <div className="col">
            {elementData.title &&
                <label htmlFor="exampleFormControlTextarea1" className="form-label mt-1 mb-0"
                    dangerouslySetInnerHTML={{ __html: elementData.title }}>
                </label>
            }

            <ReactTextareaAutosize className="form-control" id="exampleFormControlTextarea1" minRows={elementData.minRows || 3}
                value={value}
                onChange={(event) => {
                    dispatch({
                        path: dataPath,
                        data: event.currentTarget.value
                    })
                }} ></ReactTextareaAutosize >
        </div>
    </div>
}
