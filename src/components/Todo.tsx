import { Transitions } from "../utils/Transitions";
import { can } from "../utils/can";

const transitions: Transitions = {
    waiting: {
        'markDone': 'done',
        'skip': 'skipped',
    },
    done: {
        'reset': 'waiting',
    },
    skipped: {
        'reset': 'waiting',
    }
}

export default function ToDo({ elementData, dataStore, dispatch }: {
    elementData: any, dataStore: any,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {


    const machineState = dataStore[elementData.id] || 'waiting'


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
            <div dangerouslySetInnerHTML={{
                __html: ({
                    done: "Done: ",
                    skipped: "Skipped: ",
                    started: "Started: ",
                    waiting: ""
                } as { [id: string]: string })[machineState] +
                    (machineState === "done" && elementData.doneContent ?
                        elementData.doneContent :
                        elementData.content)
            }}></div>


            <StateButton action={"markDone"} title={"Mark Done"} btnType="primary"></StateButton>
            <StateButton action={"skip"} title={"Skip"} btnType="warning"></StateButton>
            {elementData.instructions && ["started", "waiting"].includes(machineState) && <>
                <button type="button" className="btn btn-secondary mx-1 "
                    data-bs-toggle="collapse" data-bs-target={`#c-${elementData.id}`} aria-expanded="true">
                    Instructions
                </button>
            </>}
            <StateButton action={"reset"} title={"Reset"} btnType="light" className="btn-sm "></StateButton>



            {elementData.instructions && ["started", "waiting"].includes(machineState) && <>
                <div className="collapse" id={`c-${elementData.id}`} dangerouslySetInnerHTML={{ __html: elementData.instructions }}></div>
            </>}


        </div>
    </div>
}





