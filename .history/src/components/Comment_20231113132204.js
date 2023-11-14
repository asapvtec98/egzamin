import React, { useState } from "react";
import "./Comment.css"

function Komentarz(props) {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(4);
    const [show, setShow] = useState(true)
    return(
        <div className="comment">
            <h2>{props.title}</h2>
            <p>{props.likes}</p>
        </div>
    )
    
}
export default Komentarz;