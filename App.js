import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const addClick = () => {
    setNumber(number + 1);
  };
  const minusClick = () => {
    setNumber(number - 1);
  };
  useEffect(() => {
    console.log(`${number}`);
  }, [number]);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={addClick}>+</button>
      <button onClick={minusClick}>-</button>
    </div>
  );
}

export default App;
