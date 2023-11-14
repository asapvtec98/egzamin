import React, { useState } from "react";
import "./Comment.css"

function Komentarz(props) {
    const [likes, setLike] = useState(false);
    const [count, setCount] = useState(4);
    const [show, setShow] = useState()

    const handleLikes = () => {
        if(!likes) {
            setLike(true);
            setCount(count + 1);
        } else {
            setLike(false);
            setCount(count - 1);
        }


    };

    return(
        <div className="comment">
            <h2>{props.title}</h2>
            <button type="button" onClick={() => {
                handleLikes();
            }}>LIKE</button>
            <p>{count}</p>
        </div>
    )
    
}
export default Komentarz;