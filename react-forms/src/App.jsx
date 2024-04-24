import { useState } from "react";
import "./App.css";
import "../src/components/colorBoxMaker/box.css";

import BoxList from "./components/colorBoxMaker/BoxList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BoxList />
    </>
  );
}

export default App;
 