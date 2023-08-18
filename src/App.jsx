/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoApp from "./components/TodoApp";
import Counter from "./components/Counter";
import HackerNews from "./components/HackerNews";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Code running every state changes
  });
  useEffect(() => {
    // Code running every state changes
    // empty dependencies -> run 1 when component mounted []
  }, []);
  useEffect(() => {
    // Code running when state count changes
    // run first time
  }, [count]);
  const { value, toggle } = useToggle();

  const arr = [1, 2, 3, 4, 5];
  // some
  const some = arr.some((item) => item > 3); //true
  const some2 = arr.some((item) => item > 6); //false
  // every
  const every = arr.every((item) => item > 3); //false
  const every2 = arr.every((item) => item > 0); //true
  return (
    <div className="p-10">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <TodoApp></TodoApp>
       */}
      {/* <Counter></Counter> */}
      <HackerNews></HackerNews>
    </div>
  );
}

function useToggle() {
  const [value, setValue] = useState(false);
  const toggle = () => setValue(!value);
  return { value, toggle };
}

export default App;
