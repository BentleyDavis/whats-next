export function deepCopy(source) {
    if (!source)
        return source;
    return JSON.parse(JSON.stringify(source));
}
export function pathEnd(path) {
    if (!Array.isArray(path))
        path = path.split('.');
    return path.slice(-1)[0];
}
export function pathUp(path, levels = 1) {
    if (!Array.isArray(path))
        path = path.split('.');
    return path.slice(0, -levels);
}
export function pathCreateObject(path, value) {
    if (!Array.isArray(path))
        path = path.split('.');
    const pathObject = {};
    const endObject = pathUp(path).reduce((o, i) => {
        return o[i] = {};
    }, pathObject);
    endObject[pathEnd(path)] = value;
    return pathObject;
}
export function pathGetAt(path, source) {
    if (!Array.isArray(path))
        path = path.split('.');
    const result = path.reduce((o, i) => {
        return o?.[i];
    }, source);
    if (result?.bind) {
        return result.bind(source);
    }
    else {
        return result;
    }
}
