import { Button, Modal } from "react-bootstrap";
import { pathGetAt } from "../utils/dataStore";
import { newId } from '../utils/newId';
import Components from "./Components";


export default function Events({ elementData, dataStore, dispatch, path = "", btnType = "primary" }: {
    elementData: any,
    dataStore: any,
    path?: string,
    btnType: string,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {
    const dataPath = path ?
        path + "." + elementData.id :
        elementData.id
    const data = pathGetAt(dataPath, dataStore) || {}

    return <div>
        <button className={`btn btn-${btnType} m-1 `}
            onClick={() => {
                const id = newId();
                dispatch({
                    path: dataPath + "." + id,
                    data: {
                        id: id,
                        closed: false,
                    }
                })
            }}

        >
            + {elementData.addButtonTitle}
        </button>

        {Object.values(data).reverse().map((event: any) =>
            <span key={event.id} >



                <button className="btn btn-secondary m-1 " type="button"
                    // data-bs-toggle="collapse"
                    // data-bs-target={`#c-${event.id}`}
                    // aria-expanded="true"
                    onClick={() => {
                        dispatch({
                            path: dataPath + "." + event.id + ".closed",
                            data: !event.closed,
                        })
                    }}
                >
                    {event.closed ? elementData?.summary?.map((e: any) => { return Components(e, dataStore, dispatch, dataPath + "." + event.id) })
                        : "close"}
                </button>

                <Modal size="xl" show={!event.closed} onHide={() => {
                    dispatch({
                        path: dataPath + "." + event.id + ".closed",
                        data: !event.closed,
                    })
                }}>
                    <Modal.Header closeButton>
                        <Modal.Title>{elementData.addButtonTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                        {elementData?.elements?.map((e: any) => {
                            return <div className={
                                // e.width === "full" ? "col-12" : "col-sm-6 col-md-4"
                                "col-12"
                            } key={e.id}>
                                {Components(e, dataStore, dispatch, dataPath + "." + event.id)}
                            </div>
                        })}
                        {/* <pre>{JSON.stringify(event, null, 2)}</pre> */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="float-start" style={{ opacity: .2 }} variant="light" onClick={() => {
                            dispatch({
                                path: dataPath,
                                data: "",
                            })
                        }} size='sm'>
                            🗑 delete all {dataPath}
                        </Button><div style={{ width: "25%" }}></div>
                        <Button variant="secondary" onClick={() => {
                            dispatch({
                                path: dataPath + "." + event.id + ".closed",
                                data: !event.closed,
                            })
                        }} >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>


            </span>
        )}

    </div>

}
