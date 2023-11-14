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
    },
    {
      title: "Third title",
      likes: 9
    }
  ]

  const displayComments = comments.map((comment) =>
      <Komentarz title={comment.title} likes={comment.likes}></Komentarz>
  
  return (
    <div className="App">
        {displayComments}
    </div>
  )
}

export default App;
