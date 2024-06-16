import { Transitions } from "../utils/Transitions";
import { can } from "../utils/can";

const transitions: Transitions = {
    waiting: {
        complete: `done`,
    },
    done: {
        reset: 'waiting',
    }
}

export default function Reminder({ elementData, dataStore, dispatch }: {
    elementData: any, dataStore: any,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {

    const machineState: string = dataStore[elementData.id] || 'waiting';

    function StateButton({ action, title, btnType = "primary", className }:
        {
            action: string,
            title: string,
            btnType?: "success" | "primary" | "warning" | "info" | "secondary" | "outline-primary" | "light",
            className?: string
        }) {

        if (can(machineState, action, transitions)) {
            return <button type="button" className={`btn btn-${btnType} m-1 ${className} `}
                onClick={() => {
                    dispatch({
                        path: elementData.id,
                        data: transitions[machineState][action]
                    });
                }}>{title}</button>
        }
        return null;
    }

    return <div className={"row list-item task-" + machineState}>
        <div className="col">
            <div dangerouslySetInnerHTML={{ __html: machineState === "done" && elementData.doneContent ? elementData.doneContent : elementData.content }}></div>
            <StateButton action={"complete"} title={"click to confirm you read this"} btnType="primary" className="me-4"></StateButton>
            <StateButton action={"reset"} title={"Reset"} btnType="light" className="btn-sm float-end"></StateButton>
        </div>

    </div>
}
