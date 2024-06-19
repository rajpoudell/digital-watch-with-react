import React, { useState, useEffect } from 'react';
import './time.css';

export default function Time() {
    const [clock, setClock] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClock(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div className='time--main'>
            <div className="time--clock">
                <h1>{clock}</h1>
            </div>
        </div>
    );
}
