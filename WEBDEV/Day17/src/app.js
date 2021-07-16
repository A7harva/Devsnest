import "./style.css"
import Card from "./components/card.jsx";

function App() {
  return (
    <div className="App">
      <h1>CALORIE READ ONLY</h1>
      <div className="scroll">
        <Card name = "Pizza" number = "56"/>
        <Card name = "Burger" number = "69"/>
        <Card name = "Coke" number = "500"/>
        <Card name = "Brownie" number = "180"/>
        <Card name = "Pani Puri" number = "10"/>
      </div>
    </div>
  );
}

export default App;