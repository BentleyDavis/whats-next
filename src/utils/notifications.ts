// Utility function to send notifications externally

const alertDestination = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTM3Mzk3N' +
    // TODO: improve this 
    'zczMDU5MjUzODY4NC9TZmF2XzdPWmxHa1hycXY1OFJidXhBMmtMbEY'
    + '0V2E0WXYweGktQTF0aUp6bUhVTnlPSjdDbnZEOEt3VVpWSGlWdHJ4YQ=='

const fyiDestination = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTM3' +
    // TODO: improve this 
    'NDQyODQ4NTg0NTc4MjU4OC82bTZoc3RSZ0ZLN3BJNFZVZEtVUkNuYU'
    + 'x3Mm9DaEVOTVJXMEdEbmhtNFV4X3RrSHNpWjZSSjBua0U0QVB0Wmp2TnpvZw == ';

const fyiUrl = atob(fyiDestination);
const alertUrl = atob(alertDestination);

/**
 * Directly sends a notification
 * @param message The message to send
 * @returns A promise that resolves with the result of the notification
 */
export const sendNotification = async (message: string, type: 'alert' | 'fyi' = 'alert'): Promise<{ success: boolean, error?: string }> => {
    try {
        const url = type === 'alert' ? alertUrl : fyiUrl

        console.log(url)
        // Send notification to the destination webhook
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: message,
            })
        });

        if (response.ok) {
            console.log(`Notification sent: ${message}`);
            return { success: true };
        } else {
            console.error('Failed to send notification');
            return { success: false, error: 'Failed to send notification' };
        }
    } catch (error) {
        console.error('Error sending notification:', error);
        return { success: false, error: 'Error sending notification' };
    }
};
