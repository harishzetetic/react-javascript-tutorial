import './App.css';
import useScript from './components/customHooks/useScript';
 
function App() {
  
  const {loading, error} = useScript('https://bootswatch.com/5/sketchy/bootstrap.css')
  if(loading){
    <div>loading</div>
  }
  if(error){
    <div>Error While Loading</div>
  }
  return (<div className='App'>
    <h1>Custom Hook | Theme Activated by useScript Custom Hook</h1>
    </div>);
}

export default App;
