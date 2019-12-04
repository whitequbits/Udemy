import React from "react";
import { robots } from "./robots";
import Cardlist from "./Cardlist";
import Searchbox from "./Searchbox";

function App() {
  return (
    <div className="tc">
      <h1>Rubofriends</h1>
      <Searchbox />
      <Cardlist robots={robots} />
    </div>
  );
}

export default App;
