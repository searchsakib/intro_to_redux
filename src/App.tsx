import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='flex justify-center items-center gap-10 m-10'>
      <div className='flex border  border-yellow-300 rounded-md p-10 gap-10'>
        <button
          className='btn btn-success'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <h1 className='text-3xl'> {count} </h1>
        <button
          className='btn btn-secondary'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
