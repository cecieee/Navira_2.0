import React, { useEffect, useRef } from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            const length = textRef.current.getComputedTextLength();
            textRef.current.style.setProperty('--text-length', length);
            textRef.current.style.strokeDasharray = length;
            textRef.current.style.strokeDashoffset = length;
        }
    }, []);

    return (
        <div className="loading-screen bg-linear-to-tr from-primary to-black">
            <div className="loading-content">
                <svg className="loading-text" width="100%" height="150px">
                    <text 
                        ref={textRef}
                        x="50%" 
                        y="50%" 
                        dominantBaseline="middle" 
                        textAnchor="middle"
                    >
                        NAVIRA 2.0
                    </text>
                </svg>
                <div className="loader-bar">
                    <div className="loader-progress"></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;