import React from "react";
import Komentarz from "./components/Comment";
import "./App.css";
function App() {
  const comments = [
    {
      title: "First title",
      likes: 2,
      isClicked: true
    },
    {
      title: "Second title",
      likes: 5,
      isClicked: true
    },
    {
      title: "Third title",
      likes: 9,
      isClicked: false
    }
  ]

  const displayComments = comments.map((comment) =>
      <div className="Comment">
        <Komentarz title={comment.title} likes={comment.likes}></Komentarz>
      </div>
  )
  
  return (
      <div className="App">
        {displayComments}
      </div>
  )
}

export default App;
