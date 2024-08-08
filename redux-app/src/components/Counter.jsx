import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
      >
        Increment
      </button>
      <div className="mb-4 text-2xl font-bold text-gray-700">{count}</div>
      <button
        onClick={() => dispatch(decrement())}
        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition"
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
