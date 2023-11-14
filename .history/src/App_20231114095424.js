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
      <div className="Comment">
        <Komentarz title={comment.title} likes={comment.likes}></Komentarz>
      </div>
  )
  
  return (
    <div>
      <div>
        {displayComments}
      </div>
      <div className="filler"></div>
    </div>
  )
}

export default App;
