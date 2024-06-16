export function can(currentState, hopefulState, transitions) {
    if (transitions[currentState] && transitions[currentState][hopefulState] !== undefined) {
        return true;
    }
    return false;
}
