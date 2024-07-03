import { useEffect, useState } from 'react';
import {
  decrement,
  increment,
  incrementByValue,
} from './redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [boxesCount, setBoxesCount] = useState(0);
  useEffect(() => {
    const latestBoxCount = Math.floor(count / 5);
    setBoxesCount(latestBoxCount);
  }, [count]);

  const boxes = Array.from({ length: boxesCount });

  return (
    <div className='flex flex-col justify-center items-center gap-10 m-10'>
      <div className='flex border  border-yellow-300 rounded-md p-10 gap-10'>
        <button
          className='btn btn-success'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className='btn btn-success'
          onClick={() => dispatch(incrementByValue(5))}
        >
          Increment By 5
        </button>
        <h1 className='text-3xl'> {count} </h1>
        <button
          className='btn btn-secondary'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div className='grid grid-cols-10 gap-5'>
        {boxes.map((box) => (
          <div className='w-10 h-10 bg-red-500'> </div>
        ))}
      </div>
    </div>
  );
}

export default App;
