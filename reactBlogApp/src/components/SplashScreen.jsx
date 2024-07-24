// SplashScreen.js
import React from 'react';

const SplashScreen = () => {
    return (
        <div className="splash-screen">
            <div className="splash-content">
                <h1 className="welcome-text">Welcome to</h1>
                <h2 className="explore-text">New Trends Bulletin</h2>
                <p className="creator-name">Made by Gopal ❤️</p>
                <div className="splash-loader"></div>
                <p className="explore-message">Get ready to explore the latest trends!</p>
            </div>
        </div>
    );
};

export default SplashScreen;
