import Components from "./Components";

export default function Row({ elementData, dataStore, dispatch, path = "" }: {
    elementData: any,
    dataStore: any,
    path?: string,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {

    return <div className={`row ${elementData.striped && 'list-item'} `}>
        <div className="col">
            {elementData.elements.map((e: any) => { return Components(e, dataStore, dispatch, path) })}
        </div>
    </div>
}


