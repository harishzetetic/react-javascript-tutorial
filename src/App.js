import './App.css';
import useArray from './components/customHooks/useArray';

function App() {
  const {array, set, push, remove, filter, update, clear} = useArray([1,2,3,4,5,6,7]);
  return (<div className='App'>
    <h1>Custom Hook | useArray</h1>
    {array.join(', ')}
    <br/>
    <button onClick={() => push(8)}>Push</button>
    <button onClick={()=>update(1,9)}>Update 2nd index element</button>
    <button onClick={()=>remove(1)}>Remove 2nd Element</button>
    <button onClick={()=>clear()}>Clear</button>
    </div>);
}

export default App;
