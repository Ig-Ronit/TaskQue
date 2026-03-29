import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button
        className="btn btn-primary btn-sm ms-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="btn btn-danger btn-sm ms-2"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
