export function evalExpression(element, dataStore, expression) {
    try {
        const i = expression.split("!==");
        return dataStore[i[0].replace("data.", "")]?.toString() !== i[1];
    }
    catch (error) {
        console.error("element:", element, "error:", error);
        return undefined;
    }
}
// const x = new ScopedEval({ data: dataStore })
// show = x.eval(element.show);
// export class ScopedEval {
//     scope: any
//     constructor(scope: any) {
//         this.scope = scope;
//     }
//     eval(__script: any) {
//         // eslint-disable-next-line no-new-func
//         return new Function(...Object.keys(this.scope), `
//                 return eval(
//                     '"use strict";delete this.__script;'
//                     + this.__script
//                 );
//             `.replace(/[\n\t]|  +/g, '')
//         ).bind({ __script })(...Object.values(this.scope));
//     }
// }
