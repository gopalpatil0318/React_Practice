// src/components/SplashScreen.js
import React from 'react';

const SplashScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#3E3C2E] text-[#A69080]">
      <h1 className="text-5xl font-bold mb-6">Welcome to the Shop!</h1>
      <p className="mt-4 text-2xl">Gopal's Corner</p>
      <p className="text-md mb-8">Made by Gopal Patil ❤️</p>
      
      <p className="mt-6 text-lg animate-pulse">Loading...</p>
    </div>
  );
};

export default SplashScreen;
