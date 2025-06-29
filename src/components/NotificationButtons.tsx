import { useState, useEffect } from 'react';
import './NotificationButtons.css';
import '../css/spinner.css';
import { sendNotification } from '../utils/notifications';

// String constants for view states instead of enum
const VIEW_STATE = {
    BUTTONS: 'buttons',
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error'
} as const;

// Type for the view state
type ViewStateType = typeof VIEW_STATE[keyof typeof VIEW_STATE];

const NotificationButtons = () => {
    const [viewState, setViewState] = useState<ViewStateType>(VIEW_STATE.BUTTONS);
    const [notificationMessage, setNotificationMessage] = useState<string>('');
    const [timerHandle, setTimerHandle] = useState<NodeJS.Timeout | null>(null);

    // Reset the UI after timeout expires
    useEffect(() => {
        return () => {
            // Clear timeout when component unmounts
            if (timerHandle) {
                clearTimeout(timerHandle);
            }
        };
    }, [timerHandle]);    // Internal notification handler
    const sendNotificationButton = (message: string) => {
        return () => {
            // Set loading state and store the message
            setViewState(VIEW_STATE.LOADING);
            setNotificationMessage(message);

            // Use the direct notification service
            sendNotification(message).then(result => {
                if (result.success) {
                    setViewState(VIEW_STATE.SUCCESS);
                } else {
                    setViewState(VIEW_STATE.ERROR);
                }

                // Set a timeout to revert back to buttons after 5 minutes
                const handle = setTimeout(() => {
                    setViewState(VIEW_STATE.BUTTONS);
                }, 5 * 60 * 1000); // 5 minutes in milliseconds

                setTimerHandle(handle);
            });
        };
    };// Render different content based on view state

    // Handler to close notification and return to buttons
    const handleCloseNotification = () => {
        // Clear any existing timer
        if (timerHandle) {
            clearTimeout(timerHandle);
            setTimerHandle(null);
        }

        // Return to buttons state
        setViewState(VIEW_STATE.BUTTONS);
    };

    const renderContent = () => {
        switch (viewState) {
            case VIEW_STATE.LOADING:
                return (
                    <div className="notification-status loading">
                        <button className="close-button" onClick={handleCloseNotification}>×</button>
                        <div className="spinner"></div>
                        <p>Sending notification...</p>
                    </div>
                );
            case VIEW_STATE.SUCCESS:
                return (
                    <div className="notification-status success">
                        <button className="close-button" onClick={handleCloseNotification}>×</button>
                        <p>✅ Successfully notified: {notificationMessage}</p>
                    </div>
                );
            case VIEW_STATE.ERROR:
                return (
                    <div className="notification-status error">
                        <button className="close-button" onClick={handleCloseNotification}>×</button>
                        <p>❌ Error sending notification</p>
                    </div>
                ); case VIEW_STATE.BUTTONS:
            default: return (<>
                {/* <button onClick={sendNotificationButton("Suzanne is Hungry!")}>Hungry</button>
                <button onClick={sendNotificationButton("Suzanne is Thirsty!")}>Thirsty</button>
                <button onClick={sendNotificationButton("Suzanne is in Pain!")}>Pain</button>
                <button onClick={sendNotificationButton("Suzanne has a question!")}>Question</button> */}
                <button onClick={sendNotificationButton("Suzanne clicked the emergency button!")}>Click if an emergency</button>

            </>
            );
        }
    };

    return (
        <div className="notification-buttons">
            {renderContent()}
        </div>
    );
};

export default NotificationButtons;
