import { useState } from "react";
import "./App.css";
import "../src/components/colorBoxMaker/box.css";

import BoxList from "./components/colorBoxMaker/BoxList";
import TodoList from "./components/todoApp/TodoList";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BoxList />
      <hr />
      <TodoList />
    </>
  );
}

export default App;
