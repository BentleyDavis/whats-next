
export function deepCopy<Type>(source: Type) {
    if (!source) return source;
    return JSON.parse(JSON.stringify(source)) as Type
}

export function pathEnd(path: string | string[]) {
    if (!Array.isArray(path)) path = path.split('.');
    return path.slice(-1)[0]
}

export function pathUp(path: string | string[], levels: number = 1) {
    if (!Array.isArray(path)) path = path.split('.');
    return path.slice(0, -levels)
}

export function pathCreateObject(path: string | string[], value: any) {
    if (!Array.isArray(path)) path = path.split('.');
    const pathObject = {} as { [key: string]: any };
    const endObject = pathUp(path).reduce((o: any, i) => {
        return o[i] = {};
    }, pathObject);
    endObject[pathEnd(path)] = value;
    return pathObject;
}

export function pathGetAt(path: string | string[], source: any) {
    if (!Array.isArray(path))
        path = path.split('.');
    const result = path.reduce((o: any, i) => {
        return o?.[i]
    }, source);
    if (result?.bind) {
        return result.bind(source)
    } else {
        return result
    }
}