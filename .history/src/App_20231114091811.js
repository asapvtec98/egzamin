import React from "react";
import Komentarz from "./components/Comment";
function App() {
  return (
    <div className="App">
      <Komentarz title="New title" likes="4"></Komentarz>
      <Komentarz title="New title2" likes="90"></Komentarz>
    </div>
  )
}

export default App;
