import { useEffect, useState } from "react";

const defaultShow = (new URLSearchParams(window.location.search)).get("now") !== null ? true : false;

const OldNowKey = "oldNow";

localStorage.removeItem(OldNowKey);

const dayFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
});

const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
});

export default function WhenIsNow({ elementData }: {
    elementData: any
}) {
    const [now, setNow] = useState(new Date())
    // const [errorMessage, setErrorMessage] = useState("")


    useEffect(() => {
        const id = setInterval(() => {
            // const oldNowText = localStorage.getItem(OldNowKey);
            const newNow = new Date();
            // if (oldNowText) {
            //     const oldNow = new Date(oldNowText);
            //     if (newNow.getTime() - oldNow.getTime() > 60000) {
            //         setErrorMessage(() => { return "Needs Refresh" });
            //         localStorage.removeItem(OldNowKey);
            //         window.location.reload();
            //     } else {
            //         localStorage.setItem(OldNowKey, newNow.toISOString());
            //     }
            // } else {
            //     localStorage.setItem(OldNowKey, newNow.toISOString());
            // }
            setNow(() => { return newNow });

        }, 1000)
        return () => { clearInterval(id) }
            ;
    }, []);

    return <div className="row mt-2 h3" style={defaultShow ? {
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    } : {}}>
        <div className={elementData.level && `h${elementData.level}`}>

            <span style={{ whiteSpace: "nowrap" }}>
                {dayFormatter.format(now)} &emsp;
            </span>&emsp;

            <span style={{ whiteSpace: "nowrap" }}>
                {dateFormatter.format(now)}
            </span>&emsp;

            <span style={{ whiteSpace: "nowrap" }}>
                {timeFormatter.format(now)} &emsp;
            </span>

        </div>
        {/* <div>{errorMessage}</div> */}
    </div>
}
