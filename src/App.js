import './App.css';
import { React, useState } from 'react'


function App() {
  const [add, setAdd] = useState(0);
  const sum = () => {
    setAdd(count => count + 1);
  };
  const min = () => {
    if (add > 0) {
      setAdd(count => count - 1);
    }
  };
  return (
    <div className="container">
      <h1>Counter:</h1>
      <span className="result">{add}</span>
      <div className='boxClick'>
        <button className='add' onClick={sum}>increase</button>
        <button className='add' onClick={min}>decrease</button>
      </div>
    </div>
  );
}
export default App;

