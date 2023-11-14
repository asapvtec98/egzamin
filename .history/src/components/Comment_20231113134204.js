import React, { useState } from "react";
import "./Comment.css"

function Komentarz(props) {
    var min = 1;
    var max = 100;
    const [likes, setLike] = useState(false);
    const [count, setCount] = useState(Math.random() * (max-min));
    const [show, setShow] = useState(true);

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
                setShow(!show)
                handleLikes();
            }}>{show === true ? 'LIKE' : 'DISLIKE'}</button>
            <p>{count}</p>
        </div>
    )
    
}
export default Komentarz;