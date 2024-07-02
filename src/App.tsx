function App() {
  return (
    <div className='h-screen w-full flex justify-center items-center gap-10 m-10'>
      <div className='flex border  border-yellow-300 rounded-md p-10 gap-10'>
        <button className='btn btn-info'>Increment</button>
        <h1 className='text-3xl'>0</h1>
        <button className='btn btn-error'>Decrement</button>
      </div>
    </div>
  );
}

export default App;
