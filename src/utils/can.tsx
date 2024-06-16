import { Transitions } from "./Transitions";

export function can(currentState: string, hopefulState: string, transitions: Transitions) {
    if (transitions[currentState] && transitions[currentState][hopefulState] !== undefined) {
        return true;
    }

    return false;
}
