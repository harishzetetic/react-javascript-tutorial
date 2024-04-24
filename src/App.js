import { useState } from 'react';
import './App.css';
import usePrevious from './components/customHooks/usePrevious';
import useStateWithHistory from './components/customHooks/useStateWithHistory';
 
function App() {
  const [count, setCount, {history, pointer, back, forward, go}] = useStateWithHistory(1);
  const [name, setName] = useState('Known')


  return (<div className='App'>
    <h1>Custom Hook | useStateWithHistory</h1>
    <div>{count} </div>
    <div>{history.join(', ')}</div>
    <div>Pointer - {pointer}</div>
    <div>{name}</div>

    <button onClick={()=>setCount(prev=>prev*2)}>Double</button>
    <button onClick={()=>setCount(prev=>prev+1)}>Incremetn</button>
    <button onClick={back}>Back</button>
    <button onClick={forward}>Forward</button>
    <button onClick={()=>go(2)}>Go To 2nd Index</button>
    <button onClick={()=>setName('Technical')}>Change Name</button>
    </div>);
}

export default App;
