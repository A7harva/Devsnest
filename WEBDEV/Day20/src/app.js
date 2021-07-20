import './style.css';
import data from './data.json';
import FoodCard from './components/card';
import {useState} from 'react';

function App() {
  const [state, setState] = useState(data)


  return (
    <div className="app">
    <div className="container">
      {
      (state.length>0) ?
        state.map((food) => {
          return <FoodCard state={state} setState={setState} food={food}   />;
        }):<p>No Item Left</p>
      }
      
    </div>
    </div>
  );
}

export default App;