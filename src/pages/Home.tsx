import '@/App.css';
import { useEffect, useReducer, useState } from 'react';
import { surveyFormat } from '@/surveyFormat';
import { firebaseApp, firebaseInit } from '@/utils/database';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { newId } from '@/utils/newId';
import Components from "@/components/Components";
import { deepCopy, pathCreateObject } from '@/utils/dataStore';
import { merge } from 'lodash';
import { useLoaderData } from "react-router-dom";
import { getDateId } from '@/utils/getDateId';
import '@/components/tasks.css';
import { Button } from 'react-bootstrap';
import DesktopInteraction from '@/components/DesktopInteraction';
import { appConfig } from '@/appConfig';

export async function loader({ params }: { params: any }) {
  return params;
}

export interface Action {
  path: string;
  data: any;
}

export interface ActionWhen {
  path: string;
  data: any;
  when: number;
}

const provider = new GoogleAuthProvider();

let dbDocRef: any
const uniqueSessionId = newId()

function HomePage() {

  const checklist = useLoaderData();

  const [authState, setAuthState] = useState<"in" | "unknown" | "error">("unknown")
  // const [user, setUser] = useState<User>()
  const [formState, dispatchForm] = useReducer(formStateReducer, undefined)
  const [isAdmin, setisAdmin] = useState(false)

  useEffect(() => { // Log Into Firebase
    firebaseInit()
    const cancelables: any[] = [];

    // @ts-ignore
    const dateId = checklist?.dateId || getDateId();

    const auth = getAuth();
    let unsubscribe = onAuthStateChanged(auth, async (incomingUser) => {
      try {


        if (incomingUser) {
          setAuthState("in");
          // setUser(incomingUser);

          // Subscribe the survey data
          const db = getFirestore(firebaseApp);

          // if (!dbDocRef) {

          // create the doc if it doesn't exist
          const docRef = doc(db, "lists", "AL3vE9W4KNpbHaZ03IGp", "submissions", dateId);
          dbDocRef = docRef;
          if (!(await getDoc(docRef)).exists()) {
            await setDoc(docRef, {})
          }

          const unsub = onSnapshot(docRef, (doc) => {

            const data = doc.data();
            if (data) {
              if (data.updateFrom !== uniqueSessionId) {
                dispatchForm({ path: "", data })
              } else {
              }
            }
          });

          cancelables.push(unsub)
          // }

        } else {
          const auth = getAuth();
          // signInWithRedirect(auth, provider).catch((error) => { console.error(error) });
          signInWithPopup(auth, provider).catch((error) => { console.error(error) });

        }
      } catch (error) {
        setAuthState("error");
        console.error("error detected", error)
      }
    });

    cancelables.push(unsubscribe)

    return () => {
      for (const c of cancelables) {
        c()
      }
    }
  }, [checklist])

  function formStateReducer(oldState: any, action: Action) {

    try {
      if (action.path !== "") {
        let history: ActionWhen[] = JSON.parse(localStorage.getItem("history") || "[]");
        if (history.length > 100) {
          history = history.slice(0, 100)
        }
        history.unshift({ ...action, when: new Date().getTime() });
        localStorage.setItem("history", JSON.stringify(history));
      }
    } catch (error) {

    }



    if (dbDocRef && action.path !== "") {

      const cmd = {
        [action.path]: action.data,
        updateFrom: uniqueSessionId,
        updated: { [action.path]: action.data }
      }

      // Update Remote State
      updateDoc(dbDocRef, cmd);

      // Update messages

    }



    // Update local state
    let partial = action.data;
    if (action.path !== "") {
      partial = pathCreateObject(action.path, action.data)
      return merge(deepCopy(oldState), deepCopy(partial));
    } else {
      return action.data
    }

  }

  return (
    <div className={"container" + (isAdmin ? "" : " notAdmin")}>
      <DesktopInteraction />
      {/* <pre>*{JSON.stringify(checklist, undefined, 2)}*</pre> */}
      {/* <pre>{JSON.stringify(formState, undefined, 2)}</pre> */}

      {authState === "in" && formState !== undefined &&
        <>
          {surveyFormat.elements.map((e: any) => { return Components(e, formState, dispatchForm) })}
          <br />
          <br />
          <Button variant='link' style={{ opacity: isAdmin ? 1 : .1 }}
            onClick={() => {
              console.log("click");

              setisAdmin(!isAdmin);
            }}>Admin: {isAdmin ? "on" : "off"}</Button>

          {isAdmin && <>
            <button
              onClick={() => {
                // @ts-ignore
                window.chrome.webview.postMessage("window:minimize")
              }}
            >
              min
            </button>

            <button
              onClick={() => {
                // @ts-ignore
                window.chrome.webview.postMessage("window:normal")
              }}
            >
              normal
            </button>
            <button
              onClick={() => {
                // @ts-ignore
                window.chrome.webview.postMessage("window:maximize")
              }}
            >
              maximize
            </button>

            <button
              onMouseDown={() => {
                // @ts-ignore
                window.chrome.webview.postMessage("window:drag")
              }}
            >
              drag
            </button>
          </>}
        </>
      }

      {authState === "unknown" &&
        <h1>One Moment. Checking identity...</h1>
      }

      {authState === "error" && <>
        <h1>Error</h1>
        <br />
        <p>This is an error. Tell Ben if this keeps hapening!</p>
        <Button variant='warning' onClick={() => window.location.reload()}>Click here to try again</Button>
        <br /><br /><br /><br /><br />
      </>
      }



      <div style={{ opacity: .3 }}>v{appConfig.version}</div>
    </div>
  );
}

export default HomePage;
