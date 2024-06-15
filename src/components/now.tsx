import { useState, useEffect } from 'react';

const Now = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return <>{currentDateTime.toLocaleString()}</>;
};

export default Now;