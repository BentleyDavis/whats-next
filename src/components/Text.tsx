import { pathGetAt } from "../utils/dataStore";

export default function Text({ elementData, dataStore, path }: {
    elementData: any,
    dataStore: any,
    path?: string,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {
    let dataPath = "";
    if (path) dataPath += path + "."
    if (elementData.path) dataPath += elementData.path + "."
    dataPath += elementData.id;

    let value = pathGetAt(dataPath, dataStore);
    if (typeof value === 'object') {
        const values = [];
        for (const [k, v] of Object.entries(value)) {
            if (v) values.push(k)
        }
        value = values.join(", ")
    }


    return <>{elementData.prefix}{value ? value : elementData.default}{elementData.suffix}</>
}
