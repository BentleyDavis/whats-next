import { useEffect } from "react";

declare global {
    interface Window {
        chrome?: {
            webview?: {
                addEventListener: (
                    type: string,
                    handler: (event: any) => void, // not sure yet what the event type should be
                ) => void;
                postMessage: (message: string) => void;
                removeEventListener: (
                    type: string,
                    listener: (event: any) => void) => void;
            };
        };
    }
}

function DesktopInteraction() {

    useEffect(() => {
        let listener: any;
        try {
            listener = window?.chrome?.webview?.addEventListener('message',
                (event: any) => {
                    alert(event.data);
                });
        } catch { /* ignore errors */ }

        return () => {
            try {
                if (listener) window?.chrome?.webview?.removeEventListener('message', listener)
            } catch { /* ignore errors */ }
        }
    }, [])

    return (
        <div>
            {/* Your component JSX goes here */}
        </div>
    );
}

export default DesktopInteraction;
