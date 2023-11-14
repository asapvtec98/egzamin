import React from "react";
import Komentarz from "./components/Comment";
function App() {
  const comments = [
    {
      title: "First title",
      likes: 2
    },
    {
      title: "Second title",
      likes: 5
    }
  ]
  const doubledFibonacciNumbers = fibonacciNumbers.map(number => number * 2)
  return (
    <div className="App">
      { doubledFibonacciNumbers }
    </div>
  )
}

export default App;
