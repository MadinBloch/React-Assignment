import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let addnumber = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  let removenumber = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-4xl font-bold mb-4">Count: {count}</p>
      <div className="flex space-x-4">
        <button
          className="w-[170px] bg-blue-500 px-4 py-3 text-xl rounded-md text-white"
          onClick={addnumber}
        >
          Increment
        </button>

        <button
          className="w-[170px] bg-red-500 px-4 py-3 text-xl rounded-md text-white"
          onClick={removenumber}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
