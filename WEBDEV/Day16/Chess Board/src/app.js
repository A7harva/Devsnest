import "./style.css"
import RowOdd from "./components/RowOdd.js";
import RowEven from "./components/RowEven.js"
function App() {
  return (
    <div className="App">
      <RowOdd/>
      <RowEven/>
      <RowOdd/>
      <RowEven/>
      <RowOdd/>
      <RowEven/>
      <RowOdd/>
      <RowEven/>
    </div>
  );
}

export default App;