export interface Transitions {
    [state: string]: {
        [action: string]: string;
    };
}
