import { useRef, useState } from 'react';
import TodoList from './components/TodoDemo';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

export default function App() {
  const [value, setValue] = useState([]);
  const data = useRef('');

  function showData() {
    setValue([...value, data.current.value]);
    data.current.value = ''; // Clear the input after adding to the list
  }

  return (
    <>
    <div className='box'>
    <center>
      <h1>TODO List</h1>
      <form>
      <div className='form-group'>
      <input className='form-control form-control-sm' ref={data} type="text" required/>
      </div>
      <button onClick={showData} className='btn btn-primary' style={{margin:'5px'}}>Add</button>
      </form>
      <div className='move'>
      <TodoList todoitems={value} />
      </div>
      </center>
     </div>
    </>
  );
}
