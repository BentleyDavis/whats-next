// Utility function to send notifications to Discord

/**
 * Directly sends a notification to Discord
 * @param message The message to send to Discord
 * @returns A promise that resolves with the result of the notification
 */
export const sendNotification = async (message: string): Promise<{ success: boolean, error?: string }> => {
    try {
        // Send notification to Discord webhook
        const response = await fetch('https://discord.com/api/webhooks/1373408517028839425/-Q02wp1u8qUcOAOTvGQag8mPsMl1Ooln7ziI-wSMYsdLewcnKo5Dc1bP0ddiGOlKytbl', {
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
