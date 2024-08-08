import React from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 bg-opacity-90">
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
        <Counter />
      </div>
    </div>
  );
}

export default App;
