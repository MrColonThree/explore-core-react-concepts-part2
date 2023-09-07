import "./App.css";
import Counter from "./Countery";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";
function App() {
  function handleClick() {
    alert("Button Clicked!");
  }

  const handleClick2 = () => {
    alert("Button 2 clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button
        onClick={() => {
          alert("3rd click!");
        }}
      >
        third
      </button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;
